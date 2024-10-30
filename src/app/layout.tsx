import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import { prefix, URL } from "@/utils";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-notosans",
});

const title = " #なにゆえ私が福祉職 キャンペーンサイト | 東京都福祉局";
const desc =
  "福祉人材集中PR月間のスペシャルサイトを公開！#なにゆえ私が福祉職 をテーマに、福祉の仕事をする1人1人の理由をまとめたスペシャルサイトを公開しました。現場の方から、ホンネの話を聞いてみませんか。※すこし想像とはちがうかも";

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description: desc,
  openGraph: {
    url: URL,
    images: [`${URL}ogp/opg.png`],
    title: { template: `%s | ${title}`, default: title },
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
        <link
          rel="icon"
          type="image/png"
          href={prefix("/favicon-96x96.png")}
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href={prefix("favicon.svg")} />
        <link rel="shortcut icon" href={prefix("favicon.ico")} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={prefix("apple-touch-icon.png")}
        />
        <link rel="manifest" href={prefix("site.webmanifest")} />
      </head>

      <body className={`${notoSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
