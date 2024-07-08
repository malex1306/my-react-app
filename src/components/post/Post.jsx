import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img 
      className='postImg'
      src={`${process.env.PUBLIC_URL}/BOOKS.jpg`} 
      alt="BOOKS" 
      />
      <div className="postInfo">
        <div className="postCat">
            <span className="postcat">New Books</span>
            <span className="postcat">Hyped Authors</span>
        </div>
        <span className="postTitle">NEWS</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>
        “Das Geheimnis der alten Villa” von Anna Schwarz <hr />
         Tauchen Sie ein in eine fesselnde Geschichte voller Geheimnisse und unerwarteter Wendungen.
         Anna Schwarz entführt ihre Leser in eine verlassene Villa, die dunkle Geheimnisse birgt. 
         Ein Muss für alle Liebhaber von spannenden Thrillern.
      </p>
    </div>
  )
}
