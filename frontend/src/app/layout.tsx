import "./globals.css";
import React from "react";
import ThemeProvider from "@/components/providers/ThemeProvider";

type ReactNodeType = {
  children: React.ReactNode;
};

export default function ReactLayout({ children }: ReactNodeType) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-0 h-screen min-h-screen w-full overflow-hidden bg-background p-0 text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
