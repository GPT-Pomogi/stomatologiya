import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stomatologiya-implant.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Имплантация зубов с 3D-планированием | Дентал Прайм",
  description:
    "Премиальный лендинг стоматологии: имплантация зубов с 3D-планированием, гарантией, опытными врачами и записью на консультацию.",
  keywords: [
    "имплантация зубов",
    "стоматология",
    "3D планирование",
    "зубные импланты",
    "консультация стоматолога",
  ],
  openGraph: {
    title: "Имплантация зубов с гарантией и 3D-планированием",
    description:
      "Чистый медицинский landing page для записи на консультацию по имплантации зубов.",
    type: "website",
    locale: "ru_RU",
    url: "https://stomatologiya-implant.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-ivory text-ink antialiased">{children}</body>
    </html>
  );
}
