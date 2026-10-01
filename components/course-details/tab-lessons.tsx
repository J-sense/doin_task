"use client";

import { Video } from "lucide-react";
import { CourseDetailsData } from "./course-details-data";
import { TabSectionTitle } from "./tab-section-title";

interface TabLessonsProps {
  course: CourseDetailsData;
}

const MODULES = [
  {
    id: "m-1",
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    id: "m-2",
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    id: "m-4",
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    id: "m-5",
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    id: "m-6",
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    id: "m-7",
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export function TabLessons({ course }: TabLessonsProps) {
  return (
    <div className="flex flex-col gap-10 text-neutral-800 select-none">
      <div className="flex flex-col gap-3">
        <TabSectionTitle>Explore the Modules</TabSectionTitle>
        <p className="text-sm sm:text-base text-[#4B4C53] font-normal leading-relaxed">
          Immerse yourself in the course content as we break down each module into
          comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <TabSectionTitle>Lesson List</TabSectionTitle>

        <div className="flex flex-col gap-6">
          {MODULES.map((module) => (
            <div key={module.id} className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#D4FB20] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <Video className="w-6 h-6 text-neutral-900 fill-neutral-900" />
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="text-base sm:text-[16px] font-normal text-[#242528]">
                  {module.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#82868E] font-normal leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <TabSectionTitle>Lesson Content</TabSectionTitle>
        <p className="text-sm sm:text-base text-[#4B4C53] font-normal leading-relaxed">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <TabSectionTitle>Lesson Progress Tracking</TabSectionTitle>
          <p className="text-sm sm:text-base text-[#4B4C53] font-normal leading-relaxed">
            Witness your growth as you complete lessons, with an intuitive
            progress tracking feature guiding you through your learning journey.
          </p>
        </div>

        <div className="w-full max-w-[723px] p-4 bg-white rounded-2xl border border-neutral-300 backdrop-blur-[10px] flex flex-col justify-start items-start gap-2">
          <div className="text-neutral-800 text-sm font-medium leading-4">
            Learning Progress
          </div>
          <div className="text-neutral-800 text-4xl font-semibold leading-10">
            55%
          </div>
          <div className="w-full h-2 bg-zinc-200 rounded-3xl overflow-hidden mt-1">
            <div className="h-full bg-[#D4FB20] rounded-3xl w-[55%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
