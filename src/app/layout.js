import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from "@/components/ui/navigation/Navigation";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${raleway.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
