import React from "react";

export default function Inner({ h, p, children }) {
  return (
    <div className="bg-warning p-2">
      <div>Inner Component</div>
      <h2>{h}</h2>
      <p>{p}</p>

      {/* 🔥 Render deeper nested components inside Inner */}
      <div className="deep-nested-content">{children}</div>
    </div>
  );
}
