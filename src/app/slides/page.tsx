"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";
import "reveal.js/reveal.css";

/* ─── Slide registry (drives bottom nav) ─── */
const SLIDES = [
  { title: "Title",              emoji: "🌟" },
  { title: "Education",          emoji: "🎓" },
  { title: "MuMo Gap",           emoji: "⚗️" },
  { title: "MuMo Method",        emoji: "🧩" },
  { title: "MuMo Impact",        emoji: "📈" },
  { title: "EDT Gap",            emoji: "🔗" },
  { title: "EDT Method",         emoji: "⚡" },
  { title: "EDT Impact",         emoji: "📊" },
  { title: "Cuttlefish Gap",     emoji: "🐙" },
  { title: "Cuttlefish Method",  emoji: "🧠" },
  { title: "Cuttlefish Impact",  emoji: "🏆" },
  { title: "SenseTime",          emoji: "🔤" },
  { title: "Skills",             emoji: "⚙️" },
  { title: "Connect",            emoji: "📬" },
];

const NAV_ITEMS = [
  { title: "Title",      emoji: "🌟", slide: 0,  active: [0] },
  { title: "Education",  emoji: "🎓", slide: 1,  active: [1] },
  { title: "MuMo",       emoji: "⚗️", slide: 2,  active: [2, 3, 4] },
  { title: "EDT-Former", emoji: "🔗", slide: 5,  active: [5, 6, 7] },
  { title: "Cuttlefish", emoji: "🐙", slide: 8,  active: [8, 9, 10] },
  { title: "SenseTime",  emoji: "🔤", slide: 11, active: [11] },
  { title: "Skills",     emoji: "⚙️", slide: 12, active: [12] },
  { title: "Connect",    emoji: "📬", slide: 13, active: [13] },
];

/* ─── Shared slide wrapper (for non-full-bleed slides) ─── */
const slideInner: React.CSSProperties = {
  maxWidth: 860,
  margin: "0 auto",
  textAlign: "left",
  padding: "0 1rem",
};

/* ─── Reusable components ─── */
function Card({ children, accent }: { children: React.ReactNode; accent?: string }) {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.03)",
        borderRadius: 10,
        padding: "1rem",
        border: `1px solid ${accent ? accent + "35" : "rgba(0,0,0,0.1)"}`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Slide 0 — Title (full-bleed split layout) ─── */
