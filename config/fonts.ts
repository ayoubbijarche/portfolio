import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Roboto } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const roboto = Roboto({
  subsets : ['latin'],
  weight : [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900",
  ],
});
