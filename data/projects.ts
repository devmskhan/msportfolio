export type Project = {
  title: string;
  desc: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Crypto Mining Game",
    desc: "A gamified platform where users mine tokens, complete daily tasks, and earn rewards. Features Telegram Bot integration, referral systems, and task-based engagement.",
    stack: ["Next.js", "Firebase", "Cloud Firestore", "Telegram Bot"],
  },
  {
    title: "AI Kids Learning App",
    desc: "Interactive voice-based learning with a cartoon AI character. Multilingual support (Hausa, Yoruba, Arabic), Whisper STT, ElevenLabs TTS, fine-tuned AI models, and parent dashboards.",
    stack: ["Next.js", "Whisper", "ElevenLabs", "Hugging Face", "TypeScript"],
  },
  {
    title: "Political Campaign Website",
    desc: "Campaign platform with membership registration, donation system, manifesto, empowerment programs, scholarships, and gallery.",
    stack: ["Next.js", "Tailwind", "Firebase"],
  },
  {
    title: "E-Book System",
    desc: "A digital e-book management system focused on user-friendly access, efficient content delivery, and scalable architecture.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
];
