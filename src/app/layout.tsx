import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-notosans",
});

const title = "#なにゆえ私が福祉職キャンペーンサイト｜東京都福祉保健局";
const desc =
  "福祉の仕事は、「誰かの役に立つ大切な仕事」「日本では将来性のある仕事」もちろん、私たちのやりがいです。でも、ほんとうの理由は、「おしゃべりが好きだから」「プライベートを大切にしたいから」そんな小さなことが、大きいのかもしれません。さあ、あなたも。ユニークな福祉職の人たちから、ホンネの話を聞いてみませんか。※すこし想豫とはちがうかも";

export const metadata: Metadata = {
  title: title,
  description: desc,
  openGraph: {
    url: "https://www.fukushijinzai.metro.tokyo.lg.jp/hello-essential-work/pr-gekkan/",
    title: title,
    description: desc,
    type: "website",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
          rel="preload"
          as="style"
          fetchPriority="high"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
          media="all"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
