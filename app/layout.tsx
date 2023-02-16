import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="border border-yellow-400 py-3 px-3 flex flex-row space-x-4 fixed top-10 pl">
          <Link href="/products/1">Product 1</Link>
          <Link href="/products/2">Product 2</Link>
          <Link href="/products/3">Product 3</Link>
          <Link href="/products/4">Product 4</Link>
        </div>
        <div className="pt-32">{children}</div>
      </body>
    </html>
  );
}
