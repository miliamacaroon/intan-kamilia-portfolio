import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Intan Kamilia | AI Engineer & Data Engineer",
  description:
    "Portfolio of Intan Kamilia binti Roslan, an AI Engineer and Data Engineer building production RAG/LLM systems and large-scale data pipelines.",
  openGraph: {
    title: "Intan Kamilia | AI Engineer & Data Engineer",
    description:
      "AI Engineer and Data Engineer building production RAG/LLM systems and large-scale data pipelines.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
