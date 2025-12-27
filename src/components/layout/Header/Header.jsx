import { useState } from "react"
import Logo from "../../../assets/logo.svg"
import './Header.css'


function Header(props){
const darkModeIcon = <svg  width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="4" fill="#1B1D1C"/>
<rect width="24" height="24" transform="translate(3 3)" fill="#1B1D1C"/>
<path opacity="0.3" d="M12.37 8.51C12.19 9.15798 12.0992 9.82748 12.1 10.5C12.1 14.58 15.42 17.9 19.5 17.9C20.18 17.9 20.85 17.81 21.49 17.63C20.9652 18.921 20.0674 20.0263 18.9114 20.8047C17.7554 21.5831 16.3936 21.9992 15 22C11.14 22 8 18.86 8 15C8 12.07 9.81 9.55 12.37 8.51Z" fill="white"/>
<path d="M12.37 8.51C12.19 9.15799 12.0992 9.82748 12.1 10.5C12.1 14.58 15.42 17.9 19.5 17.9C20.18 17.9 20.85 17.81 21.49 17.63C20.9652 18.921 20.0674 20.0263 18.9114 20.8047C17.7554 21.5831 16.3936 21.9992 15 22C11.14 22 8 18.86 8 15C8 12.07 9.81 9.55 12.37 8.51ZM15 6C13.22 6 11.4799 6.52784 9.99987 7.51678C8.51983 8.50571 7.36628 9.91132 6.68509 11.5559C6.0039 13.2004 5.82567 15.01 6.17294 16.7558C6.5202 18.5016 7.37737 20.1053 8.63604 21.364C9.89472 22.6226 11.4984 23.4798 13.2442 23.8271C14.99 24.1743 16.7996 23.9961 18.4442 23.3149C20.0887 22.6337 21.4943 21.4802 22.4832 20.0001C23.4722 18.5201 24 16.78 24 15C24 14.54 23.96 14.08 23.9 13.64C23.4003 14.3406 22.7401 14.9114 21.9746 15.3045C21.2091 15.6977 20.3606 15.9019 19.5 15.9C18.3552 15.9 17.24 15.5364 16.3152 14.8617C15.3904 14.1869 14.7038 13.2358 14.3545 12.1456C14.0052 11.0554 14.0112 9.88243 14.3717 8.79586C14.7321 7.70929 15.4284 6.76528 16.36 6.1C15.92 6.04 15.46 6 15 6Z" fill="white"/>
</svg>

const lightModeIcon = <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="4" fill="white"/>
<path opacity="0.16" d="M15 19C17.2091 19 19 17.2091 19 15C19 12.7909 17.2091 11 15 11C12.7909 11 11 12.7909 11 15C11 17.2091 12.7909 19 15 19Z" fill="black"/>
<path d="M15 19C17.2091 19 19 17.2091 19 15C19 12.7909 17.2091 11 15 11C12.7909 11 11 12.7909 11 15C11 17.2091 12.7909 19 15 19Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M23 15H24M6 15H7M15 23V24M15 6V7M20.657 20.657L21.364 21.364M8.636 8.636L9.343 9.343M9.343 20.657L8.636 21.364M21.364 8.636L20.657 9.343" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>


    return(





    <header>
    <div className="logo-wrapper">
      <img className="invert-color"
      src={Logo} alt="logo image" />
    </div>

    <button className="mode-toggle-btn"
    onClick={props.toggleTheme}
    >
    <span className='dark-mode-icon'> 
      {props.theme === "dark" && darkModeIcon}
      {props.theme === "light" && lightModeIcon}


   </span>
   <span className="caption .fw-normal">{props.theme} </span>
    </button>
  </header>
)
}

export default Header