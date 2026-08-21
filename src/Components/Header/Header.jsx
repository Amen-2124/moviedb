import React, { useEffect } from 'react'
import { useState } from 'react'
import logo from '../../assets/image/logo.png'
import {Link} from 'react-router-dom'
import {Search, Bell, User, ChevronDown} from 'lucide-react'
import styles from './Header.module.css'
function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

   const [isScrolled, setIsScrolled] = useState(false)
  
useEffect( ()=>{
  const handleScroll = () =>{
    if(window.scrollY >50){
      setIsScrolled(true)
    }else{
      setIsScrolled(false)
    }
  }
  window.addEventListener('scroll', handleScroll);
  return()=> window.removeEventListener('scroll', handleScroll)
},[])

  return (
    <header className ={`${styles.Header} ${isScrolled? styles.Scrolled :""}`}>
        <div className ={styles.container}>
            {/* logo */}
            <img   className ={styles.logo} src={logo} alt="" />

            {/* navigation link */}
           <nav className={styles.nav}>
            <Link className={styles.navLink} to="/">Home</Link>
            <Link className={styles.navLink} to="/tv-shows">TV Shows</Link>
            <Link className={styles.navLink} to="/movies">Movies</Link>
            <Link className={styles.navLink} to="/latest">New & Popular</Link> 
            <Link className={styles.navLink} to="/my-list">My List</Link>
            <Link className={styles.navLink} to="/languages">Browse by Languages</Link>
          </nav>
            {/* right side section */}
            <div className={styles.rightSection}>
               {/* search */}
              
              <div className={styles.SearchContainer}>
                <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={styles.SearchButton}>
                  <Search size={20}/>
                </button>

                {
                  isSearchOpen && ( <input type='text' placeholder = 'Movie Title' className={styles.searchInput}/>)
                }

              </div>
               

              
                {/* notification icon */}
               <button className={styles.iconButton}>  
                
                 <Bell size={20}/>
                 <span className={styles.notificationBage}>4</span>
</button>
{/* profile */}
             <div className ={styles.profileContainer}>
            
             
              <button 
                onClick={() =>  setIsProfileOpen(!isProfileOpen)}
              className ={styles.profileButton}>
                <div  className ={styles.profileUser}>
                  {/* user icon */}
                <User size={20}/>
                </div>
                {/* dropdown icon */}
                <ChevronDown size={20}/>
              </button>
              {
                 isProfileOpen && (
                  <div className ={styles.profileMenu}>
                   <Link  className ={styles.profileMenuItem}> Account</Link>
                    <Link className ={styles.profileMenuItem}> help Center </Link>
                    <hr  className ={styles.profileMenuDivider}/>
                     <button className ={styles.profileMenuItem}> Sign out</button>
                  </div>
                 )
              }

             </div>
            </div>
        </div>
    </header>
  )
}

export default Header