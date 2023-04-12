import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/styles/Navbar.css'
import { SessionProvider , Provider } from 'next-auth/react'

export default function App({ Component, session , pageProps }) {

  return(
    <>
      <SessionProvider session={session} >
         <Navbar />
         <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
