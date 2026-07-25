import "./globals.css";
import React from "react";
type ReactNodeType = {
  children: React.ReactNode;
};

export default function ReactLayout({ children }: ReactNodeType) {
  return (
    <html lang="en">
      <body className="h-screen w-full m-0 p-0 bg-background">{children}</body>
    </html>
  );
}
