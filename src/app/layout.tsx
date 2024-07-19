import type { Metadata } from 'next';
import { Merriweather, Roboto, Inter } from 'next/font/google';
import Providers from 'src/app/providers';
import './globals.css';

const merriweather = Merriweather({
  variable: '--merriweather-font',
  weight: ['300', '400', '700', '900'],
  style: 'normal',
  subsets: ['cyrillic'],
  display: 'swap',
});

const roboto = Roboto({
  variable: '--roboto-font',
  weight: ['300', '400', '500', '700', '900'],
  style: 'normal',
  subsets: ['cyrillic'],
  display: 'swap',
});

const inter = Inter({
  variable: '--inter-font',
  weight: ['300', '400', '500', '700', '900'],
  style: 'normal',
  subsets: ['cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${merriweather.variable} ${roboto.variable} ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
