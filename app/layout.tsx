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
    title: 'Wasp',
    description:
        'Social media platform where people can post short articles known as stings, making it easier to get in touch with friends and follow news!',
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