function Slide0() {
  const contents = [
    { icon: "🎓", label: "Education",           desc: "Computer Science · Western University & Beihang University" },
    { icon: "🔬", label: "Research & Projects",  desc: "NeurIPS 2025 · ICLR 2026 · ICML 2026 — structure-grounded LLMs" },
    { icon: "💼", label: "Work Experience",      desc: "SenseTime, Jina AI — Larger Language Models, text embedding, applied models" },
    { icon: "🚀", label: "Future Plan",          desc: "Multimodal reasoning, LLM post-training, multi-agents, world models" },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: 735,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "3rem clamp(3.25rem, 6vw, 5.25rem)",
        background:
          "linear-gradient(135deg, #f8fff6 0%, #eef9ef 48%, #f7fbf3 100%)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          display: "flex",
          minHeight: 630,
          borderRadius: 18,
          overflow: "hidden",
          background: "rgba(255,255,255,0.72)",
          border: "1px solid rgba(45,106,45,0.12)",
          boxShadow: "0 24px 70px rgba(45,106,45,0.12)",
        }}
      >
        {/* ── Left panel: title content ── */}
        <div
          style={{
            flex: "0 0 58%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem clamp(3.25rem, 5vw, 4.8rem) 4rem clamp(3.95rem, 5.8vw, 5.45rem)",
            borderRight: "1px solid rgba(45,106,45,0.12)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              alignSelf: "flex-start",
              padding: "0.32rem 0.7rem",
              borderRadius: 999,
              background: "rgba(45,106,45,0.08)",
              border: "1px solid rgba(45,106,45,0.14)",
              color: "rgba(26,61,26,0.68)",
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.55rem",
              transform: "translateX(1.275rem)",
            }}
          >
            Self-Introduction
          </div>

          {/* Avatar + name block */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.45rem",
              marginBottom: "1.65rem",
              transform: "translateX(2.55rem)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.jpg"
              alt="Zihao Jing"
              style={{
                width: 106,
                height: 106,
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
                border: "4px solid rgba(255,255,255,0.95)",
                outline: "1px solid rgba(45,106,45,0.18)",
                boxShadow: "0 14px 32px rgba(45,106,45,0.16)",
              }}
            />
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-dancing), cursive",
                  fontWeight: 700,
                  fontSize: "clamp(2.75rem, 4.1vw, 3.85rem)",
                  color: "#163a18",
                  lineHeight: 1.05,
                  margin: "0 0 0.35rem",
                }}
              >
                Zihao Jing
              </h1>
              <p
                style={{
                  fontSize: "clamp(0.86rem, 1.2vw, 1.02rem)",
                  color: "rgba(0,0,0,0.52)",
                  fontWeight: 600,
                  margin: "0 0 0.28rem",
                }}
              >
                AI Researcher · Graduate Student
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.38)", margin: 0 }}>
                🎓 Graduating June 2026 · Master of Computer Science
              </p>
            </div>
          </div>

          <div
            style={{
              width: 58,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, #2d6a2d, rgba(45,106,45,0.2))",
              marginBottom: "1.35rem",
              transform: "translateX(2.55rem)",
            }}
          />

          {/* <p
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(0,0,0,0.34)",
              margin: "0 0 0.72rem",
            }}
          >
            Research & Work Portfolio
          </p> */}
          <p
            style={{
              fontSize: "clamp(0.86rem, 1.22vw, 1rem)",
              color: "rgba(0,0,0,0.58)",
              lineHeight: 1.78,
              maxWidth: 500,
              margin: 0,
            }}
          >
            Building trustworthy LLMs for world understanding and human-centered
            intelligence — grounding AI in structure.
          </p>
        </div>

        {/* ── Right panel: contents preview ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem clamp(2.45rem, 4vw, 3.4rem)",
            background: "rgba(248,252,246,0.74)",
            gap: "0.78rem",
          }}
        >
          <p
            style={{
              fontSize: "0.67rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "rgba(0,0,0,0.34)",
              margin: "0 0 0.45rem",
            }}
          >
            Contents
          </p>
          {contents.map(({ icon, label, desc }, index) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "2.35rem 1fr",
                alignItems: "flex-start",
                gap: "0.88rem",
                textAlign: "left",
                background: "rgba(255,255,255,0.82)",
                borderRadius: 8,
                padding: "0.88rem 1rem",
                border: "1px solid rgba(45,106,45,0.1)",
                boxShadow: "0 8px 22px rgba(45,106,45,0.055)",
              }}
            >
              <span
                style={{
                  width: "2.35rem",
                  height: "2.35rem",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(12, 15, 12, 0.08)",
                  fontSize: "1.16rem",
                  lineHeight: 1,
                }}
              >
                {icon}
              </span>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.52rem",
                    marginBottom: "0.18rem",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(45,106,45,0.42)",
                      fontSize: "0.64rem",
                      fontWeight: 800,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    0{index + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "0.83rem",
                      fontWeight: 700,
                      color: "#173b19",
                    }}
                  >
                    {label}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(0,0,0,0.5)",
                    lineHeight: 1.48,
                    textAlign: "left",
                  }}
                >
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 1 — Education & Internship Background ─── */
function Slide1() {
  const education = [
    {
      school: "Western University",
      logo: "/logos/western-logo.svg",
      location: "ON, Canada",
      degree: "Master of Science in Computer Science (Research)",
      period: "Sep 2024 - Jun 2026 (Expected)",
      note: "Supervised by Prof. Pingzhao Hu",
      description: "LLM post-training, multimodal alignment, and structure-grounded reasoning. Avg. GPA 93/100.",
    },
    {
      school: "Beihang University",
      logo: "/logos/Beihang_University_logo.png",
      location: "Beijing, China",
      degree: "Bachelor of Engineering in Software Engineering",
      period: "Sep 2019 - Jun 2024",
      note: "Graduated with Honors",
      description: "Avg. GPA 3.6/4.0.",
    },
  ];

  const publications = [
    {
      venue: "ICML 2026",
      title: "Cuttlefish",
      summary: "Can LLMs reason over complex structures without wasting tokens?",
      tags: ["LLM Reasoning", "Multimodal Alignemnt", "Structure-Grounded LLM"],
      color: "#f97316",
    },
    {
      venue: "ICLR 2026",
      title: "EDT-Former",
      summary: "How can LLMs align with structures without fixed-size bottlenecks?",
      tags: ["Multimodal Alignment", "LLM Post-training", "Interdisciplinary LLM"],
      color: "#6366f1",
    },
    {
      venue: "NeurIPS 2025",
      title: "MuMo",
      summary: "Can foundation models learn reliable representations from noisy structures?",
      tags: ["Foundation Model", "Multimodal Alignment", "Robust Embedding", "Pretraining"],
      color: "#7c3aed",
    },
  ];

  const internships = [
    {
      company: "SenseTime",
      logo: "/logos/Sensetime.svg",
      logoBackground: "#e60012",
      role: "LLM Research Intern",
      period: "Sep 2023 - Jun 2024",
      location: "Beijing, China",
      summary: "Worked on LLM for embedding, generation, and applied marketing scenarios.",
      tags: ["LLM", "Embedding", "Fine-tuning"],
    },
    {
      company: "Jina AI",
      logo: "/logos/Jina_AI_logo.svg",
      logoBackground: "#fff",
      role: "AI Research Intern",
      period: "Apr 2023 - Sep 2023",
      location: "Beijing, China",
      summary: "Built practical AI spanning denoising, sentiment analysis, and visual enhancement.",
      tags: ["Applied AI", "Denoising", "Super-resolution"],
    },
  ];

  const tagStyle = (color = "#2d6a2d"): React.CSSProperties => ({
    padding: "0.14rem 0.42rem",
    borderRadius: 999,
    background: `${color}12`,
    border: `1px solid ${color}24`,
    color: "rgba(0,0,0,0.56)",
    fontSize: "0.56rem",
    fontWeight: 700,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: 735,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "3rem clamp(3.25rem, 6vw, 5.25rem)",
        background:
          "linear-gradient(135deg, #f8fff6 0%, #eef9ef 48%, #f7fbf3 100%)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          display: "grid",
          gridTemplateColumns: "1.06fr 0.94fr",
          minHeight: 630,
          borderRadius: 18,
          overflow: "hidden",
          background: "rgba(255,255,255,0.72)",
          border: "1px solid rgba(45,106,45,0.12)",
          boxShadow: "0 24px 70px rgba(45,106,45,0.12)",
          position: "relative",
        }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1180 630"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
        >
          <path d="M 552 298 C 640 234, 690 145, 766 145" fill="none" stroke="rgba(45,106,45,0.22)" strokeWidth="2" strokeDasharray="7 7" />
          <path d="M 552 456 C 636 474, 690 508, 766 508" fill="none" stroke="rgba(45,106,45,0.18)" strokeWidth="2" strokeDasharray="7 7" />
          <circle cx="552" cy="298" r="4" fill="rgba(45,106,45,0.32)" />
          <circle cx="552" cy="456" r="4" fill="rgba(45,106,45,0.28)" />
        </svg>

        <div
          style={{
            padding: "3.05rem clamp(2.7rem, 4.5vw, 4.35rem)",
            borderRight: "1px solid rgba(45,106,45,0.12)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              alignSelf: "flex-start",
              padding: "0.32rem 0.7rem",
              borderRadius: 999,
              background: "rgba(45,106,45,0.08)",
              border: "1px solid rgba(45,106,45,0.14)",
              color: "rgba(26,61,26,0.68)",
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Education Background
          </div>
          <h2
            style={{
              fontSize: "clamp(2.05rem, 2.85vw, 2.65rem)",
              color: "#163a18",
              lineHeight: 1.08,
              margin: "0 0 0.55rem",
              fontWeight: 800,
            }}
          >
            Academic path in computer science
          </h2>
          <p style={{ maxWidth: 520, fontSize: "0.86rem", color: "rgba(0,0,0,0.52)", lineHeight: 1.62, margin: "0 0 1.12rem" }}>
            Master research grows from structure-grounded AI; undergraduate training connects to hands-on industry internships.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.72rem" }}>
            {education.map((edu, index) => (
              <div
                key={edu.school}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3.35rem 1fr",
                  gap: "0.95rem",
                  alignItems: "flex-start",
                  padding: "0.9rem 1.02rem",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.86)",
                  border: "1px solid rgba(45,106,45,0.12)",
                  boxShadow: "0 9px 24px rgba(45,106,45,0.055)",
                  position: "relative",
                }}
              >
                {index === 0 && (
                  <div style={{ position: "absolute", left: "2.7rem", top: "4rem", bottom: "-0.84rem", width: 2, background: "rgba(45,106,45,0.13)" }} />
                )}
                <div
                  style={{
                    width: "3.35rem",
                    height: "3.35rem",
                    borderRadius: 12,
                    background: "#fff",
                    border: "1px solid rgba(45,106,45,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 18px rgba(45,106,45,0.08)",
                    overflow: "hidden",
                    zIndex: 1,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={edu.logo} alt={`${edu.school} logo`} style={{ maxWidth: "78%", maxHeight: "78%", objectFit: "contain" }} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.8rem", marginBottom: "0.26rem" }}>
                    <h3 style={{ margin: 0, color: "#173b19", fontSize: "1rem", fontWeight: 800, lineHeight: 1.2 }}>
                      {edu.school}
                    </h3>
                    <span style={{ color: "rgba(45,106,45,0.55)", fontSize: "0.66rem", fontWeight: 800, whiteSpace: "nowrap" }}>
                      0{index + 1}
                    </span>
                  </div>
                  <p style={{ margin: "0 0 0.3rem", color: "rgba(0,0,0,0.72)", fontSize: "0.79rem", fontWeight: 700 }}>
                    {edu.degree}
                  </p>
                  <p style={{ margin: "0 0 0.38rem", color: "rgba(0,0,0,0.42)", fontSize: "0.68rem", lineHeight: 1.4 }}>
                    {edu.period} · {edu.location}
                  </p>
                  <p style={{ margin: "0 0 0.24rem", color: "rgba(45,106,45,0.78)", fontSize: "0.72rem", fontWeight: 700 }}>
                    {edu.note}
                  </p>
                  <p style={{ margin: 0, color: "rgba(0,0,0,0.54)", fontSize: "0.71rem", lineHeight: 1.45 }}>
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: "2.25rem clamp(2.05rem, 3.35vw, 2.85rem)",
            background: "rgba(248,252,246,0.74)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p style={{ fontSize: "0.67rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(0,0,0,0.34)", margin: "0 0 0.58rem" }}>
            Master Research Outputs
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.48rem", marginBottom: "0.9rem" }}>
            {publications.map((paper) => (
              <div key={paper.title} style={{ padding: "0.66rem 0.82rem", borderRadius: 10, background: "rgba(255,255,255,0.86)", border: "1px solid rgba(45,106,45,0.1)", boxShadow: "0 8px 22px rgba(45,106,45,0.045)", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.7rem", alignItems: "baseline", marginBottom: "0.24rem" }}>
                  <h3 style={{ margin: 0, color: "#173b19", fontSize: "0.82rem", fontWeight: 800 }}>{paper.title}</h3>
                  <span style={{ color: paper.color, fontSize: "0.58rem", fontWeight: 800, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {paper.venue}
                  </span>
                </div>
                <p style={{ margin: "0 0 0.42rem", color: "rgba(0,0,0,0.52)", fontSize: "0.67rem", lineHeight: 1.38 }}>
                  {paper.summary}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.28rem" }}>
                  {paper.tags.map((tag) => (
                    <span key={tag} style={tagStyle(paper.color)}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.67rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(0,0,0,0.34)", margin: "0 0 0.58rem" }}>
            Undergraduate Internships
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.58rem" }}>
            {internships.map((exp) => (
              <div key={exp.company} style={{ padding: "0.72rem 0.82rem", borderRadius: 10, background: "rgba(255,255,255,0.84)", border: "1px solid rgba(45,106,45,0.1)", boxShadow: "0 8px 22px rgba(45,106,45,0.055)", textAlign: "left" }}>
                <div style={{ display: "flex", gap: "0.7rem", alignItems: "center", marginBottom: "0.46rem" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: 10, background: exp.logoBackground, border: "1px solid rgba(45,106,45,0.12)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={exp.logo} alt={`${exp.company} logo`} style={{ maxWidth: "78%", maxHeight: "78%", objectFit: "contain" }} />
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 0.14rem", color: "#173b19", fontSize: "0.82rem", fontWeight: 800 }}>{exp.company}</h3>
                    <p style={{ margin: 0, color: "rgba(0,0,0,0.5)", fontSize: "0.66rem", lineHeight: 1.35 }}>
                      {exp.role} · {exp.period}
                    </p>
                    <p style={{ margin: "0.08rem 0 0", color: "rgba(0,0,0,0.36)", fontSize: "0.62rem" }}>
                      {exp.location}
                    </p>
                  </div>
                </div>
                <p style={{ margin: "0 0 0.42rem", color: "rgba(0,0,0,0.54)", fontSize: "0.67rem", lineHeight: 1.38 }}>
                  {exp.summary}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.28rem" }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={tagStyle()}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MuMo project slides 3–5 ─── */
function MumoFrame({
  eyebrow,
  title,
  subtitle,
  labelOutside = false,
  contentHeight = 405,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  labelOutside?: boolean;
  contentHeight?: number;
  children: React.ReactNode;
}) {
  const eyebrowBadge = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.32rem 0.72rem",
        borderRadius: 999,
        background: "rgba(124,58,237,0.08)",
        border: "1px solid rgba(124,58,237,0.16)",
        color: "rgba(75,36,142,0.78)",
        fontSize: "0.64rem",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: labelOutside ? 0 : "0.78rem",
      }}
    >
      {eyebrow}
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: 735,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "3rem clamp(3.25rem, 6vw, 5.25rem)",
        background:
          "linear-gradient(135deg, #f8fff6 0%, #eef9ef 48%, #f7fbf3 100%)",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {labelOutside && (
        <div style={{ position: "absolute", top: "1.7rem", left: "clamp(3.25rem, 6vw, 5.25rem)", zIndex: 2 }}>
          {eyebrowBadge}
        </div>
      )}
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          height: 630,
          borderRadius: 18,
          overflow: "hidden",
          background: "rgba(255,255,255,0.74)",
          border: "1px solid rgba(45,106,45,0.12)",
          boxShadow: "0 24px 70px rgba(45,106,45,0.12)",
          position: "relative",
          padding: "2.55rem clamp(2.3rem, 4vw, 3.25rem)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: "0.95rem", width: "100%" }}>
          {!labelOutside && eyebrowBadge}
          <h2
            style={{
              margin: "0 0 0.48rem",
              color: "#163a18",
              fontSize: labelOutside ? "clamp(1.85rem, 2.15vw, 2.2rem)" : "clamp(1.75rem, 2.35vw, 2.35rem)",
              lineHeight: 1.08,
              fontWeight: 850,
              whiteSpace: labelOutside ? "nowrap" : "normal",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p style={{ margin: 0, color: "rgba(0,0,0,0.52)", fontSize: "0.88rem", lineHeight: 1.55 }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ height: contentHeight }}>{children}</div>
      </div>
    </div>
  );
}

function MumoChallengeSlide() {
  const gaps = [
    {
      label: "Representation Gap",
      text: "1D, 2D, and 3D inputs describe the same entity but carry different inductive biases that contain important information.",
    },
    {
      label: "Geometry Instability",
      text: "Small local structure difference can move 3D entity unpredictably in embedding space (coordinates input).",
    },
    {
      label: "Fusion Risk",
      text: "A robust encoder must use 3D signal without letting noisy geometry dominate stable views to avoid modality collapse.",
    },
  ];

  return (
    <MumoFrame
      eyebrow="MuMo · Research Problem and Challenge"
      title="Can Foundation Models Learn Reliable Representations from Noisy Structures?"
      subtitle="Multimodal structural alignment is useful only when geometry is stable, more views help only if the model controls conformer noise. Applied in molecules."
      contentHeight={420}
    >
      <div style={{ display: "grid", gridTemplateRows: "300px 1fr", gap: "0.8rem", alignItems: "stretch" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: "0.8rem", minHeight: 0 }}>
          <figure
            style={{
              margin: 0,
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(45,106,45,0.12)",
              boxShadow: "0 16px 36px rgba(45,106,45,0.08)",
              padding: "0.68rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/MuMo_Research_Problem.png"
              alt="MuMo research problem figure showing 1D, 2D, and 3D molecular inputs encoded into a shared embedding space"
              style={{ width: "100%", height: "calc(100% - 2.35rem)", objectFit: "contain", borderRadius: 10, marginTop: "2.35rem" }}
            />
            <figcaption
              style={{
                position: "absolute",
                left: "0.9rem",
                top: "0.78rem",
                padding: "0.3rem 0.6rem",
                borderRadius: 999,
                background: "rgba(22,58,24,0.1)",
                border: "1px solid rgba(22,58,24,0.16)",
                color: "#163a18",
                fontSize: "0.6rem",
                fontWeight: 850,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Research problem: multimodal alignment
            </figcaption>
          </figure>

          <figure
            style={{
              margin: 0,
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(45,106,45,0.12)",
              boxShadow: "0 16px 36px rgba(45,106,45,0.08)",
              padding: "0.62rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/mumo_challenge.png"
              alt="MuMo challenge figure showing local 3D conformer variation and PCA embedding instability"
              style={{ width: "100%", height: "calc(100% - 2.35rem)", objectFit: "contain", borderRadius: 10, marginTop: "2.35rem" }}
            />
            <figcaption
              style={{
                position: "absolute",
                left: "0.84rem",
                top: "0.78rem",
                padding: "0.3rem 0.6rem",
                borderRadius: 999,
                background: "rgba(124,45,18,0.1)",
                border: "1px solid rgba(124,45,18,0.16)",
                color: "#7c2d12",
                fontSize: "0.6rem",
                fontWeight: 850,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Challenge: conformer instability
            </figcaption>
          </figure>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.62rem" }}>
          {gaps.map((gap, index) => (
            <div
              key={gap.label}
              style={{
                padding: "0.72rem 0.78rem",
                borderRadius: 12,
                background: "rgba(255,255,255,0.86)",
                border: "1px solid rgba(45,106,45,0.1)",
                boxShadow: "0 8px 22px rgba(45,106,45,0.055)",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.48rem", marginBottom: "0.34rem" }}>
                <span
                  style={{
                    width: "1.55rem",
                    height: "1.55rem",
                    borderRadius: 999,
                    background: "rgba(124,58,237,0.08)",
                    color: "#7c3aed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 850,
                    fontSize: "0.62rem",
                  }}
                >
                  0{index + 1}
                </span>
                <h3 style={{ margin: 0, color: "#173b19", fontSize: "0.78rem", lineHeight: 1.16, fontWeight: 850 }}>
                  {gap.label}
                </h3>
              </div>
              <p style={{ margin: 0, color: "rgba(0,0,0,0.62)", fontSize: "0.68rem", lineHeight: 1.38, fontWeight: 620 }}>
                {gap.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MumoFrame>
  );
}

function MumoNoveltySlide() {
  const story = [
    { label: "Stabilize", text: "Model structural modalities seperately before using it for alignment." },
    { label: "Delay Fusion", text: "Let main modality (sequence sematic context) form before geometry starts steering fusion." },
    { label: "Continuously Fusion", text: "Combine modalities gradually so no single noisy view dominates the encoder." },
  ];

  return (
    <MumoFrame
      eyebrow="MuMo · Methodology"
      title="Stabilize first, then gradually fuse"
      subtitle="The core idea is not simply adding more modality. MuMo changes the order of operations so geometry becomes a useful prior instead of a noisy shortcut."
      contentHeight={420}
    >
      <div style={{ display: "grid", gridTemplateColumns: "0.82fr 1.48fr", gap: "1rem", alignItems: "stretch", height: "100%" }}>
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", gap: "0.72rem", minHeight: 0 }}>
          <div style={{ display: "grid", gap: "0.46rem" }}>
            {story.map((item, index) => (
              <div
                key={item.label}
                style={{
                  padding: "0.62rem 0.72rem",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(45,106,45,0.12)",
                  boxShadow: "0 8px 20px rgba(45,106,45,0.05)",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.48rem", marginBottom: "0.18rem" }}>
                  <span
                    style={{
                      width: "1.45rem",
                      height: "1.45rem",
                      borderRadius: 999,
                      background: "rgba(124,58,237,0.08)",
                      color: "#7c3aed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.6rem",
                      fontWeight: 850,
                    }}
                  >
                    0{index + 1}
                  </span>
                  <h3 style={{ margin: 0, color: "#173b19", fontSize: "0.84rem", fontWeight: 850 }}>{item.label}</h3>
                </div>
                <p style={{ margin: 0, color: "rgba(0,0,0,0.6)", fontSize: "0.67rem", lineHeight: 1.34, fontWeight: 600 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(45,106,45,0.12)",
              boxShadow: "0 16px 36px rgba(45,106,45,0.08)",
              padding: "0.72rem",
              display: "grid",
              gridTemplateRows: "1fr auto",
              gap: "0.48rem",
              minHeight: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/mumo_loss.png"
              alt="MuMo training loss figure comparing modality configurations"
              style={{ width: "100%", height: "100%", minHeight: 0, objectFit: "contain", borderRadius: 10 }}
            />
            <p style={{ margin: 0, color: "rgba(0,0,0,0.58)", fontSize: "0.67rem", lineHeight: 1.36, textAlign: "left", fontWeight: 600 }}>
              Lower and earlier-converging training loss indicates that staged multimodal fusion makes the representation easier to optimize.
            </p>
          </div>
        </div>

        <div
          style={{
            borderRadius: 14,
            background: "#fff",
            border: "1px solid rgba(45,106,45,0.12)",
            boxShadow: "0 16px 36px rgba(45,106,45,0.08)",
            padding: "0.78rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/mumo_structure.png"
            alt="MuMo architecture overview"
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 10 }}
          />
        </div>
      </div>
    </MumoFrame>
  );
}

function MumoImpactSlide() {
  const stats = [
    { value: "17/22", label: "tasks from two benchmarks ranked #1" },
    { value: "+2.7%", label: "average gain over strongest baseline" },
    { value: "27%", label: "improvement on task LD50 vs DeepMol (second-best)" },
  ];

  return (
    <MumoFrame
      eyebrow="MuMo · Results & Impact"
      title="Encoder effectiveness that evaluated by downstream tasks."
      subtitle="The representation from the encoder is evaluated by applying on classification and regression tasks."
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "1.2rem", alignItems: "stretch" }}>
        <figure
          style={{
            margin: 0,
            borderRadius: 14,
            background: "#fff",
            border: "1px solid rgba(45,106,45,0.12)",
            boxShadow: "0 16px 36px rgba(45,106,45,0.08)",
            padding: "0.72rem 0.9rem 0.9rem",
            display: "flex",
            flexDirection: "column",
            height: 405,
          }}
        >
          <div style={{ flexShrink: 0, marginBottom: "0.38rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.3rem 0.6rem",
                borderRadius: 999,
                background: "rgba(22,58,24,0.1)",
                border: "1px solid rgba(22,58,24,0.16)",
                color: "#163a18",
                fontSize: "0.6rem",
                fontWeight: 850,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.2rem",
              }}
            >
              Main experiment
            </div>
            <p style={{ margin: 0, color: "rgba(0,0,0,0.46)", fontSize: "0.6rem", lineHeight: 1.4, fontStyle: "italic" }}>
              Classification &amp; Regression tasks for Property Prediction
            </p>
          </div>
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/mumo_result.png"
              alt="MuMo benchmark result summary"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 10 }}
            />
          </div>
        </figure>

        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", gap: "0.68rem", height: 405 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.58rem" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "0.82rem 0.95rem",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.88)",
                  border: "1px solid rgba(45,106,45,0.12)",
                  boxShadow: "0 8px 22px rgba(45,106,45,0.055)",
                  display: "grid",
                  gridTemplateColumns: "5.2rem 1fr",
                  gap: "0.72rem",
                  alignItems: "center",
                }}
              >
                <strong style={{ color: "#7c3aed", fontSize: "1.45rem", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                  {stat.value}
                </strong>
                <span style={{ color: "rgba(0,0,0,0.58)", fontSize: "0.78rem", lineHeight: 1.38, fontWeight: 650 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.52rem",
              borderRadius: 12,
              background: "#fff",
              border: "1px solid rgba(45,106,45,0.12)",
              boxShadow: "0 8px 22px rgba(45,106,45,0.055)",
              padding: "0.72rem",
              minHeight: 0,
            }}
          >
            {/* Ablation table 1 */}
            <figure style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }}>
              <div style={{ flexShrink: 0, marginBottom: "0.08rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.28rem 0.5rem",
                    borderRadius: 999,
                    background: "rgba(124,45,18,0.1)",
                    border: "1px solid rgba(124,45,18,0.16)",
                    color: "#7c2d12",
                    fontSize: "0.58rem",
                    fontWeight: 850,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Ablation
                </div>
                <p style={{ margin: 0, color: "rgba(0,0,0,0.45)", fontSize: "0.57rem", lineHeight: 1.38, fontStyle: "italic" }}>
                  (1) Impact of injection and its timing — &ldquo;@a–b&rdquo; denotes injection between layers a and b
                </p>
              </div>
              <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/mumo_ablation_1.png"
                  alt="MuMo ablation: impact of injection timing"
                  style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6 }}
                />
              </div>
              <p style={{ flexShrink: 0, margin: "0.3rem 0 0", color: "#7c3aed", fontSize: "0.62rem", lineHeight: 1.38, fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Fusion starting at the halfway point yields the strongest alignment.
              </p>
            </figure>

            {/* Ablation table 2 */}
            <figure style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }}>
              <div style={{ flexShrink: 0, marginBottom: "0.08rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.28rem 0.5rem",
                    borderRadius: 999,
                    background: "rgba(124,45,18,0.1)",
                    border: "1px solid rgba(124,45,18,0.16)",
                    color: "#7c2d12",
                    fontSize: "0.58rem",
                    fontWeight: 850,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Ablation
                </div>
                <p style={{ margin: 0, color: "rgba(0,0,0,0.45)", fontSize: "0.57rem", lineHeight: 1.38, fontStyle: "italic" }}>
                  (2) Impact of injection approaches — <strong style={{ fontStyle: "normal", color: "#7c3aed", fontWeight: 750 }}>Progressive</strong>: inject geometry after semantic context forms (our method); <strong style={{ fontStyle: "normal", color: "rgba(0,0,0,0.55)", fontWeight: 700 }}>Fixed</strong>: inject at a predetermined layer regardless of context
                </p>
              </div>
              <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/mumo_ablation_2.png"
                  alt="MuMo ablation: impact of injection approaches"
                  style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6 }}
                />
              </div>
              <p style={{ flexShrink: 0, margin: "0.3rem 0 0", color: "#7c3aed", fontSize: "0.62rem", lineHeight: 1.38, fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Progressive injection outperforms fixed-prior baselines — validating the staged fusion design.
              </p>
            </figure>
          </div>
        </div>
      </div>
    </MumoFrame>
  );
}

/* ─── EDT-Former project slides 5–7 ─── */
function EdtFrame({
  eyebrow,
  title,
  subtitle,
  labelOutside = false,
  contentHeight = 405,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  labelOutside?: boolean;
  contentHeight?: number;
  children: React.ReactNode;
}) {
  const eyebrowBadge = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.32rem 0.72rem",
        borderRadius: 999,
        background: "rgba(99,102,241,0.08)",
        border: "1px solid rgba(99,102,241,0.18)",
        color: "rgba(67,56,202,0.82)",
        fontSize: "0.64rem",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: labelOutside ? 0 : "0.78rem",
      }}
    >
      {eyebrow}
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: 735,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "3rem clamp(3.25rem, 6vw, 5.25rem)",
        background: "linear-gradient(135deg, #f8fff6 0%, #eef9ef 48%, #f7fbf3 100%)",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {labelOutside && (
        <div style={{ position: "absolute", top: "1.7rem", left: "clamp(3.25rem, 6vw, 5.25rem)", zIndex: 2 }}>
          {eyebrowBadge}
        </div>
      )}
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          height: 630,
          borderRadius: 18,
          overflow: "hidden",
          background: "rgba(255,255,255,0.74)",
          border: "1px solid rgba(45,106,45,0.12)",
          boxShadow: "0 24px 70px rgba(45,106,45,0.12)",
          position: "relative",
          padding: "2.55rem clamp(2.3rem, 4vw, 3.25rem)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: "0.95rem", width: "100%" }}>
          {!labelOutside && eyebrowBadge}
          <h2
            style={{
              margin: "0 0 0.48rem",
              color: "#163a18",
              fontSize: labelOutside ? "clamp(1.85rem, 2.15vw, 2.2rem)" : "clamp(1.75rem, 2.35vw, 2.35rem)",
              lineHeight: 1.08,
              fontWeight: 850,
              whiteSpace: labelOutside ? "nowrap" : "normal",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p style={{ margin: 0, color: "rgba(0,0,0,0.52)", fontSize: "0.88rem", lineHeight: 1.55 }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ height: contentHeight }}>{children}</div>
      </div>
    </div>
  );
}

function EdtChallengeSlide() {
  const gaps = [
    {
      num: "01",
      head: "Small inputs waste tokens.",
      body: "Fixed budgets over-allocate for simple structures — reserved capacity is never used.",
    },
    {
      num: "02",
      head: "Large inputs lose details.",
      body: "The same budget under-allocates for complex ones — critical substructures are compressed away.",
    },
    {
      num: "03",
      head: "Fine-tuning the LLM is too expensive.",
      body: "Retraining billions of backbone parameters at 3× more compute per token to compensate.",
    },
  ];

  return (
    <EdtFrame
      eyebrow="EDT-Former · Research Problem & Challenge"
      title="Fixed-length connector (Q-Former) is good for images but not every other modality." 
      contentHeight={440}
    >
      {/* left: challenge figure full height | right column: research problem top, gap list bottom */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "0.88rem", height: "100%" }}>

        {/* ── Left: single box, two figures — Related Work & Challenges (top), Challenge fig (bottom) ── */}
        <div
          style={{
            borderRadius: 12,
            background: "#fff",
            border: "1px solid rgba(99,102,241,0.12)",
            display: "grid",
            gridTemplateRows: "190px 1fr",
            padding: "0.8rem",
            gap: "0.6rem",
            overflow: "hidden",
          }}
        >
          {/* Upper: Related Work & Challenges label */}
          <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <p style={{ margin: 0, marginBottom: "0.18rem", color: "#6366f1", fontSize: "0.6rem", fontWeight: 750, flexShrink: 0, textAlign: "left" }}>
              Related Work &amp; Challenges —
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/edt-former_problem_2.png"
              alt="Related work: prior connectors use fixed token budgets regardless of entity complexity"
              style={{ flex: 1, minHeight: 0, width: "100%", objectFit: "contain", borderRadius: 6 }}
            />
          </div>

          {/* Lower: Challenge figure, no badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/dq-former_challenge.png"
              alt="Challenge: fixed vs dynamic token allocation — simple inputs over-allocated, complex ones under-allocated"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6 }}
            />
          </div>
        </div>

        {/* ── Right column ── */}
        <div style={{ display: "grid", gridTemplateRows: "230px 1fr", gap: "0.88rem" }}>

          {/* Top right: research problem figure with caption inside */}
          <div
            style={{
              borderRadius: 12,
              background: "#fff",
              border: "1px solid rgba(99,102,241,0.14)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.6rem 0.88rem 0.4rem", minHeight: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/edt_former_researchproblem.png"
                alt="EDT-Former research problem: connecting a structure encoder to a frozen LLM via an adaptive connector"
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6 }}
              />
            </div>
            <div style={{ borderTop: "1px solid rgba(99,102,241,0.12)", padding: "0.42rem 0.88rem", background: "rgba(99,102,241,0.04)" }}>
              <p style={{ margin: 0, color: "rgba(0,0,0,0.48)", fontSize: "0.67rem", lineHeight: 1.44 }}>
                <span style={{ color: "#6366f1", fontWeight: 750 }}>Research Problem — </span>
                Design a connector between LLMs and modality encoders, to let LLM understand structural complexity.
              </p>
            </div>
          </div>

          {/* Bottom right: challenge gap list */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left", paddingTop: "0.3rem", paddingLeft: "0.4rem" }}>
            {gaps.map((gap, i) => (
              <div
                key={gap.num}
                style={{
                  paddingTop: i > 0 ? "0.68rem" : 0,
                  paddingBottom: i < gaps.length - 1 ? "0.68rem" : 0,
                  borderTop: i > 0 ? "1px solid rgba(99,102,241,0.11)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.12rem" }}>
                  <span style={{ color: "#6366f1", fontSize: "0.57rem", fontWeight: 850, letterSpacing: "0.05em" }}>{gap.num}</span>
                  <span style={{ color: "#173b19", fontSize: "0.82rem", fontWeight: 800 }}>{gap.head}</span>
                </div>
                <p style={{ margin: 0, color: "rgba(0,0,0,0.48)", fontSize: "0.67rem", lineHeight: 1.44, paddingLeft: "1.3rem" }}>
                  {gap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EdtFrame>
  );
}

function EdtNoveltySlide() {
  const steps = [
    { num: "01", label: "Detect and Split",  text: "Detect the harder prediction point (for transformer or sequence foundation models) and make boundaries. Segment structure into patches." },
    { num: "02", label: "Allocate", text: "Each segment pools into one token. Complex structures produce more tokens; simple ones produce fewer — automatically." },
    { num: "03", label: "Align",    text: "Train only the connector, solving the issue caused by fixed-length connector. The encoder and LLM stay fully frozen — no backbone update ever required. " },
  ];

  const tags = ["Dynamic Tokens", "Frozen LLM", "Efficient Alignment", "Graph-LLM Bridge", "Adaptive Connector"];

  return (
    <EdtFrame
      eyebrow="EDT-Former · Core Method"
      title="Let the input decide how many tokens it needs"
      subtitle="EDT-Former reads structural complexity before allocating tokens — the alignment gain makes tuning only the connector with frozen LLM a reality"
    >
      {/* figure-first: hero arch on top, horizontal step strip + tag list below */}
      <div style={{ display: "grid", gridTemplateRows: "1fr auto", gap: "0.82rem", height: 405 }}>

        {/* Top: architecture figure, full width */}
        <div
          style={{
            borderRadius: 14,
            background: "#fff",
            border: "1px solid rgba(99,102,241,0.13)",
            boxShadow: "0 10px 28px rgba(45,106,45,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.88rem 1.1rem",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/dq-former_structure.png"
            alt="EDT-Former: entropy-guided patching feeds a dynamic query transformer; LLM backbone stays frozen"
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }}
          />
        </div>

        {/* Bottom: 3 step cards (top-border accent) + tags column */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "0.68rem", alignItems: "stretch" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                padding: "0.72rem 0.84rem",
                borderRadius: 10,
                background: "rgba(255,255,255,0.92)",
                borderTop: "2.5px solid #6366f1",
                border: "1px solid rgba(99,102,241,0.14)",
                borderTopWidth: "2.5px",
                boxShadow: "0 5px 14px rgba(45,106,45,0.05)",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.46rem", marginBottom: "0.2rem" }}>
                <span style={{ color: "#6366f1", fontSize: "0.58rem", fontWeight: 850, letterSpacing: "0.04em" }}>{step.num}</span>
                <span style={{ color: "#173b19", fontSize: "0.82rem", fontWeight: 800 }}>{step.label}</span>
              </div>
              <p style={{ margin: 0, color: "rgba(0,0,0,0.52)", fontSize: "0.65rem", lineHeight: 1.42 }}>
                {step.text}
              </p>
            </div>
          ))}

          {/* Tags: vertical strip */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.28rem", justifyContent: "center" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "0.18rem 0.52rem",
                  borderRadius: 999,
                  background: "rgba(99,102,241,0.07)",
                  border: "1px solid rgba(99,102,241,0.18)",
                  color: "rgba(67,56,202,0.8)",
                  fontSize: "0.59rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </EdtFrame>
  );
}

function EdtImpactSlide() {
  const stats = [
    { value: "9 / 10", label: "zero-shot property QA tasks ranked #1", color: "#6366f1" },
    { value: "3.5×",   label: "faster per step than fully finetuning LLM",          color: "#059669" },
    { value: "37 GB",  label: "GPU memory vs 77 GB (Full tuning)",         color: "#d97706" },
    { value: "#1",     label: "on all 4 MoleculeQA sub-tasks",      color: "#dc2626" },
  ];

  const impact = [
    "Dynamic and Scalable structure-to-language alignment. No fixed length Q-Former any more.",
    "Strong reasoning without retraining the LLM. Highly efficient and transferable.",
    "Reusable connector design logic for any structured foundation model.",
  ];

  return (
    <EdtFrame
      eyebrow="EDT-Former · Results & Impact"
      title="Adaptive alignment achieves top at a fraction of the cost"
      subtitle="Connector-only training outperforms full backbone fine-tuning — demonstrating that structure-to-language alignment doesn't require touching the LLM."
    >
      {/* scorecard on top, ablation figure + impact below */}
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr", gap: "1.1rem", height: 430 }}>

        {/* Top: 4 metrics in a horizontal scorecard */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.72rem" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "0.76rem 0.92rem",
                borderRadius: 10,
                background: "rgba(255,255,255,0.92)",
                border: `1px solid ${stat.color}22`,
                borderTopWidth: "2.5px",
                borderTopColor: stat.color,
                borderTopStyle: "solid",
                boxShadow: "0 5px 14px rgba(45,106,45,0.05)",
                textAlign: "left",
              }}
            >
              <strong style={{ display: "block", color: stat.color, fontSize: "1.48rem", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: "0.22rem" }}>
                {stat.value}
              </strong>
              <span style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.64rem", lineHeight: 1.35, fontWeight: 650 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom: ablation figure (left, dominant) + impact phrases (right) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 15rem", gap: "1.1rem", alignItems: "stretch" }}>
          <div
            style={{
              borderRadius: 12,
              background: "#fff",
              border: "1px solid rgba(99,102,241,0.13)",
              boxShadow: "0 10px 26px rgba(45,106,45,0.07)",
              padding: "0.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/dq-former_ablation.png"
              alt="EDT-Former ablation: removing entropy detection or cross-attention causes large accuracy drops"
              style={{ width: "100%", height: "calc(100% - 2.35rem)", objectFit: "contain", borderRadius: 8, marginTop: "2.35rem" }}
            />
            <div
              style={{
                position: "absolute",
                left: "0.9rem",
                top: "0.78rem",
                padding: "0.3rem 0.6rem",
                borderRadius: 999,
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.18)",
                color: "#4338ca",
                fontSize: "0.6rem",
                fontWeight: 850,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Main Ablation Studies
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.9rem" }}>
            {impact.map((line) => (
              <div
                key={line}
                style={{
                  padding: "0.78rem 0.9rem",
                  borderRadius: 10,
                  background: "rgba(99,102,241,0.04)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  color: "rgba(55,48,163,0.78)",
                  fontSize: "0.72rem",
                  lineHeight: 1.45,
                  fontWeight: 650,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </EdtFrame>
  );
}

/* ─── Cuttlefish project slides 8–10 ─── */
function CuttlefishFrame({
  eyebrow,
  title,
  subtitle,
  labelOutside = false,
  contentHeight = 405,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  labelOutside?: boolean;
  contentHeight?: number;
  children: React.ReactNode;
}) {
  const eyebrowBadge = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.32rem 0.72rem",
        borderRadius: 999,
        background: "rgba(249,115,22,0.08)",
        border: "1px solid rgba(249,115,22,0.20)",
        color: "rgba(194,65,12,0.85)",
        fontSize: "0.64rem",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: labelOutside ? 0 : "0.78rem",
      }}
    >
      {eyebrow}
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: 735,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "3rem clamp(3.25rem, 6vw, 5.25rem)",
        background: "linear-gradient(135deg, #f8fff6 0%, #eef9ef 48%, #f7fbf3 100%)",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {labelOutside && (
        <div style={{ position: "absolute", top: "1.7rem", left: "clamp(3.25rem, 6vw, 5.25rem)", zIndex: 2 }}>
          {eyebrowBadge}
        </div>
      )}
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          height: 630,
          borderRadius: 18,
          overflow: "hidden",
          background: "rgba(255,255,255,0.74)",
          border: "1px solid rgba(45,106,45,0.12)",
          boxShadow: "0 24px 70px rgba(45,106,45,0.12)",
          position: "relative",
          padding: "2.55rem clamp(2.3rem, 4vw, 3.25rem)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: "0.95rem", width: "100%" }}>
          {!labelOutside && eyebrowBadge}
          <h2
            style={{
              margin: "0 0 0.48rem",
              color: "#163a18",
              fontSize: labelOutside ? "clamp(1.85rem, 2.15vw, 2.2rem)" : "clamp(1.75rem, 2.35vw, 2.35rem)",
              lineHeight: 1.08,
              fontWeight: 850,
              whiteSpace: labelOutside ? "nowrap" : "normal",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p style={{ margin: 0, color: "rgba(0,0,0,0.52)", fontSize: "0.88rem", lineHeight: 1.55 }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ height: contentHeight }}>{children}</div>
      </div>
    </div>
  );
}

function CuttlefishChallengeSlide() {
  const gaps = [
    {
      num: "01",
      head: "Sequence only is not enough for structures.",
      body: "Without explicit geometry injection, LLMs produce structural descriptions that aren't grounded in real coordinates (similar to EDT-Former).",
    },
    {
      num: "02",
      head: "Fixed-budget connector hides detail.",
      body: "LLMs compress every 3D entity equally — losing critical geometry for complex structures, wasting capacity on simple ones (similar to EDT-Former).",
    },
    {
      num: "03",
      head: "Locating instruction-related geometry regions matters.",
      body: "The same entity needs different structural evidence for different questions, especially for huge entities — a fixed representation can't serve both.",
    },
  ];

  return (
    <CuttlefishFrame
      eyebrow="Cuttlefish · Research Problem & Challenge"
      title="LLMs need to see the right geometry for the right question"
      contentHeight={440}
    >
      {/* 2-col: left (full-height figure + annotations), right (banner + gaps) */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "0.82rem", height: "100%" }}>

        {/* Left: figure box containing annotations + image */}
        <div
          style={{
            borderRadius: 12,
            background: "#fff",
            border: "1px solid rgba(249,115,22,0.14)",
            display: "flex",
            flexDirection: "column",
            padding: "0.72rem 0.8rem",
            gap: "0.32rem",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          {/* Annotation above */}
          <p style={{ margin: 0, flexShrink: 0, color: "rgba(0,0,0,0.46)", fontSize: "0.6rem", lineHeight: 1.45, fontStyle: "italic", textAlign: "left" }}>
            Table: Functional group hallucination test. Metrics — <strong style={{ fontStyle: "normal", color: "#c2410c", fontWeight: 700 }}>HR</strong>: hallucination rate; <strong style={{ fontStyle: "normal", color: "#c2410c", fontWeight: 700 }}>HPM</strong>: hallucinations per entity; <strong style={{ fontStyle: "normal", color: "#c2410c", fontWeight: 700 }}>AR</strong>: answer rate. <span style={{ fontStyle: "normal", color: "rgba(0,0,0,0.55)" }}>(S)</span> → sequence-only variant. <strong style={{ fontStyle: "normal", color: "#c2410c", fontWeight: 700 }}>Enhance LLM with structure inputs reduces the hallucination rates.</strong>
          </p>

          {/* Image */}
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/cuttlefish_challenge.png"
              alt="Cuttlefish challenge: fixed token budgets lose detail for complex 3D structures"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }}
            />
          </div>

          {/* Annotation below */}
          <p style={{ margin: 0, flexShrink: 0, color: "rgba(0,0,0,0.46)", fontSize: "0.6rem", lineHeight: 1.45, fontStyle: "italic", textAlign: "left" }}>
            Figure: Captioning task — <strong style={{ fontStyle: "normal", color: "#c2410c", fontWeight: 700 }}>as the entity size grows, the model&apos;s performance declines</strong>. The model Mol-LLama uses a fixed length Q-Former to encode 2D/3D geometry.
          </p>
        </div>

        {/* Right: banner on top, gap items below */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.82rem" }}>

          {/* Research problem: figure + caption strip (slide-6 format) */}
          <div
            style={{
              borderRadius: 12,
              background: "#fff",
              border: "1px solid rgba(249,115,22,0.18)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              flexShrink: 0,
              height: 195,
            }}
          >
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.6rem 0.88rem 0.4rem", minHeight: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/edt_former_researchproblem.png"
                alt="Research problem: connecting a structure encoder to a frozen LLM via an adaptive connector"
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6 }}
              />
            </div>
            <div style={{ borderTop: "1px solid rgba(249,115,22,0.14)", padding: "0.42rem 0.88rem", background: "rgba(249,115,22,0.04)" }}>
              <p style={{ margin: 0, color: "rgba(0,0,0,0.48)", fontSize: "0.67rem", lineHeight: 1.44 }}>
                <span style={{ color: "#c2410c", fontWeight: 750 }}>Research Problem — </span>
                Design adaptive connector between LLMs and encoders, letting LLM reason on small to huge structural complexity.
              </p>
            </div>
          </div>

          {/* 3 challenge items */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left", flex: 1, paddingLeft: "0.5rem" }}>
            <p style={{ margin: "0 0 0.6rem", color: "#c2410c", fontSize: "0.92rem", fontWeight: 800, lineHeight: 1.2 }}>
              Challenge &amp; Research Gap
            </p>
            {gaps.map((gap, i) => (
              <div
                key={gap.num}
                style={{
                  paddingTop: i > 0 ? "0.72rem" : 0,
                  paddingBottom: i < gaps.length - 1 ? "0.72rem" : 0,
                  borderTop: i > 0 ? "1px solid rgba(249,115,22,0.13)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.14rem" }}>
                  <span style={{ color: "#f97316", fontSize: "0.57rem", fontWeight: 850, letterSpacing: "0.05em" }}>{gap.num}</span>
                  <span style={{ color: "#173b19", fontSize: "0.82rem", fontWeight: 800 }}>{gap.head}</span>
                </div>
                <p style={{ margin: 0, color: "rgba(0,0,0,0.5)", fontSize: "0.67rem", lineHeight: 1.44, paddingLeft: "1.3rem" }}>
                  {gap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CuttlefishFrame>
  );
}

function CuttlefishNoveltySlide() {
  const steps = [
    { num: "01", label: "Scoring",  text: "Each 3D position is scored by relevance to the current instruction. High-scoring positions become anchor points for structural attention." },
    { num: "02", label: "Patching",  text: "Anchors expand to cover their local neighborhood — complex, instruction-critical regions get more patches automatically, simple regions fewer." },
    { num: "03", label: "Grounding", text: "Patch tokens retrieve high-resolution geometric cues and inject them directly into the LLM input — 3D geometry as first-class signal." },
  ];

  const tags = ["Instruction-Aware", "Adaptive Compute", "Geometry Grounding", "Multimodal LLM", "Structure Reasoning"];

  return (
    <CuttlefishFrame
      eyebrow="Cuttlefish · Methodology & Novelty"
      title="Instruction-guided attention to structure"
      subtitle="Cuttlefish adapts its structural representation to what the question is asking — spending more tokens where they matter and injecting precise geometry into LLM."
    >
      {/* left: arch figure + steps; right: scaling result figure */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.95rem", height: 435 }}>

        {/* Left: arch figure (top) then steps filling remaining height */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>

          {/* Architecture figure */}
          <div
            style={{
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(249,115,22,0.14)",
              boxShadow: "0 10px 28px rgba(45,106,45,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.7rem",
              overflow: "hidden",
              flexShrink: 0,
              height: 195,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/cuttlefish_structure.png"
              alt="Cuttlefish architecture: EGNN encoder, instruction-aware patching, geometry grounding adapter"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }}
            />
          </div>

          {/* Steps — stretch to fill remaining column height */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.42rem", flex: 1 }}>
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  padding: "0.55rem 0.78rem",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(249,115,22,0.15)",
                  borderLeftWidth: "2.5px",
                  borderLeftColor: "#f97316",
                  borderLeftStyle: "solid",
                  boxShadow: "0 5px 14px rgba(45,106,45,0.05)",
                  textAlign: "left",
                  overflow: "hidden",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: 0, color: "rgba(0,0,0,0.52)", fontSize: "0.65rem", lineHeight: 1.42 }}>
                  <span style={{ color: "#f97316", fontWeight: 850 }}>{step.num} </span>
                  <span style={{ color: "#173b19", fontWeight: 800 }}>{step.label}: </span>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: scaling result figure with badge + description */}
        <div
          style={{
            borderRadius: 14,
            background: "#fff",
            border: "1px solid rgba(249,115,22,0.14)",
            boxShadow: "0 10px 28px rgba(45,106,45,0.07)",
            display: "flex",
            flexDirection: "column",
            padding: "0.82rem 0.9rem",
            gap: "0.5rem",
            overflow: "hidden",
          }}
        >
          {/* Badge */}
          <div
            style={{
              alignSelf: "center",
              padding: "0.28rem 0.58rem",
              borderRadius: 999,
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.22)",
              color: "#c2410c",
              fontSize: "0.6rem",
              fontWeight: 850,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            Scaling Ability Analysis
          </div>
          {/* Description */}
          <p style={{ margin: 0, flexShrink: 0, color: "rgba(0,0,0,0.5)", fontSize: "0.65rem", lineHeight: 1.44 }}>
            (1) As entity size increases sharply, our model maintains stable performance while the baseline progressively declines. (2) Compared to linearly scaled baseline (ChatNT), adaptive design scales sub-linearly when entity size grows sharply.
          </p>
          {/* Image */}
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/cuttlefish_scaling_result.png"
              alt="Cuttlefish scaling result: adaptive token budget grows sub-linearly with entity size"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }}
            />
          </div>
        </div>
      </div>
    </CuttlefishFrame>
  );
}

function CuttlefishImpactSlide() {
  const stats = [
    { value: "17/18", label: "QA benchmarks ranked #1",           color: "#f97316" },
    { value: "2.3×",  label: "higher METEOR vs text-only LLM",   color: "#059669" },
    { value: "−43%",  label: "accuracy drop without adapter",     color: "#dc2626" },
  ];

  const benchmarks = [
    { entity: "Molecules", suite: "Mol-Instructions", result: "14 / 15 metrics ranked #1 or #2" },
    { entity: "Proteins",  suite: "Mol-Instructions", result: "5 / 5 tasks ranked #1" },
    { entity: "DNA",       suite: "DNA-Chat",          result: "Top-1 average across all tasks" },
    { entity: "RNA",       suite: "RNA-QA",            result: "State-of-the-art performance" },
  ];

  const impact = [
    "LLMs reason with geometry instead of guessing from text.",
    "Adaptive token budgets scale to complex inputs.",
    "Open model, encoder, and instruction data for structure-grounded LLM research.",
  ];

  return (
    <CuttlefishFrame
      eyebrow="Cuttlefish · Results & Impact"
      title="Instruction-aware grounding tops 17 of 18 benchmarks"
      subtitle="A unified model trained across diverse entity types consistently outperforms single-domain specialists — geometry injection makes the difference."
    >
      {/* 3 rows: stat cards / two result figures / impact phrases */}
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", gap: "0.78rem", height: 405 }}>

        {/* Top: 3 stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.58rem" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "0.76rem 0.92rem",
                borderRadius: 10,
                background: "rgba(255,255,255,0.92)",
                border: `1px solid ${stat.color}22`,
                borderTopWidth: "2.5px",
                borderTopColor: stat.color,
                borderTopStyle: "solid",
                boxShadow: "0 5px 14px rgba(45,106,45,0.05)",
                textAlign: "left",
              }}
            >
              <strong style={{ display: "block", color: stat.color, fontSize: "1.48rem", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: "0.22rem" }}>
                {stat.value}
              </strong>
              <span style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.64rem", lineHeight: 1.35, fontWeight: 650 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Middle: two result figures side by side, full width */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.78rem" }}>

          {/* Figure 1: Enhancing General LLMs */}
          <div style={{ borderRadius: 12, background: "#fff", border: "1px solid rgba(249,115,22,0.14)", display: "flex", flexDirection: "column", padding: "0.6rem 0.7rem", gap: "0.4rem", overflow: "hidden" }}>
            <div style={{ alignSelf: "center", padding: "0.22rem 0.52rem", borderRadius: 999, background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.22)", color: "#c2410c", fontSize: "0.58rem", fontWeight: 850, letterSpacing: "0.07em", textTransform: "uppercase", flexShrink: 0 }}>
              Enhancing General LLMs
            </div>
            <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/cuttlefish_experiments.png" alt="Cuttlefish experiment results" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6 }} />
            </div>
          </div>

          {/* Figure 2: DNA Understanding */}
          <div style={{ borderRadius: 12, background: "#fff", border: "1px solid rgba(249,115,22,0.14)", display: "flex", flexDirection: "column", padding: "0.6rem 0.7rem", gap: "0.4rem", overflow: "hidden" }}>
            <div style={{ alignSelf: "center", padding: "0.22rem 0.52rem", borderRadius: 999, background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.22)", color: "#c2410c", fontSize: "0.58rem", fontWeight: 850, letterSpacing: "0.07em", textTransform: "uppercase", flexShrink: 0 }}>
              DNA Understanding
            </div>
            <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/cuttlefish_exp_dna.png" alt="Cuttlefish DNA experiment results" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6 }} />
            </div>
          </div>
        </div>

        {/* Bottom: impact phrases in a row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.58rem" }}>
          {impact.map((line) => (
            <div
              key={line}
              style={{
                padding: "0.6rem 0.82rem",
                borderRadius: 10,
                background: "rgba(249,115,22,0.04)",
                border: "1px solid rgba(249,115,22,0.16)",
                color: "rgba(154,52,18,0.82)",
                fontSize: "0.67rem",
                lineHeight: 1.45,
                fontWeight: 650,
                textAlign: "left",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </CuttlefishFrame>
  );
}

/* ─── Slide 11 — SenseTime Internship: Piccolo2 & EGTLM ─── */
function SensePiccoloSlide() {
  const accentBg     = "rgba(217,119,6,0.08)";
  const accentBorder = "rgba(217,119,6,0.18)";
  const accentText   = "rgba(180,83,9,0.86)";

  const lossTypes = [
    { type: "Retrieval / Reranking",       loss: "In-batch contrastive loss" },
    { type: "Sentence Similarity",         loss: "Ranking loss on continuous scores" },
    { type: "Classification / Clustering", loss: "Label-anchored contrastive" },
  ];

  const cmtebCols = ["Classif.", "Cluster.", "Pair Cl.", "Rerank.", "Retriev.", "STS", "Avg"];
  const cmtebData = [
    { label: "Piccolo2",   scores: ["74.59","62.17","90.24","70.00","74.36","63.50","70.95"], ours: true,  delta: false },
    { label: "Prev. SOTA", scores: ["73.35","67.08","88.52","69.67","74.05","62.46","69.07"], ours: false, delta: false },
    { label: "Δ",          scores: ["+1.24","−4.91","+1.72","+0.33","+0.31","+1.04","+1.88"], ours: false, delta: true },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: 735,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "3rem clamp(3.25rem, 6vw, 5.25rem)",
        background: "linear-gradient(135deg, #f8fff6 0%, #eef9ef 48%, #f7fbf3 100%)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          height: 630,
          borderRadius: 18,
          overflow: "hidden",
          background: "rgba(255,255,255,0.74)",
          border: "1px solid rgba(45,106,45,0.12)",
          boxShadow: "0 24px 70px rgba(45,106,45,0.12)",
          padding: "2.55rem clamp(2.3rem, 4vw, 3.25rem)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: "1rem", flexShrink: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.32rem 0.72rem",
              borderRadius: 999,
              background: accentBg,
              border: `1px solid ${accentBorder}`,
              color: accentText,
              fontSize: "0.64rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.72rem",
            }}
          >
            SenseTime Internship · Embedding & LLM · 2023 – 2024
          </div>
          <h2
            style={{
              margin: "0 0 0.38rem",
              color: "#163a18",
              fontSize: "clamp(1.55rem, 2.1vw, 2.0rem)",
              lineHeight: 1.1,
              fontWeight: 850,
            }}
          >
            Task-Aware Training Achieves CMTEB #1 at the 300M Scale
          </h2>
          <p style={{ margin: 0, color: "rgba(0,0,0,0.52)", fontSize: "0.83rem", lineHeight: 1.5 }}>
            Two open-source models from the same internship — one specialized for embedding, one that unifies retrieval and generation in a single LLM.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: "1rem", flex: 1, minHeight: 0, overflow: "hidden" }}>

          {/* Left: Piccolo2 */}
          <div
            style={{
              borderRadius: 12,
              background: "rgba(255,255,255,0.92)",
              border: `1px solid ${accentBorder}`,
              padding: "1rem 1.2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", flexShrink: 0 }}>
              <h3 style={{ margin: 0, color: "#173b19", fontSize: "1rem", fontWeight: 800 }}>Piccolo2</h3>
              <span style={{ padding: "0.16rem 0.48rem", borderRadius: 999, background: accentBg, border: `1px solid ${accentBorder}`, color: accentText, fontSize: "0.56rem", fontWeight: 800 }}>CMTEB #1</span>
              <span style={{ padding: "0.16rem 0.48rem", borderRadius: 999, background: "rgba(45,106,45,0.07)", border: "1px solid rgba(45,106,45,0.15)", color: "rgba(22,58,24,0.72)", fontSize: "0.56rem", fontWeight: 800 }}>Tech Report 2024</span>
            </div>

            <div style={{ flexShrink: 0 }}>
              <p style={{ margin: "0 0 0.28rem", fontSize: "0.62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.34)" }}>Challenge</p>
              <p style={{ margin: 0, color: "rgba(0,0,0,0.6)", fontSize: "0.73rem", lineHeight: 1.5 }}>
                Training all task types with a single contrastive loss is a poor fit for sentence similarity, which carries <em>continuous</em> similarity scores rather than binary positives — creating a consistent performance ceiling.
              </p>
            </div>

            <div style={{ flexShrink: 0 }}>
              <p style={{ margin: "0 0 0.38rem", fontSize: "0.62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.34)" }}>Method — Task-Matched Loss Routing</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.28rem" }}>
                {lossTypes.map(({ type, loss }) => (
                  <div
                    key={type}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.5rem",
                      padding: "0.55rem 0.6rem",
                      borderRadius: 8,
                      background: accentBg,
                      border: `1px solid ${accentBorder}`,
                    }}
                  >
                    <span style={{ fontSize: "0.67rem", color: accentText, fontWeight: 700 }}>{type}</span>
                    <span style={{ fontSize: "0.65rem", color: "rgba(0,0,0,0.54)" }}>{loss}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flexShrink: 0 }}>
              <p style={{ margin: "0 0 0.34rem", fontSize: "0.62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.34)" }}>Results — CMTEB Comparison (31 datasets)</p>
              <div style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${accentBorder}` }}>
                {/* Header row */}
                <div style={{ display: "grid", gridTemplateColumns: "4.6rem repeat(7, 1fr)", background: `rgba(217,119,6,0.06)`, borderBottom: `1px solid ${accentBorder}` }}>
                  <div style={{ padding: "0.42rem 0.4rem" }} />
                  {cmtebCols.map((col, i) => (
                    <div key={col} style={{ padding: "0.42rem 0.18rem", textAlign: "center", fontSize: "0.52rem", fontWeight: 800, color: i === 6 ? accentText : "rgba(0,0,0,0.38)", letterSpacing: "0.03em", borderLeft: "1px solid rgba(217,119,6,0.12)" }}>
                      {col}
                    </div>
                  ))}
                </div>
                {/* Data rows */}
                {cmtebData.map(({ label, scores, ours, delta }, ri) => (
                  <div
                    key={label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "4.6rem repeat(7, 1fr)",
                      background: ours ? accentBg : delta ? "transparent" : "rgba(245,245,245,0.45)",
                      borderTop: ri > 0 ? `1px solid ${ours ? accentBorder : "rgba(0,0,0,0.06)"}` : undefined,
                    }}
                  >
                    <div style={{ padding: "0.48rem 0.4rem", fontSize: "0.59rem", fontWeight: 800, color: ours ? accentText : delta ? "rgba(0,0,0,0.38)" : "rgba(0,0,0,0.48)", display: "flex", alignItems: "center" }}>
                      {label}
                    </div>
                    {scores.map((score, ci) => {
                      const isAvg = ci === 6;
                      const isPos = delta && score.startsWith("+");
                      const isNeg = delta && score.startsWith("−");
                      return (
                        <div
                          key={ci}
                          style={{
                            padding: "0.48rem 0.18rem",
                            textAlign: "center",
                            fontSize: ours && isAvg ? "0.86rem" : "0.71rem",
                            fontWeight: ours || delta ? 800 : 600,
                            color: delta ? (isPos ? "#16a34a" : isNeg ? "#dc2626" : "rgba(0,0,0,0.42)") : ours ? (isAvg ? accentText : "#173b19") : "rgba(0,0,0,0.5)",
                            borderLeft: "1px solid rgba(217,119,6,0.1)",
                            background: isAvg && ours ? "rgba(217,119,6,0.08)" : undefined,
                          }}
                        >
                          {score}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <p style={{ margin: "0.38rem 0 0", fontSize: "0.62rem", color: "rgba(0,0,0,0.44)", lineHeight: 1.38 }}>
                Beats gte-Qwen1.5-7B (7B params) by 1.39 pts at only 300M params · Matryoshka dims 256–1792, &lt;1 pt degradation.
              </p>
            </div>
          </div>

          {/* Right: EGTLM */}
          <div
            style={{
              borderRadius: 12,
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(99,102,241,0.18)",
              padding: "1rem 1.2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.72rem",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", flexShrink: 0 }}>
              <h3 style={{ margin: 0, color: "#173b19", fontSize: "1rem", fontWeight: 800 }}>EGTLM</h3>
              <span style={{ padding: "0.16rem 0.48rem", borderRadius: 999, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.18)", color: "rgba(67,56,202,0.82)", fontSize: "0.56rem", fontWeight: 800 }}>CMTEB Top-10</span>
            </div>

            <div style={{ flexShrink: 0 }}>
              <p style={{ margin: "0 0 0.28rem", fontSize: "0.62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.34)" }}>Challenge</p>
              <p style={{ margin: 0, color: "rgba(0,0,0,0.6)", fontSize: "0.73rem", lineHeight: 1.5 }}>
                RAG systems need two separate models. Naive joint training lets one objective suppress the other — embedding and generation can&apos;t co-exist under standard fine-tuning.
              </p>
            </div>

            <div style={{ flexShrink: 0 }}>
              <p style={{ margin: "0 0 0.38rem", fontSize: "0.62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.34)" }}>Method</p>
              {[
                { label: "Two-Stage Curriculum", body: "Generative pretraining first → stable backbone → joint contrastive + cross-entropy fine-tuning" },
                { label: "<|embed|> Token", body: "Zero-overhead switch: append token, get a fixed-length vector — no architecture change, same forward pass" },
              ].map(({ label, body }) => (
                <div
                  key={label}
                  style={{
                    marginBottom: "0.34rem",
                    padding: "0.42rem 0.6rem",
                    borderRadius: 8,
                    background: "rgba(99,102,241,0.05)",
                    border: "1px solid rgba(99,102,241,0.14)",
                  }}
                >
                  <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "rgba(67,56,202,0.82)", marginBottom: "0.18rem" }}>{label}</div>
                  <div style={{ fontSize: "0.64rem", color: "rgba(0,0,0,0.54)", lineHeight: 1.42 }}>{body}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "0.62rem 0.72rem",
                borderRadius: 10,
                background: "rgba(99,102,241,0.05)",
                border: "1px solid rgba(99,102,241,0.14)",
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: "0.62rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.34)", marginBottom: "0.34rem" }}>Result</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "rgba(67,56,202,0.86)", lineHeight: 1 }}>
                68 <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "rgba(0,0,0,0.42)" }}>CMTEB avg</span>
              </div>
              <p style={{ margin: "0.3rem 0 0", fontSize: "0.65rem", color: "rgba(0,0,0,0.52)", lineHeight: 1.42 }}>
                Top-10 at 7B while retaining full generation quality. Model-agnostic design works with Mistral, Qwen, and LLaMA.
              </p>
            </div>

            <div
              style={{
                marginTop: "auto",
                padding: "0.5rem 0.65rem",
                borderRadius: 8,
                background: "rgba(45,106,45,0.05)",
                border: "1px solid rgba(45,106,45,0.12)",
                fontSize: "0.63rem",
                color: "rgba(0,0,0,0.46)",
                lineHeight: 1.42,
                flexShrink: 0,
              }}
            >
              <span style={{ fontWeight: 750, color: "rgba(22,58,24,0.68)" }}>Open-sourced</span> — code &amp; weights on GitHub &amp; HuggingFace. Both models part of SenseTime Research 2024.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─── Slide 7 — Skills & Fit ─── */
function Slide7() {
  const primary = "#2d6a2d";

  const categories = [
    { icon: "🔬", title: "Research",               items: ["LLM Post-Training", "Pre-Training / Fine-Tuning", "Multimodal Alignment"] },
    { icon: "🖥️", title: "ML Engineering",          items: ["PyTorch", "Transformers (HuggingFace)", "DeepSpeed", "DDP / FSDP", "Multi-GPU / Multi-Node Training"] },
    { icon: "🔧", title: "Systems & Programming",   items: ["Linux", "Slurm", "Docker", "HPC Workflows", "Python", "C/C++"] },
    { icon: "🌐", title: "Languages",               items: ["English (Fluent)", "Chinese (Native)"] },
  ];

  const fitItems = [
    { icon: "📄", label: "Publication Track",  body: "NeurIPS 2025 · ICLR 2026 · ICML 2026" },
    { icon: "🚀", label: "Shipped Research",   body: "Piccolo2 CMTEB #1, open-sourced on HuggingFace" },
    { icon: "⚡", label: "Full-Stack Depth",   body: "Hypothesis → trained model → public deployment" },
  ];

  const growthItems = [
    "LLM alignment (RLHF, DPO, preference learning)",
    "Multi-agent systems & reasoning",
    "Multimodal world models",
  ];

  return (
    <div style={{ display: "flex", width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 1rem", boxSizing: "border-box" }}>

      {/* Left panel: skill boxes */}
      <div style={{ flex: "0 0 48%", padding: "1.2rem 2rem 1.2rem 0", borderRight: "1px solid rgba(0,0,0,0.09)", display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111", marginBottom: "0.9rem" }}>Skills &amp; Expertise</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {categories.map(({ icon, title, items }) => (
            <Card key={title}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.6rem" }}>
                <span style={{ fontSize: "1.05rem", lineHeight: 1 }}>{icon}</span>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111" }}>{title}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "0.2rem 0.6rem",
                      borderRadius: 999,
                      background: `${primary}12`,
                      color: primary,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Right panel: Fit & Growth */}
      <div style={{ flex: 1, padding: "1.2rem 0 1.2rem 2rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111", marginBottom: "0" }}>Fit &amp; Growth</h2>

        <div>
          <p style={{ margin: "0 0 0.5rem", fontSize: "0.72rem", fontWeight: 700, color: "rgba(0,0,0,0.38)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Research Fit</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {fitItems.map(({ icon, label, body }) => (
              <Card key={label}>
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.3rem", lineHeight: 1, flexShrink: 0 }}>{icon}</span>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ fontSize: "0.83rem", fontWeight: 700, color: "#111", marginBottom: "0.15rem" }}>{label}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.52)" }}>{body}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <p style={{ margin: "0 0 0.5rem", fontSize: "0.72rem", fontWeight: 700, color: "rgba(0,0,0,0.38)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Growing Into</p>
          <Card>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.42rem", alignItems: "center", textAlign: "center" }}>
              {growthItems.map((dir) => (
                <span key={dir} style={{ fontSize: "0.78rem", color: "rgba(0,0,0,0.65)" }}>{dir}</span>
              ))}
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
}

/* ─── Slide 8 — Connect ─── */
function Slide8() {
  const links = [
    { icon: "📧", label: "Email",     value: "zihaoj24@gmail.com",           href: "mailto:zihaoj24@gmail.com" },
    { icon: "🐙", label: "GitHub",    value: "github.com/zihao-jing",        href: "https://github.com/zihao-jing" },
    { icon: "🎓", label: "Scholar",   value: "Google Scholar — Zihao Jing",  href: "https://scholar.google.ca/citations?user=xfvxo64AAAAJ" },
    { icon: "💼", label: "LinkedIn",  value: "linkedin.com/in/zihao-jing",   href: "https://www.linkedin.com/in/zihao-jing-65b506323/" },
    { icon: "🌐", label: "Portfolio", value: "zihao-jing.github.io",         href: "/" },
  ];
  return (
    <div style={{ ...slideInner, maxWidth: 620 }}>
      <p
        style={{
          fontFamily: "var(--font-dancing), cursive",
          fontWeight: 700,
          fontSize: "clamp(2.6rem, 4vw, 3.6rem)",
          color: "#163a18",
          lineHeight: 1.1,
          margin: "0 0 0.9rem",
          textAlign: "center",
        }}
      >
        Thank You
      </p>
      <div style={{ width: "100%", height: 1, background: "rgba(0,0,0,0.1)", marginBottom: "1.4rem" }} />
      <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>📬 Let&apos;s Connect</h2>
      <p style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.45)", marginBottom: "1.5rem" }}>
        Open to research collaborations, internships, and interesting problems.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
        {links.map(({ icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: "rgba(0,0,0,0.03)",
              borderRadius: 10,
              padding: "0.8rem 1.1rem",
              border: "1px solid rgba(0,0,0,0.09)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>{icon}</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.38)", width: 72, flexShrink: 0 }}>{label}</span>
            <span style={{ fontSize: "0.87rem", color: "rgba(0,0,0,0.78)" }}>{value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Reveal instance type ─── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Deck = any;

/* ─── Main page ─── */
export default function SlidesPage() {
  const [current, setCurrent] = useState(0);
  const revealRef = useRef<Deck>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const init = async () => {
      const { default: Reveal } = await import("reveal.js");

      const deck: Deck = new Reveal(containerRef.current!, {
        hash: false,
        controls: false,
        progress: false,
        center: true,
        transition: "slide",
        backgroundTransition: "fade",
        keyboard: true,
        touch: true,
        embedded: true,
        width: 1400,
        height: 750,
        margin: 0.02,
        minScale: 0.2,
        maxScale: 2.0,
      });

      await deck.initialize();
      revealRef.current = deck;
      deck.on("slidechanged", (e: { indexh: number }) => setCurrent(e.indexh));
    };

    init();

    return () => {
      try { revealRef.current?.destroy(); } catch { /* ignore */ }
      revealRef.current = null;
    };
  }, []);

  const goTo = useCallback((i: number) => { revealRef.current?.slide(i, 0); }, []);
  const prev = useCallback(() => { revealRef.current?.left(); }, []);
  const next = useCallback(() => { revealRef.current?.right(); }, []);

  const navBtn = (disabled: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: disabled ? "rgba(0,0,0,0.03)" : "rgba(0,0,0,0.07)",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: "50%",
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "default" : "pointer",
    color: disabled ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.55)",
    zIndex: 100,
    transition: "background 0.2s, color 0.2s",
  });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        color: "#111",
        fontFamily: "inherit",
      }}
    >
      {/* ── top bar ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.65rem 1.1rem",
          pointerEvents: "none",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "rgba(0,0,0,0.42)",
            textDecoration: "none",
            fontSize: "0.82rem",
            pointerEvents: "all",
            transition: "color 0.2s",
          }}
        >
          <Home style={{ width: 14, height: 14 }} /> Home
        </Link>
        <span style={{ color: "rgba(0,0,0,0.32)", fontSize: "0.78rem", fontVariantNumeric: "tabular-nums" }}>
          {current + 1} / {SLIDES.length}
        </span>
      </div>

      {/* ── main Reveal area ── */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div ref={containerRef} className="reveal" style={{ width: "100%", height: "100%" }}>
          <div className="slides">

            <section style={{ background: "#f5fdf4" }}><Slide0 /></section>
            <section style={{ background: "#f5fdf4" }}><Slide1 /></section>

            <section style={{ background: "#f5fdf4" }}><MumoChallengeSlide /></section>
            <section style={{ background: "#f5fdf4" }}><MumoNoveltySlide /></section>
            <section style={{ background: "#f5fdf4" }}><MumoImpactSlide /></section>

            <section style={{ background: "#f5fdf4" }}><EdtChallengeSlide /></section>
            <section style={{ background: "#f5fdf4" }}><EdtNoveltySlide /></section>
            <section style={{ background: "#f5fdf4" }}><EdtImpactSlide /></section>

            <section style={{ background: "#f5fdf4" }}><CuttlefishChallengeSlide /></section>
            <section style={{ background: "#f5fdf4" }}><CuttlefishNoveltySlide /></section>
            <section style={{ background: "#f5fdf4" }}><CuttlefishImpactSlide /></section>

            <section style={{ background: "#f5fdf4" }}><SensePiccoloSlide /></section>

            <section style={{ background: "#ffffff" }}><Slide7 /></section>
            <section style={{ background: "#ffffff" }}><Slide8 /></section>

          </div>
        </div>

        <button onClick={prev} disabled={current === 0} style={{ ...navBtn(current === 0), left: "0.85rem" }} aria-label="Previous slide">
          <ChevronLeft style={{ width: 20, height: 20 }} />
        </button>
        <button onClick={next} disabled={current === SLIDES.length - 1} style={{ ...navBtn(current === SLIDES.length - 1), right: "0.85rem" }} aria-label="Next slide">
          <ChevronRight style={{ width: 20, height: 20 }} />
        </button>
      </div>

      {/* ── bottom navigation bar ── */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "0.45rem 0.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.15rem",
          overflowX: "auto",
          flexShrink: 0,
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        {NAV_ITEMS.map((slide, i) => {
          const active = slide.active.includes(current);
          return (
          <button
            key={i}
            onClick={() => goTo(slide.slide)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.18rem",
              padding: "0.35rem 0.6rem",
              borderRadius: 7,
              border: "none",
              cursor: "pointer",
              background: active ? "rgba(0,0,0,0.09)" : "transparent",
              color: active ? "#111" : "rgba(0,0,0,0.4)",
              transition: "background 0.2s, color 0.2s",
              flexShrink: 0,
              outline: active ? "1px solid rgba(0,0,0,0.14)" : "none",
            }}
            aria-label={`Go to slide: ${slide.title}`}
            aria-current={active ? "true" : undefined}
          >
            <span style={{ fontSize: "0.95rem", lineHeight: 1 }}>{slide.emoji}</span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>{slide.title}</span>
          </button>
          );
        })}
      </div>
    </div>
  );
}
