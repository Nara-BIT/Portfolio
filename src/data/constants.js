import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

/* ─── Navigation ─── */
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#coding" },
  { name: "Contact", href: "#contact" },
];

/* ─── Social links ─── */
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
    name: "YouTube",
    url: "https://www.youtube.com/@BrawlyisliveYT",
    Icon: FaYoutube,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/narasinghjadhav03/",
    Icon: FaInstagram,
  },
];

/* ─── Skills ─── */
export const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "JavaScript",
  "Python",
  "C",
  "C++",
  "Java",
  "Machine Learning",
  "Docker",
  "Apache Kafka",
  "Apache Spark",
  "Git",
  "Linux",
  "REST APIs",
  "Data Structures",
  "Algorithms",
];

/* ─── Experience ─── */
export const experience = {
  role: "Software Engineer Intern",
  company: "Tattvira Private Ltd.",
  period: "2025",
  teamLead: "Team OS",
  highlights: [
    "Built a real-time CCTV monitoring dashboard in React and Tauri, delivering live feed display, alert visualization, and incident management across connected cameras.",
    "Designed a FastAPI + Redis backend for real-time alert ingestion and routing, handling event streams from an AI pipeline detecting crowd density, medical emergency, and violence via YOLO.",
    "Integrated Polars for fast analytical processing of surveillance event logs, replacing pandas for 5x faster query performance on large historical datasets.",
  ],
};

/* ─── Hackathons ─── */
export const hackathons = [
  {
    name: "PW x RIFT 2026 Hackathon",
    result: "Participant",
    project: "Autonomous CI/CD Healing Agent",
    description:
      "Built an intelligent self-healing agent that monitors CI/CD pipelines in real-time, using LLMs to automatically diagnose and fix errors.",
  },
  {
    name: "Byte Quest Vibecode Hackathon 2026",
    result: "Finalist",
    org: "Ramdeobaba University",
    project: "Hallucination Check AI",
    description:
      "Developed an AI tool to detect hallucinations in AI-generated text, flagging fake citations and fabricated claims.",
  },
];

