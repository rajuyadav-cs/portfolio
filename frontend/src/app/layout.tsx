import React from "react";

type ReactNodeType = {
  children: React.ReactNode;
};

export default function ReactLayout({ children }: ReactNodeType) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
