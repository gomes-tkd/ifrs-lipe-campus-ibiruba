import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/global/header/header";
import { first_type } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "LIpE",
  description: "Laboratório Inteligente para Educação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={first_type.variable}>
        <div className={"App"}>
          <Header />
          <main className={"AppBody "}>{children}</main>
        </div>
      </body>
    </html>
  );
}
