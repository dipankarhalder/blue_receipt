import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { IPageChildProps } from '@/utils/interface';
import { allStaticContent } from "@/utils/variables/staticContent";
import { AppContextProvider } from '@/context/AppContextProvider';

const nunito = Nunito({ 
  weight: ['400', '700'],
  variable: '--font-nunito',
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: allStaticContent.themes.project_title,
  description: allStaticContent.themes.decspt,
};

export default function RootLayout({ children }: IPageChildProps) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={`${nunito.variable} ${nunito.className}`}>
          <main>{children}</main>
        </body>
      </AppContextProvider>
    </html>
  )
}
