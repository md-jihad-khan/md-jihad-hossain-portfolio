import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  robots: { index: false, follow: false },
  title: "Md Jihad Hossain - Portfolio Website",
  description:
    "Web Developer with Expertise in Front end Development in React JS and working in MERN Stack. Successfully architected and implemented responsive, user-friendly UI and engineered seamless user experiences. Skilled in troubleshooting and diagnosing issues. Experienced in collaborating with cross-functional teams",
  verification: {
    google: "ZhLEtmE8mTFqOlssBqVAuMB54EaMSAaJErgk4X_zt-Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="google-site-verification"
          content={metadata.verification.google}
        />
        <link rel="icon" href="/assets/my-photo.png" />
      </Head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
