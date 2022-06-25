import React from 'react'
import '../css/profileImage.css'

function ProfileImage(props) {
    if(props.img){
        return (
            <img src={props.img} className='profile-img'/>
          )
    }
}

export default ProfileImage