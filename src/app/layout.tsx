import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebCraft | 매출을 올리는 홈페이지를 만듭니다",
  description:
    "소상공인 맞춤 홈페이지 제작 전문. 업종별 맞춤 설계, 5일 완성, 25만원부터. 700+ 사장님이 선택한 No.1 웹 에이전시.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-surface text-on-surface font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
