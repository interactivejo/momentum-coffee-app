import Navbar from './components/layout/Navbar'
import './globals.css'
import NavbarMobile from './components/layout/NavbarMobile'
import Footer from './components/layout/Footer'

export const metadata = {
  title: 'Momentum Coffee',
  description: 'An ordering app for Momentum Coffee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/yqq8ifk.css"></link>
      </head>

      <body className='text-neutral'>
        <Navbar />
          <div className='pt-[8rem] pb-[4rem]'>
            {children}
          </div>
          
        <Footer />
        <NavbarMobile />
      </body>
    </html>
  )
}
