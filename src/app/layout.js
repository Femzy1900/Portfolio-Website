
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Femi Adedokun - Portfolio",
  description: "Welcome to my personal portfolio website showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <ThemeSwitcher />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
