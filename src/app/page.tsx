import { Hero } from "@/components/sections/hero";
import { AnimatedAside } from "@/components/sections/animated-aside";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ResearchFundingSection, HonorsSection, AcademicServiceMentorshipSection } from "@/components/sections/service-section";
import { InternshipsSection, EducationSection } from "@/components/sections/edu-exp-section";
import { TalksSection } from "@/components/sections/talks-section";
import { ValuesSection } from "@/components/sections/values-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Academic CV content — only visible after scrolling past the hero */}
      <div className="container pt-12 pb-20">
        <div className="flex gap-10">
          <AnimatedAside />

          <main className="flex-1 min-w-0">
            <PublicationsSection />
            <ResearchFundingSection />
            <InternshipsSection />
            <EducationSection />
            <TalksSection />
            <HonorsSection />
            <AcademicServiceMentorshipSection />
            <ValuesSection />
          </main>
        </div>
      </div>
    </div>
  );
}
