export interface VideoData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  category: string;
}

export const freeVideos: VideoData[] = [
  {
    id: "1",
    title: "Forex Basics: Understanding Currency Pairs",
    description: "Learn the fundamentals of forex trading and how currency pairs work in the global market.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "15:30",
    category: "Basics"
  },
  {
    id: "2", 
    title: "Technical Analysis: Reading Charts Like a Pro",
    description: "Master the art of technical analysis and learn to read forex charts effectively.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "22:45",
    category: "Technical Analysis"
  },
  {
    id: "3",
    title: "Risk Management: Protecting Your Capital", 
    description: "Essential risk management strategies every forex trader must know.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "18:20",
    category: "Risk Management"
  },
  {
    id: "4",
    title: "Trading Psychology: Mastering Your Mind",
    description: "Learn how to control emotions and develop the right mindset for successful trading.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", 
    youtubeId: "dQw4w9WgXcQ",
    duration: "25:10",
    category: "Psychology"
  },
  {
    id: "5",
    title: "Market Analysis: Fundamental Factors",
    description: "Understanding how economic events and news impact currency movements.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", 
    duration: "20:35",
    category: "Fundamental Analysis"
  },
  {
    id: "6",
    title: "Live Trading Session: Real Market Examples",
    description: "Watch live trades being executed and learn from real market scenarios.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "45:00", 
    category: "Live Trading"
  }
];

export const videoCategories = [
  "All",
  "Basics",
  "Technical Analysis", 
  "Risk Management",
  "Psychology",
  "Fundamental Analysis",
  "Live Trading"
];