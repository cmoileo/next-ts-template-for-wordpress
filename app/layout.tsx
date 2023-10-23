// layouts/layout.tsx
import Footer from './layouts/footer'
import Header from './layouts/header';

export default function RootLayout({
  children,
  loadMenu,
}: {
  children: React.ReactNode;
$$
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
