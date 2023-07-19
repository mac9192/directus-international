import '../../globals.css'
import { Inter } from 'next/font/google'
import Navigation from "../../blog-components/navigation/navigation"
import Footer from "../../blog-components/navigation/footer"
import { Metadata } from "next"
import { getDictionary } from '../../lib/getDictionary'
import siteConfig from '../../constants/site'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

/*export const metadata: Metadata = {
  title: "Explorer",
  description: "A minimal and lovely travel blog which shares experiences from USA"
}*/

export const generateMetadata = async ({params:{lang}}: {params: {lang:string}}) => {

  //Get Dictionary based on lang
  const dictionary = await getDictionary(lang)

  return {
    title: {
      template: "%s | " + siteConfig.siteName,
      default: siteConfig.siteName,
    },
    description: dictionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dictionary.footer.description,
      url:`${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      siteName: siteConfig.siteName,
     images: [
        {
          url: "https://localhost:3000/opengraph-image.png",
          width: 1200,
          height: 628,
        },
  
      ],
      locale: lang,
      type: 'website',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      languages: {
         'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        'es-ES': `${process.env.NEXT_PUBLIC_SITE_URL}/es`,
      }
    },
    verification: {
      google:"xFa5TJNZlg-4hykrxBaFnWMCWtOgsLM2CAEFn71GZ-s" 
    }
  }

}



export default function RootLayout({
  children, 
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>


<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-LSTFH7X86V"></Script>
<Script id="google-analytics">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LSTFH7X86V');`}
</Script>
    
      <body className={inter.className}>
 
        <Navigation locale={lang} />
        <div className="min-h-[calc(100vh-300px)]">{children}</div>
   
        <Footer locale={lang} />
      </body>
    </html>
  );
}