import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trinh Duc Anh | Frontend Developer & UI/UX Engineer",
  description:
    "Official portfolio of Trinh Duc Anh (YunCt123) - Frontend Developer specializing in ReactJS, TypeScript, Next.js, React Native, and high-performance UI/UX engineering.",
  keywords: [
    "Trinh Duc Anh",
    "YunCt123",
    "Frontend Developer",
    "ReactJS",
    "TypeScript",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "FPT Software",
    "FPT University",
  ],
  authors: [{ name: "Trinh Duc Anh", url: "https://github.com/YunCt123" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Anti-FOUC script for default dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-slate-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <div className="print:hidden">
              <Navbar />
            </div>
            <main className="flex-1">{children}</main>
            <div className="print:hidden">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
