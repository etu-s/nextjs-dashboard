import '@/app/ui/global.css';
import { inter, abyssinicaSil } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${abyssinicaSil.className} antialiased`}>{children}</body>
    </html>
  );
}