/* ─── Projects (all 11, manually curated) ─── */
export const projects = [
  {
    id: 1,
    name: "Autonomous CI/CD Healing Agent",
    description:
      "An intelligent self-healing agent that monitors CI/CD pipelines in real-time, using LLMs (LangChain + OpenAI) to automatically diagnose error logs and suggest immediate code fixes. Reduces manual troubleshooting by automating the feedback loop between pipeline failures and remediation.",
    techStack: ["Python", "OpenAI", "LangChain", "CI/CD"],
    github: "https://github.com/Nara-BIT/Autonomous_CI-CD_Healing_Agent",
    year: "2026",
    gradient: "from-violet-600 to-indigo-800",
  },
  {
    id: 2,
    name: "Hallucination Check AI",
    description:
      "An AI-powered tool to detect hallucinations in AI-generated text using the Google Gen AI SDK. Automatically scans responses and flags fake citations or fabricated claims with a visualization interface.",
    techStack: ["Python", "JavaScript", "Google Gen AI SDK"],
    github: "https://github.com/bhuvantharanath/HallucinationCheck_AI",
    year: "2026",
    gradient: "from-emerald-600 to-teal-800",
  },
  {
    id: 3,
    name: "Auto-Complete System Using Trie",
    description:
      "A fast auto-complete search engine built using the Trie data structure, providing real-time word suggestions as users type. Optimized for speed and memory efficiency.",
    techStack: ["C++", "Data Structures", "Trie"],
    github: "https://github.com/Nara-BIT/Auto-Complete_System_Using_Trie",
    year: "2025",
    gradient: "from-orange-500 to-red-700",
  },
  {
    id: 4,
    name: "Early Oral Cancer Detection Using XAI",
    description:
      "A machine learning system for early oral cancer detection using Explainable AI (XAI) techniques. Provides interpretable predictions to assist medical professionals in diagnosis.",
    techStack: ["Python", "TensorFlow", "XAI", "ML"],
    github: "https://github.com/Nara-BIT/Early_Oral_Cancer_detection_using_XAI",
    year: "2025",
    gradient: "from-pink-600 to-rose-800",
  },
  {
    id: 5,
    name: "Multi-Threaded HTTPS Proxy Server",
    description:
      "A high-performance, multi-threaded HTTPS proxy server capable of handling concurrent connections. Implements SSL/TLS tunneling and efficient request forwarding.",
    techStack: ["C", "Networking", "Multithreading", "HTTPS"],
    github: "https://github.com/Nara-BIT/Multi_Threaded_HTTPS_Proxy_Server",
    year: "2025",
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    id: 6,
    name: "Packet Inspection & Analyzer",
    description:
      "A network packet inspection and analysis tool that captures, decodes, and visualizes network traffic in real-time. Supports multiple protocols for deep packet analysis.",
    techStack: ["Python", "Networking", "Scapy"],
    github: "https://github.com/Nara-BIT/Packet_Inspection_and_Analyzer",
    year: "2025",
    gradient: "from-amber-500 to-orange-700",
  },
  {
    id: 7,
    name: "Wikipedia Sentiment Analysis",
    description:
      "A real-time data pipeline using Docker, Apache Kafka and Spark Streaming to capture and analyze live Wikipedia edits globally. Applies NLP for sentiment scoring with a live Streamlit dashboard.",
    techStack: ["Python", "Kafka", "Spark", "PostgreSQL", "Docker"],
    github: "https://github.com/Nara-BIT/Wikipedia-Sentiment-Analysis",
    year: "2025",
    gradient: "from-blue-600 to-purple-800",
  },
  {
    id: 8,
    name: "DevAPI Index",
    description:
      "A curated index and discovery platform for developer APIs. Organizes APIs by category with search, filtering, and documentation links to help developers find the right tools quickly.",
    techStack: ["JavaScript", "React", "APIs"],
    github: "https://github.com/Nara-BIT/DevAPI_Index",
    year: "2025",
    gradient: "from-teal-500 to-emerald-700",
  },
  {
    id: 9,
    name: "Blood Donation Analysis",
    description:
      "Data analysis and visualization project exploring blood donation patterns, donor demographics, and prediction models using Python data science libraries.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/Nara-BIT/Blood-Donation-Anlaysis",
    year: "2024",
    gradient: "from-red-600 to-pink-800",
  },
  {
    id: 10,
    name: "Live Voting System",
    description:
      "A real-time voting platform enabling users to create polls, cast votes, and see live results update instantly with WebSocket-based real-time synchronization.",
    techStack: ["JavaScript", "React", "Node.js", "Socket.io"],
    github: "https://github.com/Nara-BIT/Live_Voting_System",
    year: "2024",
    gradient: "from-indigo-500 to-violet-700",
  },
  {
    id: 11,
    name: "Live Crypto Tracker",
    description:
      "A real-time cryptocurrency price tracker with live charts, market data, and portfolio tracking. Fetches data from crypto APIs for up-to-date market insights.",
    techStack: ["JavaScript", "React", "APIs", "Charts"],
    github: "https://github.com/Nara-BIT/Live_Crypto_Tracker",
    year: "2024",
    gradient: "from-yellow-500 to-amber-700",
  },
];

/* ─── LeetCode Stats ─── */
export const leetcodeStats = {
  total: 500,
  easy: 160,
  medium: 270,
  hard: 70,
  rating: 1780,
  profile: "https://leetcode.com/u/BrawlyNara007/",
};

/* ─── Codeforces Stats ─── */
export const codeforcesStats = {
  handle: "Nara_on_Run",
  profile: "https://codeforces.com/profile/Nara_on_Run",
};

/* ─── YouTube Videos ─── */
export const youtubeVideos = [
  { id: "7lYfW-LvDtQ", title: "Video Edit 1" },
  { id: "HGHVMzL6-oM", title: "Video Edit 2" },
  { id: "NS91uwjxNRg", title: "Video Edit 3" },
  { id: "AsWRAencG48", title: "Video Edit 4" },
  { id: "GnZ4ZkEXYpg", title: "Video Edit 5" },
];

export const youtubeChannel = "https://www.youtube.com/@BrawlyisliveYT";

/* ─── Blog ─── */
export const blog = {
  title: "Antronian Saga",
  url: "https://antroniansaga.blogspot.com/2026/06/antron-and-earth.html",
  description:
    "Fiction stories exploring sci-fi worlds and epic narratives — a creative writing hobby.",
};