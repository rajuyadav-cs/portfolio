import "./globals.css";
import React from "react";
import { Toaster } from "react-hot-toast";
type ReactNodeType = {
  children: React.ReactNode;
};

export default function ReactLayout({ children }: ReactNodeType) {
  return (
    <html lang="en">
      <body className="h-screen w-full m-0 p-0 bg-background">{children}</body>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </html>
  );
}
