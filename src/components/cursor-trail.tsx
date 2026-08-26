import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  radius: number;
  life: number;
  maxLife: number;
  hueShift: number;
};

const SPAWN_INTERVAL_MS = 22;
const DOT_LIFETIME_MS = 2200;
const HOLD_RATIO = 0.4;

export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const dots: Dot[] = [];
    let lastSpawn = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const now = performance.now();
      if (now - lastSpawn < SPAWN_INTERVAL_MS) return;
      lastSpawn = now;

      dots.push({
        x,
        y,
        radius: 3 + Math.random() * 4,
        life: DOT_LIFETIME_MS,
        maxLife: DOT_LIFETIME_MS,
        hueShift: (Math.random() - 0.5) * 18,
      });

      if (dots.length > 160) dots.shift();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    let rafId: number;
    let lastFrame = performance.now();

    const draw = (now: number) => {
      const dt = now - lastFrame;
      lastFrame = now;

      ctx.clearRect(0, 0, width, height);

      for (let i = dots.length - 1; i >= 0; i--) {
        const dot = dots[i];
        dot.life -= dt;
        if (dot.life <= 0) {
          dots.splice(i, 1);
          continue;
        }

        const t = dot.life / dot.maxLife;
        const fade = t > 1 - HOLD_RATIO ? 1 : t / (1 - HOLD_RATIO);
        const eased = fade * fade;
        const radius = dot.radius * (0.5 + 0.5 * eased);

        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          radius
        );
        gradient.addColorStop(
          0,
          `oklch(0.74 0.19 ${52 + dot.hueShift} / ${0.55 * eased})`
        );
        gradient.addColorStop(
          0.6,
          `oklch(0.71 0.19 ${52 + dot.hueShift} / ${0.28 * eased})`
        );
        gradient.addColorStop(1, `oklch(0.71 0.19 52 / 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      <canvas ref={canvasRef} aria-hidden="true" className="hidden md:block" />
    </div>
  );
}
