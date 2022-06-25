import React from 'react'
import styled from 'styled-components'
import '../css/whatsapp.css'
import ProfileImage from './ProfileImage'
import topLeftImage from '../whatsapp-images/whatsapp_iphone_top_left.png'
import topRightImage from '../whatsapp-images/whatsapp_iphone_top_right.png'
import bottomFooter from '../whatsapp-images/whatsapp_iphone_footer.png'
import blank from '../whatsapp-images/blank.png'

function Whatsapp(props) {
  return (
    <div className='whatsapp'>
        <StatusBar>
            <div className='top-left'>
                <img src={topLeftImage} />
                <div className='profile-image'>
                    <ProfileImage img={props.img}/> 
                </div>
                <Profile>
                    <h5>{props.details.name}</h5>
                    <h6>{props.details.status}</h6>
                </Profile>
            </div>
            <img src={topRightImage} />
        </StatusBar>
        <div className='messages-display'>
            <ul>
                {props.messages.map((message, i) => (
                    message.sendingUser == 3 ?
                        <li key={i} className={"user" + message.sendingUser}>
                            <div>{message.content}</div>
                        </li> :  
                        <li key={i} className={"user" + message.sendingUser}>
                            <div>{message.content}</div>
                            <div>{message.time}</div>
                        </li>
                ))}
            </ul>
        </div>
        <MessageBar>
            <img src={bottomFooter} />
        </MessageBar>
    </div>
  )
}

export default Whatsapp

const StatusBar = styled.div`
    background-color: #f7f7f7;
    width: 425px;
    height: 50px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1.5px solid #c4c4c4c7;
`

const MessageBar = styled.div`
    width: 425px;
    height: 20px;
    border-top: grey;
    img{
        max-width: 425px;
    }
`

const Profile = styled.div`
    margin-left: 5px;
    h5{
        font-size: 15px;
        margin: 0;
        color: #333333;
    }
    h6{
        font-size: 9px;
        margin: 0;
        color: #bfc5cb;
    }
`