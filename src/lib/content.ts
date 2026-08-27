export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export type CvEntry = {
  period: string;
  role: string;
  org: string;
  location: string;
  description: string;
  stack: string[];
  link?: string;
};

export type SkillGroup = {
  area: string;
  items: string[];
};

export type Language = {
  name: string;
  level: string;
};

export type TimelineEntry = {
  year: string;
  month: string;
  title: string;
  role: string;
  description: string;
};

export type GalleryItem = {
  slug: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  year: string;
  body: string[];
  photos?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "renaissance",
    title: "Renaissance",
    category: "AI / Startup",
    year: "2025",
    description:
      "Co-founded and served as CTO of a small studio designing AI agent workflows on OpenAI, Claude, and DeepSeek. Sold and delivered business-automation proposals, including CRM-integrated customer service bots.",
    tags: ["OpenAI", "Claude", "DeepSeek", "Agent Workflows"],
    link: "https://raido-ruby.vercel.app/",
  },
  {
    slug: "gnn-adhd-diagnosis",
    title: "GNN for ADHD Diagnosis in Women",
    category: "Research / Machine Learning",
    year: "2025",
    description:
      "Built at the Geometric Intelligence Workshop (Institute of Mathematics, UNAM, with UC Santa Barbara). Developed a graph neural network exploring how geometric properties in Geomstats improve diagnosis models under limited data. Won 1st place in the hackathon.",
    tags: ["Graph Neural Networks", "Geomstats", "Python", "Research"],
    link: "https://sites.google.com/im.unam.mx/giw2025",
  },
  {
    slug: "one-connection",
    title: "One Connection",
    category: "Web App / Automation",
    year: "2023",
    description:
      "Automated an HR system for a call-center company, hosted as a web app on AWS. Included predictive models that recommend the most effective communication channel and collection day based on user responses.",
    tags: ["AWS", "Automation", "Predictive Models"],
    link: "#",
  },
  {
    slug: "doors",
    title: "Doors",
    category: "Community",
    year: "2023",
    description:
      "Founded a student organization connecting students to academic and professional opportunities across science, art, technology, and design.",
    tags: ["Community", "Education"],
    link: "https://www.fciencias.unam.mx/eventos/2026/compufest230426",
  },
  {
    slug: "impulsa-tu-futuro",
    title: "Impulsa tu Futuro",
    category: "Software Engineering",
    year: "2025",
    description:
      "Full-stack web platform to share and track applications for internships, scholarships, and hackathons, featuring personalized recommendations, user profiles, notifications, and collaborative tools.",
    tags: ["Django", "React", "PostgreSQL"],
    link: "https://github.com/arielmerinos/IngenieriaSoftware",
  },
  {
    slug: "geometric-figure-identifier",
    title: "Geometric Figure Identifier",
    category: "Computational Geometry",
    year: "2023",
    description:
      "Image-processing tool that identifies geometric figures in white-background images using contour detection and centroid calculation, with distance-based algorithms to determine vertex counts and classify shapes.",
    tags: ["OpenCV", "Python"],
    link: "https://github.com/laudima/Proyecto2-Figuras",
  },
];

export const posts: Post[] = [];

