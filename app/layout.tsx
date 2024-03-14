import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noter App",
  description:
    "Registra tus estudios en notas y ponte objetivos de manera accesible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
      </head>
      <body >{children}</body>
    </html>
  );
}
