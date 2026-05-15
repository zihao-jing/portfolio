"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const education = [
  {
    school: "Western University",
    location: "ON, Canada",
    degree: "Master of Science in Computer Science (Research)",
    period: "Sep 2024 – Jun 2026 (Expected)",
    gpa: null,
    supervisorName: "Prof. Pingzhao Hu",
    supervisorUrl: "https://phulab.org/",
    description: "Conducting research on LLM post-training, multimodal alignment, and structure-grounded reasoning. Avg. GPA 93/100",
  },
  {
    school: "Beihang University",
    location: "Beijing, China",
    degree: "Bachelor of Engineering in Software Engineering",
    period: "Sep 2019 – Jun 2024",
    gpa: "Graduated with Honors",
    description: "Avg. GPA 3.6/4.0",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function EducationPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Education</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My education background.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            variants={item}
            className="relative pl-8 pb-8 last:pb-0"
          >
            {index !== education.length - 1 && (
              <div className="absolute left-[11px] top-8 h-full w-[2px] bg-gray-200 dark:bg-gray-800" />
            )}
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-primary bg-background" />

            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  {edu.school}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="font-medium">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                  </div>
                  {"supervisorName" in edu && edu.supervisorName && (
                    <p className="text-sm font-medium text-primary">
                      Supervised by{" "}
                      <Link
                        href={(edu as { supervisorUrl: string }).supervisorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary/80"
                      >
                        {edu.supervisorName}
                      </Link>
                    </p>
                  )}
                  {edu.gpa && <p className="text-sm font-medium text-primary">{edu.gpa}</p>}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