export const experience: CvEntry[] = [
  {
    period: "2024 — Present",
    role: "Research Member",
    org: "Philosophy of Computing Research Group, UNAM Institute of Philosophical Research",
    location: "Mexico City",
    description:
      "Research on AI ethics, explainability models, computational critique, and alternative technological frameworks. Helping organize the 1st International Conference on Philosophy of Computing at UNAM (Oct 2025).",
    stack: ["AI Ethics", "Explainability", "Computational Critique"],
    link: "https://philcomp.org/group/",
  },
  {
    period: "2026",
    role: "CTO & Co-Founder",
    org: "Renaissance",
    location: "Mexico City",
    description:
      "Designed AI agent workflows using OpenAI, Claude, and DeepSeek. Sold and delivered business-automation proposals, including customer service bots with CRM integration.",
    stack: ["OpenAI", "Claude", "DeepSeek", "Agent Workflows", "n8n"],
  },
  {
    period: "Dec 2025 — Aug 2026",
    role: "Software Quality & AI Engineer",
    org: "Teradata",
    location: "Remote",
    description:
      "Built an end-to-end UI testing agent from scratch using LangChain, LLM-driven reasoning, and Playwright agents. Modeled and constructed a full test suite for an AI Studio platform from the ground up.",
    stack: ["LangChain", "LLM Agents", "Playwright", "Test Automation"],
  },
  {
    period: "Aug 2025 — Dec 2025",
    role: "Teaching Assistant",
    org: "Universidad Nacional Autónoma de México (UNAM)",
    location: "Mexico City",
    description:
      "Supported Professor Enrique Francisco Soto Astorga in Theory of Computation, a foundational course covering formal languages, computational models, and the hierarchy of computation from finite automata to Turing machines. Ran two weekly tutorial sessions for 38 undergraduate students.",
    stack: ["Theory of Computation", "Teaching"],
  },
  {
    period: "2023 — Dec 2025",
    role: "DevOps Engineering Intern",
    org: "Teradata",
    location: "Remote",
    description:
      "Migrated CI/CD pipelines from GitLab to GitHub Actions and developed 300+ automated tests for the SQL Editor using WebDriverIO, Docker, Kubernetes, and Jenkins, following Agile, Scrum, Kanban, and Waterfall methodologies.",
    stack: ["CI/CD", "GitHub Actions", "WebDriverIO", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    period: "2023",
    role: "Web Developer",
    org: "One Connection",
    location: "Mexico City",
    description:
      "Automated an HR system for a call-center company on a web app hosted on AWS, including prediction models for the most effective communication channel and collection day.",
    stack: ["AWS", "Automation", "Predictive Models"],
  },
  {
    period: "2022 — 2023",
    role: "Organizer & Instructor",
    org: "Pu++ Competitive Programming Club, Facultad de Ciencias, UNAM",
    location: "Mexico City",
    description:
      "Taught introductory programming and algorithmic problem-solving, helping integrate 5+ new teams into the ICPC Gran Premio.",
    stack: ["Algorithms", "Teaching", "ICPC"],
  },
  {
    period: "2018 — Present",
    role: "Coach & Tutor",
    org: "Morelos State Mathematics Olympiad Team",
    location: "Morelos, Mexico",
    description:
      "Trained children representing Morelos, Oaxaca, and Guerrero for national mathematics competitions. Taught 100+ students, helped 4 reach Mexico's IMC selection, and organized fundraising events for team travel and lodging.",
    stack: ["Mentoring", "Mathematics", "Competition Training"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    area: "Machine Learning & AI",
    items: ["Graph Neural Networks", "Topological Deep Learning", "Explainable AI", "Geomstats"],
  },
  {
    area: "Theory & Research",
    items: ["Theory of Computation", "Philosophy of Technology", "Algorithms", "Data Structures"],
  },
  {
    area: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "GitHub Actions", "Node.js", "YAML", "Figma"],
  },
  {
    area: "Languages & Methodologies",
    items: ["Python", "Java", "JavaScript", "C++", "Go", "Rust", "Lean", "SQL", "Agile", "Scrum", "Kanban"],
  },
];

export const languages: Language[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2 — Upper Intermediate" },
  { name: "German", level: "A2 — Elementary" },
];

export const gallery: GalleryItem[] = [
  {
    slug: "icpc-world-finals",
    src: "/gallery/icpc-world-finals.jpg",
    alt: "Laura Dimayuga at the ICPC World Finals",
    title: "ICPC World Finals — Luxor 2024",
    caption: "ICPC World Finals — Top 2% worldwide",
    year: "2024",
    body: [
      "Competing at the ICPC World Finals in Luxor, Egypt, alongside the best competitive programming teams from around the world, and placing in the top 2% overall.",
      "Getting there meant months of algorithmic training with my team — practicing problem sets under contest conditions, refining how we split problems, and building the kind of trust you only get from solving hard problems together under a clock.",
    ],
  },
  { 
    slug:"doors",
    src: "/gallery/doors.JPG",
    alt: "Doors student organization",
    title: "Doors — Student Organization",
    photos: [
      { src: "/gallery/doors1.JPG", alt: "This was the first event in which we present all the communities in our faculty" },
      { src: "/gallery/doors2.JPG", alt: "In 2023 we launch the 0 version, and in 2026 we had the first version" },
      { src: "/gallery/doors3.JPG", alt: "We gave Githib swag to the participants, as the event was sponsor by GitHub" },
      { src: "/gallery/doors4.JPG", alt: "I have a talk about Green Code, and different hacktons and opportunities to for enviromental issues" },
      { src: "/gallery/doors5.JPG", alt: "I loved to see all my friends reunited to share theirs passions" },
    ],
    caption: "Doors student organization, every person is a new door to a new opportunity",
    year: "2023",
    body: [
      "Founded a student organization connecting students to academic and professional opportunities across science, art, technology, and design.",
      "We organized workshops, mentorship programs, and networking events to help students explore their interests and build meaningful connections.",
    ],
  },
  {
    slug: "philosophy-of-computing-conference",
    src: "/gallery/philosophy-of-computing-conference.JPG",
    alt: "1st International Conference on Philosophy of Computing at UNAM",
    title: "1st International Conference on Philosophy of Computing",
    caption: "1st International Conference on Philosophy of Computing, UNAM",
    year: "2025",
    body: [
      "Helping organize the 1st International Conference on Philosophy of Computing at UNAM, hosted by the Philosophy of Computing Research Group at the UNAM Institute of Philosophical Research.",
      "I presented on the impossibility of compressing reality and the computational critique of techno-scientific promises, work that sits at the intersection of theory of computation and critical theory in the philosophy of technology.",
    ],
  },
  {
    slug: "geometric-intelligence-hackathon",
    src: "/gallery/geometric-intelligence-hackathon.jpg",
    alt: "Geometric Intelligence Workshop hackathon award",
    title: "Geometric Intelligence Hackathon — 1st Place",
    caption: "1st place, Geometric Intelligence hackathon (UNAM)",
    year: "2025",
    body: [
      "Built at the Geometric Intelligence Workshop, hosted by the Institute of Mathematics at UNAM in collaboration with UC Santa Barbara.",
      "My team developed a graph neural network exploring how geometric properties in Geomstats improve ADHD diagnosis models for women under limited data — an underserved case in the diagnostic literature — and won 1st place in the hackathon.",
    ],
  },
  {
    slug: "harvard-aspire-leaders",
    src: "/gallery/aspireCDMX.jpg",
    alt: "Harvard Aspire Leaders Program",
    title: "Harvard Aspire Leaders Program",
    caption: "Harvard Aspire Leaders Program — finalist",
    year: "2025",
    body: [
      "Selected as a finalist in the Harvard Aspire Leaders Program out of more than 45,000 applicants worldwide.",
      "The program brought together students working across research, technology, and community leadership — a good match for the mix of theory, AI, and mentoring I care about.",
    ],
  },
  {
    slug: "mirzakhani-mural",
    src: "/gallery/mirzakhani.jpg",
    alt: "Mural of Maryam Mirzakhani at Facultad de Ciencias, UNAM",
    title: "The Mirzakhani Mural",
    caption:
      "The mural of Maryam Mirzakhani at Facultad de Ciencias, UNAM — one reason this site is orange and black.",
    year: "2025",
    body: [
      "This site is orange and black for a few reasons: I love sunsets, I love warm light, and I love this mural of Maryam Mirzakhani at the Facultad de Ciencias, UNAM — one of my favorite murals on campus.",
      "It felt right to carry a piece of the building where I spend most of my time thinking into the site itself.",
    ],
  },
  {
    slug: "connecting-dots-essay",
    src: "/gallery/John_Searle.jpg",
    alt: "Portrait of philosopher John Searle, author of the Chinese Room argument",
    title: "Is Learning Just About Connecting (Meaningless) Dots?",
    caption:
      "An essay on Turing, Searle, and whether machine learning is learning at all",
    year: "2023",
    body: [
      "This essay responds primarily to the question, Can Artificial Intelligence (AI) learn? In the next paragraphs, I do not try to give a concrete answer but analyze both postures. If we say learning is more than a mechanical process and depends on intelligence, then we will dig up the question: Can machines Think? from Turing, and compare it with the posture of Searle where he argues that a Turing machine will lack semantics (meaning) and intentionality. Then the discussion is not if the current AI programs can learn, but if it's possible to construct Artificial Intelligence in the future (maybe not in a Turing Machine), and by that also to discuss if it's possible for artificial agents to learn, if we think they couldn't, what could be lacking?",
      "1. Turing and the origins of Machine Learning.",
      "@quote \"May not machines carry out something which ought to be described as thinking but which is very different from what a man does?\" (Turing, 1950, p.435)",
      "In 1936, Turing showed for the first time what at the end of the 20th century would mark a new technological revolution, \"The Computing Machine\" or what we currently know as computers. In this same article, he also asks \"What are the possible processes that can be carried out in a computing machine?\" (Turing, 1936, p. 249). With this, Turing not only proposes a universal abstract machine capable of solving any (computable) problem but also sets a limit to what such a machine can do by proving that there is no such thing as a Turing machine capable of determining whether a program may or may not return a result in some finite number of steps, this problem is more commonly known as The halting problem.",
      "His questioning led him to think about the limitations of machines, beyond The halting problem. What can be computable? What aspects of what we know can be replicated by a Turing machine? In short, any mechanical process. The importance of a universal machine, as he writes it:",
      "@quote We do not need to have an infinity of different machines doing different jobs. A single one will suffice. The engineering problem of producing various machines for various jobs is replaced by the office work of 'programming' the universal machine to these jobs. It is found in practice that LCMs can do anything that could be described as a 'rule of thumb' or 'purely mechanical'. (Turing, 1948, p.111)",
      "Beyond producing a universal machine that we could program to perform any task, Could we train (educate) a machine so that it can find the solution to any problem by itself? Self-programming (modify itself)? Can intelligence be programmed? 75 years ago it made no sense to ask ourselves that, but today it is a question that surely many of us have asked ourselves. As Turing (1948) proposes, in order to investigate intelligence, it is necessary to abstract the way in which we develop this capacity. If a human develops his intelligence through learning then, What are the possible ways that we could mimic, abstract, or program our learning capacities? And to what extent is simulation = duplication?",
      "Surely if we think learning is purely mechanical then we could say it can be programmed and simulated in a Turing machine. And perhaps if the current AI program doesn't model exactly learning we will find a way to program it. But, What are the current AI programs missing to agree that machine learning is the same as human learning?",
      "2. Human Machines and Syntactic Information",
      "One of the things that I found most interesting in Turing writings is this constant analogy between humans and actual digital computers as we know them today. What we missed is that in principle, humans were the first to be computers. They were the ones who made possible the discovery of Halley's comet, and we had computer factories where the computers were not machines but people. The job of a human computer was to carry out lots of mathematical operations in the most mechanical way. (Grier, 2001).",
      "So during Turing's articles (1948; 1950), we found the definitions of what would constitute a paper Machine. \"A man provided with paper, pencil, and rubber, and subject to strict discipline, is often a universal machine\" (Turing, 1948, p.113). This definition implies that all sorts of algorithms can be done by a paper machine with sufficient time and life. And with the historical background, it may make us think that Turing Machines were an attempt to abstract in the most efficient and productive way, the capacities of the current human computers at the time.",
      "If we can make the analogy between a human and a machine, it would be easy to extend the analogy between intelligence and computers. Maybe we do not need to replicate the body of a human-machine with all of its functions to replicate its intelligence. Duplicating with exact precision all our nervous systems would be too hard and too costly. This is something that Turing (1948) writes;",
      "@quote Certainly the nerve has many advantages. It is extremely compact, does not wear out (probably for hundreds of years if kept in a suitable medium!) and has very low energy consumption. Against these advantages the electronic circuits have only one counter-attraction, that of speed. This advantage is, however, on such a scale that it may possibly outweigh the advantages of the nerve. (Turing, 1948, p.117)",
      "After this, Turing started thinking about the possible ways in which we could start creating a learning program. The problem is that the learning program that we want to create, as Searle (1980) pointed out, is just a set of symbols and syntactic data, with no connection to meaning. As an example, if you copy a sheet of paper with Chinese Symbols in a Word File, then by just the sheet of paper you wouldn't have any idea of what you're writing. You just would have copied symbols.",
      "Then one of the major differences between Artificial Intelligence (AI) and Natural Intelligence (NI) is that AI only processes data (just symbols, patterns, binary, no meaning) and at some point, in our Natural Intelligence we start to process information (data with meaning). The problem can be then described as, How is it that we start to attach meaning to data? How do we construct meaning from our environment? (Floridi, 2004)",
      "We can make the program extremely complex as we want, even imagine that we could formulate a program that simulates all of the synapses in the human brain. The problem is that this program is just pure syntactical information with no semantics and the connections can be just seen as an input and output (binary).",
      "As an example of this, let me try to explain what I call the Chinese Room Experiment 2.0 (the one with water pipes). Imagine that you are in a room with water pipes, and someone gives you instructions to move and manipulate the water pipes (the program). On the other side of the room, there is someone who throws Chinese symbols into the water pipes (input). You start the process by moving and connecting the water pipes (make this the relation of the neural connections). By this system at the end, the water will flow and someone else on the other side of the room will receive the Chinese symbols and will think you know Chinese, but you know nothing! You just did a mechanical process with zero information about the meaning of the Chinese Symbols. (Searle, 1980)",
      "The problem is when we think of our neural connections, as just purely mechanical, How do we construct meaning ourselves? Maybe computers just have binary data, but how different are a graph and our neural connections? Can it be the difference between a discrete state and a continuous state?",
      "What we can conclude about this experiment is that semantics is not syntaxis. And we may think that we could construct a robot with the most robust and sensible sensors with a processor which is extremely fast. But if the program that sustains this robot is equivalent to a Turing Machine then, it falls from the same nature, it's pure syntactical with no meaning. (Searle, 1980)",
      "@quote As long as the program is defined in terms of computational operations on purely formally defined elements, what the example suggests is that these by themselves have no interesting connection with understanding. (Searle, 1980, p.418)",
      "The thing is that maybe we cannot make a program that runs in a Turing machine because that implies it lacks semantics. But if our brains are just biochemical processes, something that can be just purely mechanical, then how do we acquire the sense of semantics? Is it something intrinsic to the natural nature of the brain? Do we need carbon to create an intelligent agent? In order to create artificial intelligence, do we need to create artificial life? And if we create artificial life, how could it be proven that these agents think?",
      "Floridi (2004) selects this question, as the \"Turing Problem: Can (forms of) natural intelligence be fully and satisfactorily implemented nonbiological?\" (p.568) The problem with these sorts of questions is that anything can be an information process with a certain level of abstraction. And by this if our thinking is just a form of information processing, where is the line, when could we say if something has or does not have consciousness?",
      "3. Imitation = learning?",
      "What a Turing machine can do so well is the imitation game. A mimicking process. I myself have fallen to distinguish if I am messaging with a human or a chatbot (a contemporary form of the Turing Test). And although this is an anecdote, we are approximating that level of uncertainty. In an informational environment, in an infosphere (Floridi, 2010), what are going to be our tools to distinguish between an AI output and a human creation?",
      "Trying to prove to someone 75 years ago, that at some point the question; Can Machines Think? will be something of popular doubt, would have constituted to give a clear explanation about the possible ways in which we would see something like that happening in the future. And in my opinion, that's what Turing tries to explain with the Imitation Game. The argument for which I think Turing tries to pursue in Computing Machinery and Intelligence (1950) is to try to explain how in the future, we would have to pass the Turing Test for the ones who did not believe it. At the beginning of the text he mentions;",
      "@quote The short answer is that we are not asking whether all digital computers would do well in the game nor whether the computers at present would do well, but whether there are imaginable computers that would do well. (Turing, 1950, p.436)",
      "If we had (or will) pass the Turing Test? What is next? What can we say AI lacks in intelligence or learning?",
      "For Searle (1980) what an AI lacks is semantics and intentionality, something that seems to him a product of the brain. For him, if AI produces intentionality it must replicate the causal powers of the brain. But what are these causal powers? What Dennett replies in the same paper, is that by this Searle could be incorporating a form of Élan vital, comparing the intentionality (or consciousness) to something intrinsic to nature, and with something that only nature can replicate. But I don't think Searle would attach life to consciousness, the truth is that we don't know exactly how our consciousness works and with that, How could we know what is needed for consciousness? In order to know if something is a duplicate of intentionality we must first know what is intentionality and how it works in the human body. We have artificial hearts that can function as well as the heart, but could we create an artificial brain?",
      "As Turing (1950) stated, there is a kind of paradox when trying to find consciousness. As Dennett's reply to Searle (1980), the Chinese Room may fall from being sophistry;",
      "@quote This argument appears to be a denial of the validity of our test [The Turing Test]. According to the most extreme form of this view, the only way by which one could be sure that a machine thinks is to be the machine and to feel oneself thinking. One could then describe these feelings to the world, but of course no one would justify taking any notice. Likewise according to this view the only way to know what a man thinks is to be that particular man. It is in fact the solipsist point of view. (Turing, 1950, p.446)",
      "But then at the end of this argument, he also points out the remaining mysteries of consciousness.",
      "@quote \"I do not wish to give the impression that I think there is no mystery about consciousness. There is, for instance, something of a paradox connected with any attempt to try to localise it. But I do not think these mysteries necessarily need to be solved before we can answer the question which is concerned in this paper\". (Turing, p.446).",
      "With this paragraph, I will argue that Turing did not mean that passing the imitation game was proof of consciousness, instead passing the Turing Test is again another proof that a computer can do any mechanical process and that mimicking even a human is mechanical, it's just repetition. And if we think learning is just pure mechanical, just a mimicking process, that can be modeled with rewards and punishments as Turing (1948) tries to abstract. Then it can be replicated on a computer and in humans. But if our learning is not purely mechanical, we must give proof of what is lacking, something that we mentioned earlier, semantics, and what Turing (1948) adds initiative, as something I think may be similar to intentionality.",
      "@quote To convert a brain or machine into a universal machine is the extremest form of discipline. Without something of this kind, one cannot set up proper communication. But discipline is certainly not enough in itself to produce intelligence. That which is required in addition we call initiative. (Turing, 1948, p.125)",
      "4. Conclusions",
      "While AI programs continue to develop and imitate more and more human activities, these programs without intentionality or initiative will lack innovation and creativity. You may say these adjectives are in the same way relative to an observer as intelligence or consciousness. But, of course, we can say the same for learning. If a student only replicates the teaching of the professor, is the student learning?",
      "In the same way that we doubt machine learning, we may doubt our current learning process. Because if we plan education to be just a mechanical process, with strict discipline and a rewards and punishment system, we are doing the same as machine learning. We may not have schools but factories of paper (human) machines!",
      "What it also lacks in machine learning is what Turing (1948) states about the cultural state, the way in which we interact with our social, cultural, and natural environment. We do not learn in isolation, nor are we born in a Chinese Room. We learn so much not just by our senses, but also by the ideas of others.",
      "@quote The remaining form of search is what I should like to call the 'cultural search'. As I have mentioned, the isolated man does not develop any intellectual power. It is necessary for him to be immersed in an environment of life. He may then perhaps do a little research of his own and make a very few discoveries which are passed on to the other men. From this point of view the search for new techniques must be regarded as carried out by the human community as a whole, rather than by the individuals. (Turing, 1948, p. 127)",
      "Asking whether machines with AI programs can learn, depends a lot on the meaning that we put in learning. If we attach intelligence to learning, we may ask ourselves more questions;",
      "If what we do with our life is just a mechanical process that can be replaced with a Turing Machine, then does it make sense to continue doing it? If the education just follows the same paradigms as our professors, where does the innovation take place? If scientific discoveries are just data analysis, are we making progress?",
      "In conclusion what AI lacks is meaning, intentionality, and connection with our social-cultural environment. We must change the path from AI (Absolute Ignorance) to IA (Intelligence Amplifier), otherwise what we are making is just repetition. Are we going to continue doing just the mechanical process? Or to follow our intuitions and do things with intentionality? Can machines Think? Or Can we think? Now we do have two paths to follow.",
      "References",
      "Floridi, L. (2004). Open Problems in the Philosophy of Information. Metaphilosophy, 35(4), 554–582.",
      "Floridi, L. (2010). Information: A Very Short Introduction. Oxford University Press.",
      "Grier, D. A. (2001). Human computers: the first pioneers of the information age. Endeavour, 25(1), 28–32. doi:10.1016/s0160-9327(00)01338-7",
      "Turing, A. M. (1936). On computable numbers, with an application to the Entscheidungsproblem. Proceedings of the London Mathematical Society, s2-42(1), 230–265.",
      "Turing, A. M. (1948). Intelligent Machinery, in B. J. Copeland (ed.), The Essential Turing (Oxford, 2004; online edn, Oxford Academic, 12 Nov. 2020), https://doi.org/10.1093/oso/9780198250791.003.0016, accessed 28 Apr. 2023.",
      "Turing, A. M. (1950). Computing Machinery and Intelligence, Mind, Volume LIX, Issue 236, p. 433–460, https://doi.org/10.1093/mind/LIX.236.433",
      "Searle, J. R. (1980). Minds, brains, and programs. Behavioral and Brain Sciences, 3(3), p. 417–424.",
    ],
  },
  {
    slug: "ai-ethics-essay",
    src: "/gallery/aldous-huxley-1.jpg",
    alt: "Portrait of Aldous Huxley",
    title: "De la Ignorancia Absoluta, A un mundo feliz",
    caption:
      "An essay on ChatGPT, AI alignment, and the ethical and existential risks of artificial intelligence",
    year: "2023",
    body: [
      `En noviembre de 2022 se lanzó ChatGPT (OpenAI, 2022), una inteligencia artificial con la capacidad de generar texto a partir de una conversación interactiva con un humano, que no solo tiene la capacidad de responder preguntas, sino también de generar código, escribir ensayos, poemas, inventar palabras, cartas; en resumen, generar cualquier tipo de texto. Desde su lanzamiento, y tan solo dos meses después, adquirió más de 100 millones de usuarios; su creciente uso ha aumentado la atención hacia el futuro de la inteligencia artificial (DW, 2022). ¿Qué puede y qué no hacer una inteligencia artificial? ¿Cuáles son las limitaciones de este tipo de tecnologías? Si las inteligencias artificiales pudieran tener la habilidad de resolver cualquier problema, ¿podrán solucionar todos los problemas de la humanidad?`,
      `Mientras que las motivaciones para construir una tecnología como esta pueden variar, podemos pensar en algunas de estas; desde la mera curiosidad y necesidad de responder cualquier pregunta científica o filosófica, el deseo de querer imitar la inteligencia humana, y en mayor medida resolver cualquier problema de utilidad instrumental, es decir, su uso hacia situaciones prácticas (ej. crear una página web, agilizar un proceso industrial) (Armstrong, Sandberg & Bostrom, 2012).`,
      `Desde los inicios de la IA, Turing (1948) propone que una de las ventajas que tienen las computadoras o máquinas universales es la capacidad de hacer cualquier trabajo mecánico. El problema de tales máquinas se convierte en poder programarlas para resolver los trabajos. La idea de la inteligencia artificial nace con la intención de tener una máquina autoprogramable que, con cierto proceso de aprendizaje (ej. machine learning, deep learning), pueda por sí sola resolver cualquier problema.`,
      `Aunque este tipo de tecnologías parecen entender completamente nuestro lenguaje (hasta hacen difícil distinguir si conversamos con una persona o un chatbot, el test de Turing), la realidad es que son el resultado de algo muy diferente a la manera en que nosotros adquirimos el lenguaje. Esto es lo que Chomsky et al. (2023) llaman la falsa promesa de ChatGPT:`,
      `@quote The human mind is not, like ChatGPT and its ilk, a lumbering statistical engine for pattern matching, gorging on hundreds of terabytes of data and extrapolating the most likely conversational response or most probable answer to a scientific question.`,
      `Desde la página de lanzamiento oficial de ChatGPT podemos encontrar al menos tres limitaciones de esta tecnología: 1) no garantiza que la información generada sea verdadera; 2) puede reducir su calidad (o creatividad) de respuesta al intentar proveer una respuesta más correcta, o simplemente no responder (ej. al preguntar directamente sobre moralidad o perspectiva propia, decide no responder); 3) puede crear alucinaciones, es decir, información ficticia (OpenAI, 2022).`,
      `Aunque ChatGPT no sea un candidato a IA general por las limitaciones mencionadas, para muchos como es el caso de Bostrom (2014), parece evidente que la idea de una superinteligencia artificial, es decir, una IA que rebase a la inteligencia humana¹, es posible y representa un riesgo existencial para la humanidad.`,
      `Los problemas anteriores se relacionan con el problema de alineación, que se refiere a intentar alinear los valores humanos con las posibles acciones de una IA para que estas sean positivas para la sociedad. Mayormente, este concepto intenta evitar el riesgo existencial o la idea de una "IA malvada" (Rogue AI) (Müller, 2021), aunque la resolución de este problema también se necesita para evitar sesgos y discriminación, e intentar que las decisiones, creaciones y/o acciones de una IA sean menos perjudiciales.`,
      `Yoshua Bengio² (2023) hace una interesante analogía entre las corporaciones como entidades desalineadas y una posible IA desalineada de los principios humanos:`,
      `@quote Corporations may be viewed as special kinds of artificial intelligence whose building blocks (humans) are cogs in the machine (who for the most part may not always perceive the consequences of the corporation's overall behavior). We might think that the intended social role of corporations should be to provide wanted goods and services to humans (this should remind us of AI systems) while avoiding harm (this is the "spirit of the law"), but it is difficult to directly make them follow such instructions. Instead, humans have provided more quantifiable instructions ("the letter of the law") to corporations that they can actually follow, such as "maximize profit while respecting laws", but corporations often find loopholes that allow them to satisfy the letter of the law but not its spirit. (para. 28)`,
      `La analogía anterior sugiere que una IA con intencionalidad o inteligencia podría tener intereses contrarios al bienestar de la humanidad. Por otro lado, comparar las IAs y las corporaciones también es un tema discutido, al preguntarnos si una IA debería tener personalidad jurídica al igual que las corporaciones legalmente sostienen la categoría de personas morales. Este debate permite discutir sobre las obligaciones, derechos de autor, impuestos y responsabilidad moral de estas tecnologías (Chesterman, 2020). Incluso nos puede llevar a cuestionarnos quién es responsable de las acciones y decisiones automatizadas de una IA. Como ejemplo de este problema, en 2018 un auto de prueba manejado automáticamente por Uber mató a Elaine Herzberg; el resultado de este accidente dejó en la cárcel a la persona que monitoreaba el auto (Levin, 2020). Si más puestos de monitorización terminan asumiendo la responsabilidad por las acciones de las IAs, esto permitiría que los softwares y las compañías que las desarrollan terminen liberándose de las consecuencias. La incorporación de IAs a armas letales y de guerra también es un problema preocupante, ya que puede quitar responsabilidad a quien las usa (Müller, 2021).`,
      `La idea de que las IAs puedan potencialmente destruir a la humanidad supone, para muchas personas, un tema de ciencia ficción. Aunque las dudas son genuinas, han hecho que expertos en inteligencia artificial discutan sobre ello, como es el caso de Geoffrey Hinton (BBC News Mundo, 2023). Armstrong, Sandberg y Bostrom (2012) sugieren que usar una IA Oráculo —es decir, que no actúe en el mundo, sino que solo conteste preguntas— podría ser menos letal. Pero incluso un Oráculo como este trae consigo varios problemas: ¿cómo podemos tomar consejos de una tecnología que no sabe lo que hace?`,
      `ChatGPT puede ser un tipo de IA Oráculo, pero no es la única tecnología de este estilo. Los motores de búsqueda más populares, como Google y Bing, pretenden incorporar esta tecnología en las búsquedas de todos los usuarios, lo cual podría reducir la investigación de algo en particular a una sola respuesta de este Oráculo. Si no solo la información que obtenemos, sino también las decisiones que tomamos, se basan en el resultado de estas tecnologías, podríamos caer en una especie de algocracia (algocracy) (Aneesh, 2002), o gubernamentalidad algorítmica (término mencionado en Reyes, 2022). Aún si las IAs no adquieren conciencia propia, el hecho de que evolucionan tan rápido hace que cada vez sea más difícil entender cómo funcionan y saber por qué arrojan ciertos resultados; esto se conoce como el problema de la opacidad (Burrell, 2016). Este problema evidencia una de las maneras en las que podríamos perder el control sobre las decisiones automatizadas.`,
      `Por otro lado, la posibilidad de este riesgo existencial nos puede hacer cuestionarnos sobre las preocupaciones y problemas éticos actuales que surgen alrededor del uso de las IAs. A continuación presentaré algunas de las problemáticas actuales alrededor de esta tecnología.`,
      `1. Privacidad y control`,
      `Uno de los temas más discutidos alrededor del uso de datos personales es cómo estos representan un modelo de negocio para algunas empresas al ser utilizados con fines mercadotécnicos. El "capitalismo de vigilancia" nos manipula para concentrar cada vez más nuestra atención en el uso de estas aplicaciones y seguir alimentando su fuente principal de datos (Müller, 2021). La manipulación y el reforzamiento de sesgos personales no solo se encuentran en redes sociales: estos algoritmos de aprendizaje a base de información personal se han desplazado a diversos sectores, incluyendo la atención psicológica artificial (Wakefield, 2023). Mientras que en el pasado ha existido interferencia humana para manipular las noticias e información que se muestra a los usuarios —como en el caso de Facebook-Cambridge Analytica—, la nueva preocupación es que este problema se amplifique debido a los propios sesgos de los algoritmos, generando mayor adicción y polarización en redes sociales (Wu et al., 2022).`,
      `Al mezclar el uso de datos personales con IA nos enfrentamos a nuevos obstáculos, como poder generar contenido falso acerca de una persona —ya sea su voz, imagen, expresiones faciales, estilo de escritura— e incluso generar pornografía falsa (deepfake pornography). Solo hasta junio de 2020, más de 100,000 mujeres fueron víctimas de este tipo de venganza pornográfica (Hao, 2021). No solo nos exponemos a un cierto estilo de manipulación mediante la selección más sofisticada de la información y el contenido que se nos muestra, sino que además podrían existir conversaciones entre chatbots y personas sin que estas sepan que hablan con una inteligencia artificial, lo cual resultaría conveniente para estas plataformas, pues aumentaría su engagement o tiempo de consumo (ej. Facebook, LinkedIn, Snapchat) (Vincent, 2023).`,
      `2. Desempleo, centralización y desigualdad`,
      `De acuerdo con un estudio de Goldman Sachs (Hatzius et al., 2023), alrededor de 300 millones de empleos a nivel global podrían automatizarse, y alrededor de un cuarto de los trabajos podría sustituirse con herramientas generativas de IA. La adopción de este tipo de tecnologías, al menos en algún grado, impactaría las tareas del 80% de los trabajos en el mundo (Eloundou et al., 2023). Aunque en el pasado tecnologías como las computadoras personales o el internet han reemplazado algunos trabajos, la preocupación actual es: ¿será posible la creación de más de 100 millones de trabajos en el poco tiempo en que esta tecnología se incorpore a gran escala? ¿Y qué tipo de trabajos serían los incorporados?`,
      `3. Impacto ambiental`,
      `Mientras que las IAs tienen un impacto positivo al ser herramientas efectivas para monitorear el clima, hacer análisis en tiempo real y predecir diversos factores —como la concentración atmosférica de CO2, los cambios en la masa de los glaciares y el aumento del nivel del mar— (UN, 2022), por otro lado, la huella de carbono del procesamiento de millones de datos puede ser preocupante. Para un solo modelo de IA se producen 300,000 kg de emisiones de dióxido de carbono, lo que equivale a 125 vuelos de Nueva York a Berlín. Esto podría incrementarse, ya que la capacidad computacional necesaria para entrenar los modelos se ha duplicado cada 3.4 meses desde 2012, superando por mucho la Ley de Moore (Dhar, 2020).`,
      `Conclusiones`,
      `Aunque los avances en los modelos de inteligencia artificial siguen progresando, los problemas mencionados anteriormente no dependen de las capacidades técnicas de los modelos, sino, más bien, del uso que se les dé. Por más que intentemos hacer una IA que pueda resolver cualquier problema analítico, mecánico o creativo, tenemos que voltear a ver los problemas que el rápido desarrollo de esta tecnología podría ocasionar. Y si bien existe la posibilidad de generar proyectos que impacten de manera positiva a la sociedad, hay que estar conscientes de los usos que mayormente se le darían para poder regularlos. Tal vez pensar en la posibilidad de una superinteligencia, y darnos cuenta de que tendría las motivaciones para acabar con la humanidad, nos haga reflexionar sobre el uso que hacemos de la tecnología y sobre el propósito que le damos.`,
      `Notas`,
      `¹ Este evento también es conocido como la Singularidad: el momento en que una inteligencia artificial rebase a la inteligencia humana.`,
      `² Ganador del premio Turing junto con Geoffrey Hinton y Yann LeCun por su trabajo en aprendizaje profundo (deep learning).`,
      `Referencias`,
      `Aneesh, A. (2002). Technological modes of governance: Beyond private and public realms. Actas de la 4th International Summer Academy on Technology Studies.`,
      `Armstrong, S., Sandberg, A., & Bostrom, N. (2012). Thinking inside the box: Controlling and using an Oracle AI. Minds & Machines, 22, 299–324. https://doi.org/10.1007/s11023-012-9282-2`,
      `BBC News Mundo. (2023, 2 de mayo). Geoffrey Hinton, "padrino de la inteligencia artificial": "En este momento los sistemas de IA no son más inteligentes que nosotros, pero creo que pronto lo serán". BBC. https://www.bbc.com/mundo/noticias-65464637`,
      `Bengio, Y. (2023, 22 de mayo). How rogue AIs may arise. Yoshua Bengio. https://yoshuabengio.org/2023/05/22/how-rogue-ais-may-arise/`,
      `Bostrom, N. (2014). Superintelligence: Paths, dangers, strategies. Oxford University Press.`,
      `Burrell, J. (2016). How the machine "thinks": Understanding opacity in machine learning algorithms. Big Data & Society, 3(1). https://doi.org/10.1177/2053951715622512`,
      `Chesterman, S. (2020). Artificial intelligence and the limits of legal personality. International & Comparative Law Quarterly, 69(4), 819–844. https://doi.org/10.1017/S0020589320000366`,
      `Chomsky, N., Roberts, I., & Watumull, J. (2023, 8 de marzo). Noam Chomsky: The false promise of ChatGPT. The New York Times. https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html`,
      `Dhar, P. (2020). The carbon impact of artificial intelligence. Nature Machine Intelligence, 2, 423–425. https://doi.org/10.1038/s42256-020-0219-9`,
      `DW. (2022, 9 de diciembre). ChatGPT: El bot viral y futuro de la IA que podría cambiarlo todo. DW.COM. https://p.dw.com/p/4KkyH`,
      `Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2023). GPTs are GPTs: An early look at the labor market impact potential of large language models. arXiv preprint arXiv:2303.10130.`,
      `Hao, K. (2021, 20 de octubre). A deepfake bot is being used to "undress" underage girls. MIT Technology Review. https://www.technologyreview.com/2020/10/20/1010789/ai-deepfake-bot-undresses-women-and-underage-girls/`,
      `Hatzius, J., Briggs, J., Kodnani, D., & Pierdomenico, G. (2023). The potentially large effects of artificial intelligence on economic growth. Goldman Sachs Economic Research. https://www.gspublishing.com/content/research/en/reports/2023/03/27/d64e052b-0f6e-45d7-967b-d7be35fabd16.html`,
      `Levin, S. (2020, 16 de septiembre). Safety driver charged in 2018 incident where self-driving Uber car killed a woman. The Guardian. https://www.theguardian.com/us-news/2020/sep/16/uber-self-driving-car-death-safety-driver-charged`,
      `Müller, V. C. (2021). Ethics of artificial intelligence and robotics. En E. N. Zalta (ed.), The Stanford Encyclopedia of Philosophy (edición de verano de 2021). https://plato.stanford.edu/archives/sum2021/entries/ethics-ai/`,
      `OpenAI. (2022). Introducing ChatGPT. https://openai.com/blog/chatgpt`,
      `Reyes, C. (2022). Inteligencia artificial y acumulación en el capitalismo contemporáneo. Crónicas de la Bifurcación, Boletín del LET, 1(3), 59–86.`,
      `Searle, J. R. (1980). Minds, brains, and programs. Behavioral and Brain Sciences, 3(3), 417–457.`,
      `Turing, A. M. (1948). Intelligent machinery. En B. J. Copeland (ed.), The Essential Turing (Oxford, 2004; edición en línea, Oxford Academic, 12 de noviembre de 2020). https://doi.org/10.1093/oso/9780198250791.003.0016`,
      `UN. (2022). How artificial intelligence is helping tackle environmental challenges. UNEP. https://www.unep.org/news-and-stories/story/how-artificial-intelligence-helping-tackle-environmental-challenges`,
      `Vincent, J. (2023, 10 de marzo). The semiautomated social network is coming. The Verge. https://www.theverge.com/23632371/social-network-future-ai-automated-chatbot-posts-linkedin`,
      `Wakefield, J. (2023, 2 de abril). Would you open up to a chatbot therapist? BBC News. https://www.bbc.com/news/business-65110680`,
      `Wogu, I. A. P., et al. (2017). Artificial intelligence, alienation and ontological problems of other minds: A critical investigation into the future of man and machines. 2017 International Conference on Computing Networking and Informatics (ICCNI), Lagos, Nigeria, 1–10. https://doi.org/10.1109/ICCNI.2017.8123792`,
      `Wu, C., Wu, F., Qi, T., et al. (2022). Removing AI's sentiment manipulation of personalized news delivery. Humanities and Social Sciences Communications, 9, 459. https://doi.org/10.1057/s41599-022-01473-1`,
    ],
  },
  {
    slug: "compressing-reality-essay",
    src: "/gallery/chaitin.jpg",
    alt: "Portrait of mathematician Gregory Chaitin",
    title:
      "La imposibilidad de comprimir la realidad- una crítica computacional a la promesa tecnocientífica",
    caption:
      "A talk on Gödel, Chaitin's Ω, and the computational limits of what AI can discover, predict, or understand",
    year: "2023",
    body: [
      `Resumen`,
      `En esta ponencia, propongo una crítica desde la teoría de la computación y la epistemología científica al entusiasmo tecnocientífico que coloca a la inteligencia artificial como motor revolucionario del conocimiento. A partir del teorema de incompletitud de Gödel, el número Ω de Chaitin y la teoría de la complejidad computacional, argumento que existen límites inherentes a lo que las máquinas pueden comprender, predecir o descubrir, incluso con modelos de inteligencia artificial avanzada. Reviso brevemente algunos modelos de IA aplicados a la ciencia (como AlphaFold de Google o AI4Science de Microsoft) y cuestiono si estos realmente representan un avance hacia la comprensión o simplemente una sofisticación en la predicción. Concluyo que, frente a estos límites, debemos volver a preguntarnos por el sentido, el significado y el rol de la ciencia como búsqueda y no sólo como herramienta predictiva. Esta reflexión se inscribe dentro de los debates actuales sobre la tecnopolítica del conocimiento en el siglo XXI.`,
      `Abstract`,
      `In this essay, I critique the idea that AI will revolutionize science. First, I present some of the limitations of computation given by Gödel's Incompleteness Theorem and the complexity of Chaitin's number Ω, as presented in his article The Limits of Reason; after that, I present a brief notion of computational complexity in relation to the limits of what we can know. In the next section, I describe some of the computational models built to do science and briefly summarize the current advances in AI-driven science.`,
      `1. Motivación`,
      `En la búsqueda de la verdad, de la comprensión de los patrones y de las leyes universales que nos rigen, buscamos encontrar reglas consistentes y verdades objetivas. ¿Cuáles son los límites de la computación para expresar las leyes de la naturaleza? ¿Cómo podemos utilizar herramientas computacionales para desarrollar ciencia, no sólo con fines utilitarios o prácticos, sino para encontrar modelos que encapsulen nuestro entendimiento de la realidad? ¿Podemos llevar a cabo un programa para un desarrollo de la ciencia posthumanista o transhumanista?`,
      `Si incorporamos la inteligencia artificial como herramienta o guía a nuevos descubrimientos, ¿qué intentamos perseguir en la búsqueda de la verdad? ¿Podemos encontrar un método eficiente de verificabilidad para estos algoritmos? Cuando la ciencia utiliza datos para construir modelos predictivos, ¿qué significa encontrar un descubrimiento, un nuevo teorema o un nuevo patrón? ¿Estamos construyendo una forma automatizada de la intuición? Y si es así, ¿cuáles son las consecuencias de desarrollar una forma automatizada de ciencia?`,
      `@quote Who of us would not be glad to lift the veil behind which the future lies hidden; to cast a glance at the next advances of our science and the secrets of its development during future centuries? (Hilbert, 1902, p. 437)`,
      `2. Los límites de la computación y de la razón`,
      `Las matemáticas se fundamentan en axiomas para construir teoremas a partir de deducciones lógicas, que a su vez dan pie a nuevos resultados, todo bajo un lenguaje formal. Este proceso, que quiere ser independiente de la subjetividad de quien lo lleve a cabo, le da a las matemáticas su sentido de universalidad y verdad.`,
      `Hilbert (1902) buscaba tener una teoría del todo matemática que respondiera al problema de encontrar la verdad o falsedad de cualquier proposición lógica (das Entscheidungsproblem). El trabajo de Gödel (1931), Turing (1936) y Church (1936) mostró la incompletitud de las matemáticas y definió las nociones de cómputo e incomputabilidad, mismas que se relacionan con el concepto de decidibilidad de un lenguaje, o de manera equivalente, con mostrar si una proposición es falsa o verdadera.`,
      `Para Chaitin (2006), el teorema de la incompletitud es solo la punta del iceberg. A partir de su descubrimiento del número Ω, demostró que existe un número infinito de problemas incomputables e indemostrables a partir de un sistema de axiomas finito. La conexión importante entre Chaitin y su número Ω, para el propósito de este ensayo, se centra en la relación de complejidad dentro de los modelos computacionales y en cómo estos podrían o no encapsular a las leyes naturales.`,
      `En el Discurso de Metafísica de Leibniz (1989), en su sección VI, se distingue entre los hechos regulares e irregulares que podemos observar: escribe sobre la ley perfecta que Dios puso en el universo, y sobre la abstracción como herramienta para comprender los hechos regulares (patrones) como leyes naturales que nos ayuden a comprimir su comportamiento para acercarnos al conocimiento. De alguna manera, entender los patrones del mundo exterior, abstraerlos a fórmulas y comprimirlos a modelos más concisos es, para él, nuestra manera de acercarnos al entendimiento de la realidad.`,
      `Chaitin (2006) retoma esta noción de compresión desde la teoría algorítmica de la información para hablar de la relación entre el tamaño de un programa y su salida, y la relaciona con los modelos científicos:`,
      `@quote The basic insight is a software view of science: a scientific theory is like a computer program that predicts our observations, the experimental data [...]. A useful theory is a compression of the data; comprehension is compression. You compress things into computer programs, into concise algorithmic descriptions. The simpler the theory, the better you understand something. (Chaitin, 2006, p. 77)`,
      `La importancia de Ω es que su comportamiento aleatorio lo hace incomprimible: para calcular N bits de Ω se necesita al menos un programa de N bits de tamaño. Pensando en la idea de Leibniz, esto, para mí, es un límite no solo hacia lo que podemos calcular o demostrar, sino también hacia nuestro entendimiento de la realidad; al menos, esto demuestra la complejidad infinita de las matemáticas y que nuestro entendimiento de ellas nunca será completo, ni siquiera al agregar nuevos axiomas.`,
      `@quote "God plays dice not only in quantum mechanics but also in the foundations of mathematics." (Chaitin, 2012, p. 116)`,
      `No solo existen problemas incomputables y hechos incomprimibles. Si quisiéramos simular la deducción de un resultado a partir de ciertas hipótesis, o demostrar un problema a partir de ciertos axiomas, también nos encontramos con los límites marcados por la complejidad computacional. La teoría de la complejidad computacional se divide principalmente en dos ejes, la memoria y el tiempo.`,
      `Existen problemas conceptualmente fáciles, como saber si existe o no un camino de tamaño K para alguna gráfica, o resolver un sudoku; ambos pertenecen a la clase de complejidad NP-completo, lo que implica que un sudoku lo suficientemente grande —algo así como de 50×50— no podría resolverse a lo largo de toda nuestra vida. Formalmente, que un problema sea NP (tiempo polinomial no determinista) implica que su solución es fácil de verificar, pero que el algoritmo que lo resuelve no es polinomial; es decir, el tiempo para encontrar una solución crece exponencialmente.`,
      `Existe toda una jerarquía de clasificaciones de complejidad, pero por ahora enfoquémonos en cuáles son las consecuencias de que un algoritmo tenga complejidad en tiempo exponencial. Por ejemplo, pensemos en un problema de entrada n, con una complejidad de O(2ⁿ); digamos que tenemos una computadora que hace 10⁸ operaciones por segundo, y que el universo tiene aproximadamente 10¹⁸ segundos existiendo. Si corriéramos una computadora actual desde el inicio del universo hasta ahora, haría 10²⁶ operaciones; nos bastaría con que n = 100 para sobrepasar el número de operaciones que una computadora corriendo desde el inicio del universo podría hacer.`,
      `Es un hecho que los problemas que se pueden solucionar en el tiempo de nuestra existencia —los problemas de la clase P (resolubles en tiempo polinomial)— son un subconjunto de los NP; es decir, son una cantidad mucho menor que la de las otras clases de complejidad que están por encima de NP. Así que si queremos encontrar algoritmos para simular métodos científicos, estos tienen que ser eficientes. Es extraño pensar que en algún momento podremos descubrir la solución a muchas preguntas científicas conceptualmente más difíciles, si existen problemas simples para los que todavía no encontramos una solución eficiente.`,
      `Pensar que existe una cantidad infinita de problemas no computables, y que los problemas que podemos resolver eficientemente son considerablemente menos, no ha sido un obstáculo para suponer que cualquier proceso se puede simular en una computadora (incluso el universo). Deutsch (1985), uno de los principales promotores de un modelo computacional para el universo, argumenta que las leyes matemáticas rigen el comportamiento de la física y que estas serían computables (Piccinini, 2011). Para otros como; Hilary Putnam, David Chalmers o Daniel Dennett, la mente se podría ver como un modelo de cómputo. Esta idea se conoce como computacionalismo y ha sido una de las ramas filosóficas con algunas aportaciones al desarrollo de la inteligencia artificial.`,
      `Si para algunos la mente y el universo son en sí mismos modelos computables, no es extraño pensar en juntar ambas ideas; es decir, en juntar nuestra capacidad cognitiva —que nos ha permitido desarrollar ciencia y explorar una versión codificada del universo— con un programa que pueda establecer hipótesis y construir modelos científicos a partir de ella.`,
      `En la siguiente sección, mostraré algunos de los intentos que se han hecho para realizar programas orientados a descubrimientos científicos.`,
      `3. El desarrollo de la ciencia computacional`,
      `Existen modelos científicos que corresponden a nuestra comprensión de la realidad; un ejemplo es el desarrollo de la física, donde las matemáticas juegan un papel crucial. Dichos modelos pueden interpretarse mediante lenguaje, matemáticas, diagramas, iconos, etc., pero se basan en una teoría formal para explicar su consistencia y verdad, fundamentada en la lógica y en la semántica formal.`,
      `Muchos de los modelos computacionales actuales que simulan descubrimientos científicos no se basan en pruebas formales, sino que utilizan principalmente heurísticas; es decir, métodos de aproximación estadística. Además, buscan "approximate methods for attempting to cut through data complexity and find patterns" [aproximar métodos para intentar superar la complejidad de los datos y encontrar patrones] (Thagard, 2004, p. 2).`,
      `Thagard (2004) hace un interesante resumen de diferentes modelos computacionales creados para intentar simular y contribuir al pensamiento científico desde dos perspectivas diferentes: primero, expone los modelos cognitivos que intentan modelar el pensamiento científico a partir de modelos conexionistas; segundo, habla de modelos de ingeniería de inteligencia artificial, en donde se utilizan algoritmos de manera similar a la minería de datos para encontrar patrones dentro de observaciones numéricas o cadenas de palabras que codifican hipótesis.`,
      `Al hablar de modelos cognitivos del pensamiento científico, Thagard se centra en cómo se puede simular la generación de leyes numéricas, la formación de conceptos teóricos, la abducción y la analogía, propiedades que para él son elementos clave en nuestro pensamiento científico. Su modelo, ECHO, utiliza un enfoque conexionista para establecer un vínculo por coherencia (coherence) entre hipótesis y evidencias, ambas modeladas como proposiciones lógicas. Thagard (1992) utiliza este modelo para evidenciar la adopción de teorías más consistentes con las observaciones (simulando revoluciones científicas); como ejemplo, modela la coherencia en las proposiciones del modelo de Lavoisier a favor de la teoría del oxígeno.`,
      `Por otra parte, se discuten los modelos de inteligencia artificial desarrollados principalmente a partir de algoritmos de aprendizaje automatizado (machine learning); este tema es analizado por Thagard (2004) con proyectos de la década de 1990, aunque se han desarrollado muchos más desde entonces. Uno de los ejemplos más famosos es AlphaFold, desarrollado por Google después de la creación de AlphaGo, un proyecto centrado en el desdoblamiento de proteínas con grandes expectativas de aportar nuevos avances en medicina y biología.`,
      `Por otra parte, Microsoft tiene un campo de investigación abierto dedicado a realizar descubrimientos científicos con IA (AI4Science), y afirma que su uso potenciará el quinto paradigma del descubrimiento científico: siendo el primer paradigma la observación, el segundo la concepción de una teoría de modelos naturales —como la Philosophiæ Naturalis Principia Mathematica de Newton—, el tercero la computación numérica para verificar las ecuaciones de los modelos, y el cuarto el descubrimiento científico intensivo basado en análisis de datos (Bishop, 2022).`,
      `El principal pilar para intentar potenciar la ciencia con inteligencia artificial ha sido simular los siguientes elementos: la formación de hipótesis, el diseño experimental, y la recopilación y análisis de datos. La reciente adopción de la IA en la ciencia ha aportado contribuciones como, por ejemplo: el mejoramiento del pronóstico del tiempo, la optimización del diseño de baterías, el control magnético de reactores de fusión nuclear, la planificación de rutas de síntesis química, solucionadores neuronales de ecuaciones diferenciales, la planificación de ubicación de centrales hidroeléctricas, la generación de registros médicos electrónicos sintéticos, la selección de eventos en colisiones de partículas, el modelado de lenguaje para secuencias biomédicas, y más (Wang et al., 2023).`,
      `@quote In AI-driven scientific discovery, scientific knowledge can be incorporated into AI models using appropriate inductive biases, which are assumptions representing structure, symmetry, constraints and prior knowledge as compact mathematical statements. However, applying these laws can lead to equations that are too complex for humans to solve, even with traditional numerical methods. (Wang et al., 2023, p. 48)`,
      `Hago uso de la cita anterior para evidenciar que, incluso en la incorporación actual de la inteligencia artificial, estos modelos no logran comprimir del todo las observaciones científicas a modelos más simples que podamos entender. Retomando la manera en que Leibniz (1989) lo expresa: si derramamos tinta en una hoja y obtenemos puntos arbitrarios, podremos encontrar una expresión matemática —dígase una función, utilizando métodos numéricos— que exprese el comportamiento de dichos puntos. Con esto estaríamos encontrando una "ley natural" que, en realidad, no expresa nada. Una función que, si bien predice los puntos que encontremos, deja de lado el significado dentro de ella.`,
      `Aaronson (2011), en el capítulo siete de su artículo, "PAC-Learning and the Problem of Induction", retoma el problema de la inducción de David Hume y la navaja de Occam. Creo que es interesante plantear el problema de la inducción al hablar de modelos predictivos: incluso si encontramos un algoritmo que predice con corrección observaciones de uno, dos o tres años, ¿cómo podemos garantizar que haga lo mismo en el siguiente siglo? La otra idea es que los modelos de IA utilizan grandes expresiones matemáticas para predecir sus hipótesis, lo cual contradice la idea de la navaja de Occam, que básicamente dice que las explicaciones más simples son mejores. Aunque este no es un principio probado, en cierto modo es similar a la idea de Chaitin y Leibniz sobre que las leyes naturales tienen que ser simples. En el resto del capítulo, Aaronson (2011) explica una aproximación matemático-formal al principio de la navaja de Occam utilizando el PAC (Probabilistically Approximately Correct) Learning de Leslie Valiant.`,
      `Volviendo a Thagard (2004): en su artículo hace una distinción entre simular un descubrimiento y encontrar evaluaciones consistentes del modelo, es decir, tratar de justificar la corrección de los modelos; y al final, habla sobre el límite que nos impone la complejidad computacional, y da una interesante analogía entre la teoría del aprendizaje formal y los modelos científicos como programas de software:`,
      `@quote Scientific discovery can be viewed as a problem in formal-learning theory, in which the goal is to identify a language given a string of inputs (Gold 1968). Analogously, a scientist can be thought of as a function that takes as input a sequence of formulas representing observations of the environment and produces as output a set of formulas that represent the structure of the world (Jain, Osherson, Royer, & Sharma 1999; Kelly & Glymour 1989; Martin & Osherson 1998; Osherson & Weinstein 1989). (Thagard, 2004, p. 2)`,
      `Contrario a esta analogía entre un programa y un modelo científico, podríamos decir que encontrar un modelo que encaje en el mundo corresponde a una codificación y decodificación de la realidad a partir de un sistema formal, pero este sistema podría no ser necesariamente computable. Esta idea corresponde con la epistemología de Rosen (1987) y con sus trabajos posteriores, donde escribe sobre cómo tratar de encontrar un modelo que represente a la vida. En pocas palabras, Rosen (1991) utiliza el formalismo de la teoría de categorías y da un modelo relacional para entender la vida; su modelo utiliza algunas propiedades autorreferenciales que lo hacen no computable.`,
      `4. ¿Seguimos buscando significado o predictibilidad?`,
      `Me falta completar esta sección, la cual sería un collage de ideas de las siguientes fuentes.`,
      `• The end of philosophy, Heidegger`,
      `• Toward a critical social theory of AI: Knowledge, information, and intelligence in the later works of André Gorz`,
      `• La revolución tecnocientífica, Javier Echeverría`,
      `• The wisdom of ancients (De Sapientia Veterum), Francis Bacon`,
      `• El problema de la caja negra y la explicabilidad de la inteligencia artificial (Explainable AI)`,
      `• Teoría de modelos epistémicos de Robert Rosen en el concepto de modelos explicativos para la ciencia`,
      `• La inteligencia artificial o el desafío del siglo, Eric Sadin`,
      `• Aunque la IA no sea solo una reducción instrumentalista de la cognición, las propiedades emergentes que pudieran existir en una red neuronal no implican cognición, el problema del significado y de la construcción de la semántica en una máquina abstracta sigue sin resolverse. Instrumental Reason, Algorithmic Capitalism, and the Incomputable (Parisi, 2015)`,
      `5. Conclusiones`,
      `Desde mi punto de vista, existe la esperanza de que la IA nos ayude a responder las grandes preguntas sin respuesta de la ciencia, como el origen de la vida, la teoría del todo para la física, el entendimiento de nuestro propio pensamiento, o preguntas dentro de la misma computación, como ¿NP = P? Creo que las expectativas hacia la IA rebasan sus límites, y que su uso sigue siendo una manera optimista de pensar que la tecnología solucionará otros problemas sociales, como el cambio climático, la salud, la reducción del uso de energía y la distribución de los recursos naturales. Espero que, en las próximas décadas, se siga persiguiendo un entendimiento del mundo en lugar de buscar un modelo predictivo que solo eficientice procesos. Existen problemas irresolubles dentro del poder de una máquina; me parece extraño pensar, con optimista ilusión, que solo es cuestión de tiempo para desarrollar una inteligencia artificial general que nos ayude a entender nuestra consciencia, el universo o la vida. Tratar de entender estos tres ha sido uno de los motores del desarrollo de la ciencia; sería una lástima olvidarlo en el camino de tratar de ajustar una curva a puntos arbitrarios en una hoja de papel.`,
      `Bibliografía`,
      `Aaronson, S. (2011). Why philosophers should care about computational complexity. Preprint para Computability: Turing, Gödel, Church, and beyond. MIT Press.`,
      `Bishop, C. (2022). AI4Science to empower the fifth paradigm of scientific discovery. Microsoft Research. https://www.microsoft.com/en-us/research/blog/ai4science-to-empower-the-fifth-paradigm-of-scientific-discovery/`,
      `Buckner, C., & Garson, J. (2019). Connectionism. En E. N. Zalta (ed.), The Stanford Encyclopedia of Philosophy (edición de otoño de 2019). https://plato.stanford.edu/archives/fall2019/entries/connectionism/`,
      `Chaitin, G. (2006). The limits of reason. Scientific American, 294(3), 74–81.`,
      `Chaitin, G. (2012). Conversations with a mathematician: Math, art, science and the limits of reason. Springer.`,
      `Church, A. (1936). A note on the Entscheidungsproblem. Journal of Symbolic Logic, 1, 40–41.`,
      `Deutsch, D. (1985). Quantum theory, the Church-Turing principle and the universal quantum computer. Proceedings of the Royal Society of London, Series A, Mathematical and Physical Sciences, 400(1818), 97–117. https://doi.org/10.1098/rspa.1985.0070`,
      `Dong, Q., Dong, L., Xu, K., Zhou, G., Hao, Y., Sui, Z., & Wei, F. (2023). Large language model for science: A study on P vs. NP. arXiv preprint arXiv:2309.05689.`,
      `Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik, 38(1), 173–198.`,
      `Hilbert, D. (1902). Mathematical problems. Bulletin of the American Mathematical Society, 8(10), 437–479.`,
      `Leibniz, G. W. (1989). Discourse on metaphysics: 1686 (pp. 303–330). Springer Netherlands.`,
      `Piccinini, G. (2011). The physical Church–Turing thesis: Modest or bold? The British Journal for the Philosophy of Science, 62(4), 733–769.`,
      `Rescorla, M. (2020). The computational theory of mind. En E. N. Zalta (ed.), The Stanford Encyclopedia of Philosophy (edición de otoño de 2020). https://plato.stanford.edu/archives/fall2020/entries/computational-mind/`,
      `Rosen, R. (1987). Some epistemological issues in physics and biology. En B. J. Hiley & F. D. Peat (eds.), Quantum implications: Essays in honour of David Bohm (pp. 314–327). Routledge.`,
      `Rosen, R. (1991). Life itself: A comprehensive inquiry into the nature, origin, and fabrication of life. Columbia University Press.`,
      `Searle, J. R. (1980). Minds, brains, and programs. Behavioral and Brain Sciences, 3(3), 417–457.`,
      `Sipser, M. (2005). Introduction to the theory of computation (2a ed.). Course Technology.`,
      `Soto-Astorga, E. F. (2022). Sistemas de metabolismo-reparación: Una implementación exploratoria en programación orientada a objetos.`,
      `Thagard, P. (1992). Conceptual revolutions. Princeton University Press.`,
      `Thagard, P. (2004). Computing in the philosophy of science. En L. Floridi (ed.), The Blackwell guide to the philosophy of computing and information (pp. 307–317).`,
      `Turing, A. M. (1936). On computable numbers, with an application to the Entscheidungsproblem. Proceedings of the London Mathematical Society, 42(2), 230–265.`,
      `Wang, H., Fu, T., Du, Y., et al. (2023). Scientific discovery in the age of artificial intelligence. Nature, 620, 47–60. https://doi.org/10.1038/s41586-023-06221-2`,
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    month: "August",
    title: "Cornell, Maryland, Max Planck Pre-doctoral Research School",
    role: "Participant",
    description: "Hosted at the Max Planck Institute for Software Systems in Saarbrücken, Germany. Attended lectures with faculty from participating institutions on a variety of cutting-edge topics in computer science, including social computing, visual computing, generative AI, machine learning, algorithmic decision making, reconfigurable computer architectures, high-performance computing, type systems, and network verification.",
  },
  {
    year: "2026",
    month: "April",
    title: "2nd Symposium on Philosophy of Law - UNAM",
    role: "Panelist",
    description: "Presented a panel on philosophy of computing, discussing the incomputability of law, responsibility in technological design, digital rights, intellectual property, and computational identity. Argued that computational artifacts are and must remain tools, not epistemic authorities, and that privacy and transparency in data handling are essential to recognizing our own behaviors and mitigating the biases technology amplifies. Panel with Sara Rangel, Miguel Andrade, Lucía Aumann, and Axel Rodríguez.",
  },
  {
    year: "2025",
    month: "October",
    title: "Harvard Aspire Leaders Program",
    role: "Finalist - Top 9362",
    description: "Selected as one of 9362 finalists from 45000+ students worldwide for leadership development program",
  },
  {
    year: "2025",
    month: "October",
    title: "International Conference on Philosophy of Computing",
    role: "Organizer & Presenter",
    description: "Helping organize first international conference covering cybernetic culture, technopolitics, gender and society in computing, ethical problems in computing; presenting research on computational critiques",
  },
  {
    year: "2025",
    month: "August",
    title: "Teaching Assistant - Theory of Computation, UNAM",
    role: "Teaching Assistant",
    description: "Supported Professor Enrique Francisco Soto Astorga in Theory of Computation, covering formal languages, computational models, and the hierarchy of computation from finite automata to Turing machines; ran two weekly tutorial sessions for 38 undergraduate students",
  },
  {
    year: "2025",
    month: "October",
    title: "Book of Proceedings, International Conference on Philosophy of Computing",
    role: "Writer and Editor (in progress)",
    description: "Contributing author to the proceedings volume from the first international conference; expanding conference paper into a full article on computational critiques and AI ethics",
  },
  {
    year: "2025",
    month: "July",
    title: "eDefAI Conference - Italy",
    role: "Invited Presenter",
    description: "Invited to Ethical Design for AI - Logic for the AI Spring conference; presenting on impossibility of compressing reality and computational critique of techno-scientific promises",
  },
  {
    year: "2025",
    month: "May",
    title: "Renaissance",
    role: "CTO & Co-Founder",
    description: "Designed AI agent workflows using OpenAI, Claude, and DeepSeek; sold business automation proposals, customer service bots with CRM integration, and presentation proposals",
  },
  {
    year: "2025",
    month: "May",
    title: "Technopolitics Congress",
    role: "Attendee",
    description: "Attended congress organized by National School of Anthropology and History",
  },
  {
    year: "2025",
    month: "May",
    title: "AWS Community Day",
    role: "Attendee",
    description: "Attended AWS community technology event",
  },
  {
    year: "2025",
    month: "April",
    title: "Geometric Intelligence Workshop",
    role: "1st Place Hackathon",
    description: "Explored Topological Deep Learning, GNNs, and Geomstats; developed graph neural network for ADHD diagnosis prediction in women; won first place",
  },
  {
    year: "2025",
    month: "April",
    title: "AI Summit - IIMAS",
    role: "Attendee",
    description: "Attended AI Summit organized by IIMAS (UNAM), OpenAI, and Fintual",
  },
  {
    year: "2025",
    month: "March",
    title: "National Development Plan",
    role: "Participant",
    description: "Participated in Mexico's National Development Plan as part of Sovereignty and Humanities, Science, Technology and Innovation committee",
  },
  {
    year: "2025",
    month: "March",
    title: "Day of the Girl and Women in Science",
    role: "Invited Speaker",
    description: "Invited by Secretary of Education for commemoration event",
  },
  {
    year: "2025",
    month: "March",
    title: "Intellectual Property Law Reform Forum",
    role: "Panelist",
    description: "Expert panelist in institutional forum on intellectual property and industrial property law reform",
  },
  {
    year: "2024",
    month: "November",
    title: "2nd Philosophy of Computing Symposium",
    role: "Attendee",
    description: "Attended symposium on philosophy and computing",
  },
  {
    year: "2024",
    month: "September",
    title: "Code Green",
    role: "Member",
    description: "Multidisciplinary student initiative applying AI to climate change problems in southern Mexico; developed collaborative research on environmental impacts and AI-based mitigation strategies",
  },
  {
    year: "2024",
    month: "August",
    title: "Philosophy of Computing Research Group",
    role: "Research Member",
    description: "Joined research group exploring AI ethics, explainability models, computational critiques, and alternative technological frameworks",
  },
  {
    year: "2024",
    month: "June",
    title: "Women's Mathematics Olympiad",
    role: "Leader",
    description: "Led organization of national women's mathematics olympiad",
  },
  {
    year: "2024",
    month: "July",
    title: "Training Camp - Argentina",
    role: "Participant",
    description: "Competitive programming training camp at Universidad Nacional de Rosario",
  },
  {
    year: "2024",
    month: "April",
    title: "ICPC World Finals - Luxor Egypt",
    role: "Honorable Mention - Top 2%",
    description: "Represented Mexico at world finals, placed in top 2% of 50000+ participants from 3406 universities worldwide",
  },
  {
    year: "2023",
    month: "September",
    title: "Teradata",
    role: "DevOps Engineering Intern",
    description: "CI/CD pipeline migration from GitLab to GitHub Actions, developed 300+ automated tests for SQL Editor using WebDriver IO, Docker, Kubernetes, Jenkins",
  },
  {
    year: "2023",
    month: "May",
    title: "1st Colloquium on Philosophy of Computing",
    role: "Presenter",
    description: "Presented \"Can we create AI for the good of humanity?\"",
  },
  {
    year: "2023",
    month: "August",
    title: "Doors",
    role: "Founder",
    description: "Founded student organization promoting community development, connecting students with academic/professional opportunities through science, art, technology, and design",
  },
  {
    year: "2023",
    month: "August",
    title: "One Connection",
    role: "Web Developer",
    description: "Automated HR system for call centers with AWS web app, including prediction models for optimal communication channels and collection days",
  },
  {
    year: "2023",
    month: "August",
    title: "Quantum Computing School",
    role: "Student",
    description: "Completed quantum computing educational program",
  },
  {
    year: "2023",
    month: "August",
    title: "AWS Summit",
    role: "Attendee",
    description: "Attended AWS cloud computing summit",
  },
  {
    year: "2023",
    month: "March",
    title: "ICPC Latin America Regional",
    role: "3rd Place Mexico",
    description: "Won 3rd place nationally with 1000+ teams, qualified for World Finals in Egypt",
  },
  {
    year: "2022",
    month: "December",
    title: "Mate Olimpiadas Oaxaqueñas",
    role: "Volunteer Trainer",
    description: "Taught mathematics to children 10-14 years old for one week preparing for ONMAPS and OMMEB",
  },
  {
    year: "2022",
    month: "October",
    title: "ICPC Gran Premio",
    role: "9th Place - Team Cagua++",
    description: "Qualified for nationals among top 47 teams from 250+ competing (aiming for World Finals)",
  },
  {
    year: "2022",
    month: "August",
    title: "Pu++ Competitive Programming Club",
    role: "Organizer & Instructor",
    description: "Member organizer teaching data structures and algorithms, helped 5+ new teams join ICPC",
  },
  {
    year: "2022",
    month: "September",
    title: "14th Donald Knuth Programming Contest",
    role: "3rd Place Women",
    description: "Programming competition organized by ESCOM-IPN, sponsored by OmegaUp and Meta (~30 participants)",
  },
  {
    year: "2022",
    month: "June",
    title: "Surrogate Motherhood Analysis Course",
    role: "Participant",
    description: "Feminist analysis of surrogacy in Mexico by UNAM Gender Equity Commission",
  },
  {
    year: "2022",
    month: "May",
    title: "Google Career Certificates - Inroads",
    role: "Scholar",
    description: "Completed Project Management Foundations and Data Foundations courses",
  },
  {
    year: "2022",
    month: "April",
    title: "Women in Programming Contest",
    role: "2nd Place",
    description: "Monthly programming competition by Mujeres en Programación and OmegaUp (~25 participants)",
  },
  {
    year: "2022",
    month: "February",
    title: "Women's Mathematics Olympiad",
    role: "Tutor & Commissioner",
    description: "Trained Morelos state team and supervised national competition exams via Zoom",
  },
  {
    year: "2021",
    month: "August",
    title: "UNAM - Computer Science",
    role: "Undergraduate Student",
    description: "Started Computer Science degree at Faculty of Sciences with Introduction to CS honors",
  },
  {
    year: "2021",
    month: "May",
    title: "FIRST Innovation Challenge",
    role: "School Representative",
    description: "Prototyped smart yoga mat with Arduino (JavaScript) to improve physical activity",
  },
  {
    year: "2021",
    month: "May",
    title: "Kits4Children",
    role: "Co-Founder & Ambassador",
    description: "Founded NGO with Su Ah Kim and 10 girls worldwide; provided tutoring in English and math to students in Mexico, US, and India; raised funds and donated 10 tablets to Zambia school",
  },
  {
    year: "2021",
    month: "May",
    title: "1000 Girls 1000 Futures",
    role: "Participant",
    description: "International STEM mentorship program by New York Academy of Sciences, connected with mentors worldwide",
  },
  {
    year: "2021",
    month: "January",
    title: "Euclid Mathematics Contest",
    role: "School Medal Champion",
    description: "Best student in school with above-global-average score (+15000 participants)",
  },
  {
    year: "2020",
    month: "May",
    title: "Lebotics Robotics Courses",
    role: "Instructor",
    description: "Taught free online programming and robotics courses to 25 primary and secondary students",
  },
  {
    year: "2020",
    month: "November",
    title: "Science & Technology Congress",
    role: "Participant",
    description: "1st Congress by Red Mundial de Jóvenes Políticos del Estado de México",
  },
  {
    year: "2020",
    month: "November",
    title: "Nanotechnology Courses - INA",
    role: "Student",
    description: "Completed courses: Introduction to Nanotechnology and Bottom-Up Synthesis Methods",
  },
  {
    year: "2019",
    month: "November",
    title: "OMM Bronze Medal",
    role: "Bronze Medallist",
    description: "Bronze medal at Mexican Mathematics Olympiad - shortlisted for EGMO",
  },
  {
    year: "2019",
    month: "August",
    title: "Volleyball Team - Borregas CVA",
    role: "Team Member",
    description: "First place municipal in ADECOPA tournament",
  },
  {
    year: "2019",
    month: "August",
    title: "Agua Simple Magazine - IMTA",
    role: "Editor and Translator",
    description: "Translated articles to English, German, and easy-reading formats; presented at International Book Fair (FIL Minería)",
  },
  {
    year: "2019",
    month: "May",
    title: "UN Model - UNCTEC",
    role: "Participant - 2nd Honorable Mention",
    description: "Represented Nigeria at World Bank commission with position papers and resolutions",
  },
  {
    year: "2018",
    month: "February",
    title: "Professional Tax Consulting",
    role: "Intern",
    description: "Organized invoices, created Excel macros and templates, managed company social media",
  },
  {
    year: "2018",
    month: "August",
    title: "Tecnológico de Monterrey",
    role: "High School Student",
    description: "Started high school with Academic Talent Scholarship (best entrance exam score)",
  },
  {
    year: "2018",
    month: "June",
    title: "Festival Matemático - UNAM",
    role: "Staff/Volunteer",
    description: "Explained set theory through card games at mathematics festival in downtown Cuernavaca, organized by UNAM Mathematics Institute",
  },
  {
    year: "2018",
    month: "May",
    title: "Mexican Mathematics Olympiad - Trainer",
    role: "Coach/Trainer",
    description: "Started training children for state and national mathematics olympiads in Morelos and Guerrero (200+ students trained over years)",
  },
  {
    year: "2018",
    month: "January",
    title: "Volunteer - CAMI",
    role: "Mentor",
    description: "Mentored Yeimi (6 years old), tutoring and educational activities twice per week for 4 months",
  },
  {
    year: "2017",
    month: "Various",
    title: "Gauss Mathematics Contest",
    role: "Bronze Medal",
    description: "International mathematics competition",
  },
  {
    year: "2017",
    month: "Various",
    title: "ONMAPS & OMMEB",
    role: "Silver Medal",
    description: "National silver medals in mathematics competitions",
  },
  {
    year: "2016",
    month: "Various",
    title: "BBVA Chavos que Inspiran Scholarship",
    role: "Scholar - 10 Years",
    description: "10-year scholarship program with mentoring and courses in design thinking and financial education",
  },
  {
    year: "2015",
    month: "November",
    title: "ONMAPS (National Math Olympiad)",
    role: "Bronze Medal",
    description: "First national medal in mathematics olympiad held in Mexicali - Baja California",
  },
  {
    year: "2015",
    month: "March",
    title: "Olympiad of Children's Knowledge (OCI)",
    role: "Winner - 1st Place State",
    description: "Won first place statewide, met President Enrique Peña Nieto, awarded BBVA Foundation scholarship",
  },
  {
    year: "2014",
    month: "August",
    title: "Mexican Mathematics Olympiad",
    role: "Competitor",
    description: "Started competing in mathematics olympiads representing Guerrero state",
  },
];

export const education = [
  {
    period: "2021 — Present",
    title: "B.Sc. Computer Science (in progress, thesis stage)",
    org: "Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)",
  },
];

export const profile = {
  name: "Laura Dimayuga",
  role: "B.Sc. Computer Science & Explainable AI Researcher",
  location: "Mexico City, Mexico",
  blurb:
    "My academic interests center on theory of computation, philosophy of science, and combining different mathematical tools to get more trusty machine learning models. I also have experience in DevOps, cloud computing, and AI agent workflows. I’m passionate about building communities, mentoring students, and helping others grow.",
  email: "laudima@ciencias.unam.mx",
  github: "https://github.com/laudima",
  linkedin: "https://www.linkedin.com/in/laudima/",
  instagram: "https://www.instagram.com/laudimaa/",
};
