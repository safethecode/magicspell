import { constructMetadata } from '@/utils/next';
import { Pretendard } from '@/styles/globalFontsStyle';

import Providers from './providers';

import '@/styles/globalStyle.css';
import '@/styles/tailwindcss/global.css';

export const metadata = constructMetadata({
  title: 'MagicSpell',
  description: '🦄 Experience rapid development with tailwindcss.',
  domain: 'https://example.com',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
