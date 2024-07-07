import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img 
      className='postImg'
      src={`${process.env.PUBLIC_URL}/posts1.jpg`} 
      alt="posts1" 
      />
      <div className="postInfo">
        <div className="postcats">
            <span className="postcat">New Books</span>
            <span className="postcat">Hyped Authors</span>
        </div>
        <span className="postTitle">NEWS</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  )
}
