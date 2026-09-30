export interface LessonItem {
  id: string;
  number: string;
  title: string;
  duration: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CourseDetailsData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  level: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  totalLessons: string;
  totalDuration: string;
  price: number;
  pricePeriod: string;
  videoCoverUrl: string;
  videoUrl: string;
  description: string[];
  sneakPeakImages: string[];
  keyPoints: string[];
  lessons: LessonItem[];
  reviews: ReviewItem[];
  creator: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
}

export const COURSE_DETAILS_DATA: CourseDetailsData = {
  id: "build-digital-asset",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  level: "Intermediate",
  rating: 4.7,
  reviewsCount: 889,
  studentsCount: "199 Students",
  totalLessons: "112 Lessons",
  totalDuration: "24 hours",
  price: 25,
  pricePeriod: "/lifetime",
  videoCoverUrl:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  videoUrl: "#",
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeakImages: [
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  lessons: [
    {
      id: "l-1",
      number: "01",
      title: "Introduction to Digital Assets",
      duration: "12 mins",
    },
    {
      id: "l-2",
      number: "02",
      title: "Design Principles for Impacts",
      duration: "21 mins",
    },
    {
      id: "l-3",
      number: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
    {
      id: "l-4",
      number: "04",
      title: "Color Theory & Visual Hierarchy",
      duration: "18 mins",
    },
    {
      id: "l-5",
      number: "05",
      title: "Typography and Layout Mastery",
      duration: "25 mins",
    },
    {
      id: "l-6",
      number: "06",
      title: "Exporting & Asset Optimization",
      duration: "15 mins",
    },
  ],
  reviews: [
    {
      id: "r-1",
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "a year ago",
      comment:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      id: "r-2",
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "a year ago",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: "r-3",
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "a year ago",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: "r-4",
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "a year ago",
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
};
