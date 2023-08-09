import '../../globals.css'
import { Inter } from 'next/font/google'
import {Abhaya_Libre } from 'next/font/google'
import Navigation_ from "../../blog-components/navigation/navigation"
import Footer from "../../frontComponents/Footer"
import { Metadata } from "next"
import { getDictionary } from '../../lib/getDictionary'
import siteConfig from '../../constants/site'
import Script from 'next/script'
import Head from 'next/head'
import Navbar from '../../frontComponents/Navbar'
import TopNavigation from '../../frontComponents/topNavigation'
import Navigation from '../../frontComponents/Navigation'

const abhaya_Libre = Abhaya_Libre({weight:'400', subsets: ['latin'] })

/*export const metadata: Metadata = {
  title: "Explorer",
  description: "A minimal and lovely travel blog which shares experiences from USA"
}*/

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  // Get the Dicitionary based on Lang
  const dicitionary = await getDictionary(lang);

  return {
    title: {
      template: "%s | " + siteConfig.siteName,
      default: siteConfig.siteName,
    },
    description: dicitionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dicitionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: "https://localhost:3000/opengraph-image.png",
          width: 1200,
          height: 628,
        },
      ],
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        "es-ES": `${process.env.NEXT_PUBLIC_SITE_URL}/es`,
      },
    },
    /* Verification for Google Search Console */
 
  };
};



export default async function RootLayout({
  children, 
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  const dicitionary = await getDictionary(lang);
  return (
    <html lang={lang}>
<Head>
 

</Head>
 
 
      <body className={abhaya_Libre.className}>
        <TopNavigation />
        <Navigation locale={lang} dictionary={dicitionary}  />
        {/*<Navbar locale={lang} /> */}
        
        <div className="min-h-[calc(100vh-300px)]">{children}</div>
        <Footer dictionary={dicitionary}/>
        {/*<Footer locale={lang} /> */}
      </body>
    </html>
  );
}
