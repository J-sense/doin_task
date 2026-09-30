export interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  level: string;
  price: number;
  pricePeriod: string;
  imageUrl: string;
  category: string;
  studentsCount: string;
  studentAvatars: string[];
}

export const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

export const SAMPLE_COURSES: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    price: 25,
    pricePeriod: "/lifetime",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    category: "UI/UX Design",
    studentsCount: "26+",
    studentAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    ],
  },
  {
    id: "2",
    title: "Build Digital Asset",
    author: "by purepearl studio",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    price: 25,
    pricePeriod: "/lifetime",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    category: "Graphic Design",
    studentsCount: "26+",
    studentAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    ],
  },
  {
    id: "3",
    title: "the Power of Big Data",
    author: "by purepearl studio",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    price: 25,
    pricePeriod: "/lifetime",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Data Science",
    studentsCount: "26+",
    studentAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    ],
  },
  {
    id: "4",
    title: "Balancing Productivity and...",
    author: "by purepearl studio",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    price: 25,
    pricePeriod: "/lifetime",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    category: "Productivity",
    studentsCount: "26+",
    studentAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    ],
  },
  {
    id: "5",
    title: "Mastering Money Management...",
    author: "by purepearl studio",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    price: 25,
    pricePeriod: "/lifetime",
    imageUrl:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    category: "Freelance & Entrepreneurship",
    studentsCount: "26+",
    studentAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    ],
  },
  {
    id: "6",
    title: "From Idea to Startup Success...",
    author: "by purepearl studio",
    rating: 4.5,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    price: 25,
    pricePeriod: "/lifetime",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    studentsCount: "26+",
    studentAvatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    ],
  },
];
