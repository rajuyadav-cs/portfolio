import "./globals.css";
import React from "react";
import ThemeProvider from "@/components/providers/ThemeProvider";

type ReactNodeType = {
  children: React.ReactNode;
};

export default function ReactLayout({ children }: ReactNodeType) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-0 min-h-dvh w-full overflow-x-hidden bg-background p-0 text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
