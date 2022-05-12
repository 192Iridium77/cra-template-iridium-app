import React from "react";

export default function MenuLeft({ children }) {
  return (
    <div className="flex flex-col">
      <div className="h-full opacity-0">{children}</div>
      <div className="fixed z-20 bg-white left-0 h-full">{children}</div>
    </div>
  );
}
