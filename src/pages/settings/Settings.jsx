import React from 'react'
import "./settings.css"
import SideBar from "../../components/sidebar/SideBar";

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle"> Update your account</span>
            <span className="settingsDeleteTitle"> Delete account</span>
          </div>
          <form className="settingsForm">
            <label>Profile picture</label>
            <div className="settingsPP">
              <img 
              src={`${process.env.PUBLIC_URL}/Setting.jpg`} 
              alt="Setting" 
              />
              <label htmlFor="fileImput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileImput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Tascha" />
            <label>Email</label>
            <input type="email" placeholder="tascha@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <SideBar/>
      
    </div>
  )
}
