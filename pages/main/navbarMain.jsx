import React, { useState, useRef, useCallback } from "react"
import Link from "next/link";
import styles from "./navbarMain.module.css"
const NavbarMain = () => {
  return (  
<>   
  <div className={styles.navBar}>
    <div className="row">   
      <div className={`row ${styles.navbarLinks}`}>
      <div className={`col-lg-3`}>
      <ul className={styles.navbarList}>
        <li>
       <Link href='../user-pages/community'>
       <p>
       Community
       </p>
       </Link>
       </li>
       <li>
       <Link href='../user-pages/profile'>
       <p>
       Profile
       </p>
       </Link>
       </li>
       <li>
       <Link href='../user-pages/cart'>
       <p>
       Cart
       </p>
       </Link>
       </li>
       <li>
       <Link href='../user-pages/addManga'>
       <p>
        Add Manga 
        </p>
       </Link>
       </li>
       </ul>
      </div>
      </div>
      
      
    
      
     
      <Link href={ "../pages/main/searchpage.jsx"}><button className="search-btn" > Search</button></Link>
      
      </div>
      </div>
      </>
    )
}
export default NavbarMain;
