import Analytics from 'app/components/analytics/analytics';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { mukta } from './fonts';
import './tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Abhishek Tripathi Kuberji',
    default: 'Abhishek Tripathi Kuberji',
  },
  description: 'Software Engineer and forever a student of the craft.',
  metadataBase: new URL('https://abhishektripathi.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={mukta.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body 
        suppressHydrationWarning
        className="bg-white text-black antialiased dark:bg-black dark:text-white selection:bg-primary-500 selection:text-white"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['dark', 'light']}
        >
          <LenisProvider>{children}</LenisProvider>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
