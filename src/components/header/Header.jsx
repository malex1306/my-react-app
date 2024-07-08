import React from "react";
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Mommy's</span>
        <span className="headerTitleLg">Bookblog</span>
      </div>
      <img 
        className="headerImg"
        src={`${process.env.PUBLIC_URL}/Bücher.jpg`} 
        alt="Bücher" 
      />  
    </div>
  )
}
