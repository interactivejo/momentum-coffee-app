import Nav from './components/layout/Nav'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav />
      <body >{children}</body>
    </html>
  )
}
