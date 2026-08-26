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
};
