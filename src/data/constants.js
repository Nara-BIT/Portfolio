import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

/* ─── Navigation ─── */
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#coding" },
  { name: "Contact", href: "#contact" },
];

/* ─── Social links (using safe, universally available icons) ─── */
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Nara-BIT",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/narasingh-s-jadhav-0031a7245/",
    Icon: FaLinkedinIn,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/BrawlyNara007/",
    Icon: SiLeetcode,
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Nara_on_Run",
    Icon: FaCode,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/narasinghjadhav03/",
    Icon: FaInstagram,
  },
];

/* ─── Skills ─── */
export const skillCategories = [
  {
    title: "Full Stack (MERN)",
    description: "Building robust web applications end to end",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Data Engineering",
    description: "Designing and building scalable data pipelines",
    skills: [
      "AWS S3",
      "Apache Kafka",
      "Apache Airflow",
      "Apache Spark",
      "Python",
      "ETL Pipelines",
      "Data Modeling",
    ],
  },
  {
    title: "Database & DevOps",
    description: "Managing data stores and delivery pipelines",
    skills: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Git / GitHub",
      "Linux",
      "CI / CD",
    ],
  },
  {
    title: "DSA & Competitive Programming",
    description: "Strong problem-solving & algorithmic thinking",
    skills: [
      "Data Structures",
      "Algorithms",
      "C++",
      "Java",
      "Python",
      "LeetCode (400+)",
      "Codeforces",
    ],
  },
];

/* ─── Projects (manually curated) ─── */
export const projects = [
  {
    id: 1,
    name: "Autonomous CI/CD Self-Healing System",
    description:
      "Built an intelligent self-healing agent that monitors CI/CD pipelines in real-time, using LLMs (LangChain + OpenAI) to automatically diagnose error logs and suggest immediate code fixes. Reduced manual troubleshooting time by automating the feedback loop between pipeline failures and remediation. Built at PWxRIFT 2026 hackathon.",
    techStack: ["Python", "OpenAI", "LangChain", "CI/CD"],
    language: "Python",
    github: "https://github.com/Nara-BIT/Autonomous_CI-CD_Healing_Agent",
    live: null,
    featured: true,
  },
  {
    id: 2,
    name: "FactCheck AI — Hallucination Detection",
    description:
      "Developed an AI-powered tool to detect hallucinations in AI-generated text using the Google Gen AI SDK. Designed a mechanism to automatically scan responses and flag fake citations or fabricated claims. Implemented a JavaScript interface to visualize unreliable data, ensuring statements are backed by verifiable sources.",
    techStack: ["Python", "JavaScript", "HTML/CSS", "Google Gen AI SDK"],
    language: "Python",
    github: "https://github.com/bhuvantharanath/HallucinationCheck_AI",
    live: null,
    featured: true,
  },
  {
    id: 3,
    name: "Wikipedia Sentiment Analysis",
    description:
      "Built a real-time data pipeline in Docker to capture, process, and analyze live edits happening across Wikipedia globally. Used Apache Kafka and Spark Streaming to handle continuous text streams, applying NLP on the fly to score sentiment. Flowed processed data into PostgreSQL and built a live Streamlit dashboard to visualize trends.",
    techStack: ["Python", "Kafka", "Spark", "PostgreSQL", "Streamlit", "Docker"],
    language: "Python",
    github: "https://github.com/Nara-BIT/Wikipedia-Sentiment-Analysis",
    live: null,
    featured: true,
  },
  {
    id: 4,
    name: "Live Voting System",
    description:
      "A real-time voting platform enabling users to create polls, cast votes, and see live results update instantly. Built with a focus on concurrency handling, real-time data synchronization, and a clean interactive UI for seamless user experience.",
    techStack: ["JavaScript", "React", "Node.js", "MongoDB", "Socket.io"],
    language: "JavaScript",
    github: "https://github.com/Nara-BIT/Live_Voting_System",
    live: null,
    featured: false,
  },
  {
    id: 5,
    name: "Blood Donation Analysis",
    description:
      "Data analysis and visualization project exploring blood donation patterns, donor demographics, and prediction models. Used Python data science libraries to clean, analyze, and present actionable insights through interactive charts and statistical summaries.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    language: "Python",
    github: "https://github.com/Nara-BIT/Blood-Donation-Anlysis",
    live: null,
    featured: false,
  },
];

/* ─── LeetCode Stats ─── */
export const leetcodeStats = {
  total: 400,
  easy: 130,
  medium: 210,
  hard: 60,
  rating: 1551,
  profile: "https://leetcode.com/u/BrawlyNara007/",
};

/* ─── Codeforces Stats ─── */
export const codeforcesStats = {
  handle: "Nara_on_Run",
  profile: "https://codeforces.com/profile/Nara_on_Run",
};

/* ─── Aspiration cards ─── */
export const aspirations = [
  {
    title: "Build Scalable Systems",
    text: "Design and build distributed systems that serve millions of users with high availability and fault tolerance.",
  },
  {
    title: "Master Data Engineering",
    text: "Become proficient in orchestrating large-scale data pipelines and real-time streaming architectures.",
  },
  {
    title: "Open-Source Contribution",
    text: "Give back to the developer community by contributing to open-source tools and frameworks.",
  },
  {
    title: "Continuous Growth",
    text: "Stay at the cutting edge of technology — always learning, always shipping, always improving.",
  },
];