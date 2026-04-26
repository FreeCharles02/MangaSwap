import NavbarMain from './main/navbarMain'
import Footer from './main/footnote'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar2 from './other/navbar2'
import localFont from 'next/font/local'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Layout({ children }) {
  const {data: session, status} = useSession()
  const userEmail = session?.user?.email

 // if (status === "authenticated") {
    return (
      <div>
          <NavbarMain />
             <main>{children}</main>
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