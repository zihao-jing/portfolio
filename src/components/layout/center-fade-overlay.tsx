"use client";

export function CenterFadeOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -1,
        background:
          "linear-gradient(to right, transparent 0%, transparent 12%, var(--center-fade) 25%, var(--center-fade) 75%, transparent 88%, transparent 100%)",
      }}
    />
  );
}
