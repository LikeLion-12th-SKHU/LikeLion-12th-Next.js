import '../globals.css';  // 경로 수정 유지

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
