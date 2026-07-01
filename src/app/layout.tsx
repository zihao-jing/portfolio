import type { Metadata } from "next";
import { Inter, Dancing_Script, Lora } from "next/font/google";
import "./globals.css";
import 'katex/dist/katex.min.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CenterFadeOverlay } from "@/components/layout/center-fade-overlay";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zihao-jing.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Zihao Jing | AI Researcher',
    template: 'Zihao Jing | %s'
  },
  description: 'AI Researcher focused on multimodal LLM, LLM post-training, and evidence-grounded reasoning.',
  keywords: ['AI Researcher', 'LLM', 'Multimodal Reasoning', 'Machine Learning', 'NeurIPS', 'ICLR', 'ICML'],
  authors: [{ name: 'Zihao Jing' }],
  creator: 'Zihao Jing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zihao-jing.github.io',
    siteName: 'Zihao Jing - AI Researcher',
    title: 'Zihao Jing | AI Researcher',
    description: 'AI Researcher focused on multimodal LLM, LLM post-training, and evidence-grounded reasoning.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zihao Jing - AI Researcher'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zihao Jing | AI Researcher',
    description: 'AI Researcher focused on multimodal LLM, LLM post-training, and evidence-grounded reasoning.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${dancingScript.variable} ${lora.variable}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <CenterFadeOverlay />
            <Navbar />
            <main className="flex-1 pt-14">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
