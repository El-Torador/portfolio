import Header from "@/components/header";
import "../globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { defaultLocale } from "@/middleware";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const locale = params.lang ?? defaultLocale;
  return (
    <html lang={locale} className="!scroll-smooth">
      <head>
        <title>JK | Personal Portfolio</title>
        <meta name="description" content="Jordan KAGMENI (Torador) is a full-stack developer with 5 years of experience passionate about new technologies." />
        <meta name="google-site-verification" content="4RoXeNCu5UHqhSswckdnia4HOeWbupavALy-mc2uwgk" />
        <link rel="icon" href="https://lh3.googleusercontent.com/ogw/AGvuzYYM9epg3aCqpL9sBzJZPaUR3cA2Aswb3BAr7Lcq0w=s64" />
        <link rel="apple-touch-icon" href="https://lh3.googleusercontent.com/ogw/AGvuzYYM9epg3aCqpL9sBzJZPaUR3cA2Aswb3BAr7Lcq0w=s128" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header lang={locale} />
            {children}
            <Footer lang={locale} />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
