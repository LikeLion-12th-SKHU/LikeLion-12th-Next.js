import Header from '@/components/header';
import './globals.css'; // 모든 페이지에 글로벌 스타일 적용
export const metadata = {
    title: 'Next.js Caching',
    description: 'Learn how Next.js caching works',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
