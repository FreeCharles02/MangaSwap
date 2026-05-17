import NavbarMain from './main/navbarMain'
import Footer from './main/footnote'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar2 from './other/navbar2'
import localFont from 'next/font/local'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainBar from './main/sidebar'


export default function Layout({ children }) {
  const {data: session, status} = useSession()
  const userEmail = session?.user?.email

 // if (status === "authenticated") {
    return (
      <div className='row'>
        <div className='col-lg-2'>
         <MainBar />
        </div>
        <div className='col-lg-10'>
          { /*<NavbarMain /> */}
             <main>{children}</main>
        </div>
          <Footer />
        </div>
    )
    /* else {  

return (
  <div>
      <Navbar2 />
        <main>{children}</main>
      <Footer />
  </div>
  )
 }
}; 
 } */
  }