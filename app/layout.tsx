import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans , roboto } from "@/config/fonts";
import Nav from "@/components/navbar";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          roboto.className,
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Nav />
            <main className="container mx-auto max-w-7xl pt-5 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
