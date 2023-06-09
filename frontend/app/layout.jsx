import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Instagram',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row w-full scroll-smooth">
        <Header />
        {children}
      </body>
    </html>
  );
}
