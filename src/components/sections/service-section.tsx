"use client";

import { motion } from "framer-motion";

const reviewerRoles = [
  { venue: "ICML 2026", detail: "Conference Reviewer, 6 papers reviewed", award: "Gold Reviewer Award" },
  { venue: "ICLR 2026", detail: "Conference Reviewer, 5 papers reviewed" },
  { venue: "NeurIPS 2026", detail: "Conference Reviewer" },
  { venue: "TSALM @ ICLR 2026; AI4GOOD, FMSD, GFM @ ICML 2026", detail: "Workshop Reviewer" },
  { venue: "ACM TKDD", detail: "Journal Reviewer" },
  { venue: "IEEE TNNLS", detail: "Journal Reviewer" },
  { venue: "NeurIPS 2025", detail: "Conference Volunteer, San Diego" },
];

const taRoles = [
  { course: "COMPSCI 2211 — Software Tools and Systems Programming (C and Linux)", terms: "Fall 2024 · Fall 2025" },
  { course: "COMPSCI 3305 — Operating Systems", terms: "Winter 2025 · Winter 2026" },
];

const awards = [
  { year: "2023", title: "Silver Prize — Feng Ru Cup Science and Innovation Competition", level: "University" },
  { year: "2021", title: "Third Prize — 13th National Undergraduate Mathematics Competition", level: "National" },
  { year: "2021", title: "Third Prize — 32nd Beijing Undergraduate Mathematics Competition", level: "Province" },
  { year: "2021", title: "Outstanding Student Leader Award", level: "University" },
  { year: "2021", title: "Third Prize — Physics Academic Competition", level: "University" },
  { year: "2020", title: "H Prize — Mathematical Contest in Modeling (MCM)", level: "International" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ResearchFundingSection() {
  return (
    <section id="funding" className="py-12 border-t">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold mb-4">📄 Research Funding</h2>
        <div className="rounded-lg border p-4 bg-card text-sm">
          <p className="font-medium mb-1">Digital Research Alliance of Canada — RRG Competition Grant 2026</p>
          <p className="text-muted-foreground">
            Received <strong>25 RGU-years</strong> (≡ 5×A100-80GB GPU-years) on Canada&apos;s national supercomputing
            cluster via the Resources for Research Groups Competition. Estimated commercial value: ~US$80K.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export function HonorsSection() {
  return (
    <section id="honors" className="py-12 border-t">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold mb-4">🎖 Honors & Awards</h2>
        <ul className="space-y-2">
          {awards.map((a) => (
            <li key={a.title} className="flex gap-3 text-sm">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <span className="text-muted-foreground mr-1.5">{a.year}</span>
                {a.title}
                <span className="ml-1.5 text-xs text-muted-foreground">({a.level})</span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export function AcademicServiceMentorshipSection() {
  return (
    <section id="service" className="py-12 border-t space-y-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold mb-4">👁 Academic Service</h2>
        <ul className="space-y-2">
          {reviewerRoles.map((r) => (
            <li key={r.venue} className="flex gap-3 text-sm">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <span className="font-medium">{r.venue}</span>
                <span className="text-muted-foreground"> — {r.detail}</span>
                {"award" in r && r.award && (
                  <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded font-medium">
                    🏅 {r.award}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold mb-4">🧑‍🏫 Mentorship</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Teaching Assistant at Western University
        </p>
        <ul className="space-y-2">
          {taRoles.map((r) => (
            <li key={r.course} className="flex gap-3 text-sm">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <span className="font-medium">{r.course}</span>
                <span className="text-muted-foreground"> — {r.terms}</span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export function ServiceSection() {
  return (
    <>
      <ResearchFundingSection />
      <HonorsSection />
      <AcademicServiceMentorshipSection />
    </>
  );
}
