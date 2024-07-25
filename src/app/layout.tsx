import "~/styles/globals.css";

import { Source_Code_Pro } from "next/font/google";
import { type Metadata } from "next";
import { cn } from "~/helpers";

export const metadata: Metadata = {
  title: "Polar Way",
  description: "Громадська організація з міста Вараш",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "Polar Way",
    "PolarWay",
    "Varash",
    "Вараш",
    "Громадська організація",
    "Public organization",
    "Молодь",
    "активний відпочинок",
  ],
};

const font = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(font.className, "bg-zinc-900 text-white")}>
      <body>{children}</body>
    </html>
  );
}
