import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Md Jihad Hossain - Portfolio Website",
  description:
    "Web Developer with Expertise in Front end Development in React JS and working in MERN Stack. Successfully architected and implemented responsive, user-friendly UI and engineered seamless user experiences. Skilled in troubleshooting and diagnosing issues. Experienced in collaborating with cross-functional teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="../assets/my-photo.png" />
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
