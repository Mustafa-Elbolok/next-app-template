import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';
import { Libre_Franklin } from 'next/font/google';
import './globals.css';

const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-arimo',
});
const libre_franklin = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-libre_franklin',
});

export const metadata: Metadata = {
    title: 'safe-next-app',
    description: `Simple template with github worlflow actions and husky setup for ci/cd locally and remotely ensuring no build issues appeares anywhere,
        and playwright for tests,
        and ready environment using editorconfig and prettier and gitattibutes to ensure strict code style.`,
    icons: {
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={arimo.variable + ' ' + libre_franklin.variable}>{children}</body>
        </html>
    );
}
