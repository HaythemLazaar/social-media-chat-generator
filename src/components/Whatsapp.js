import React from 'react'
import styled from 'styled-components'
import '../css/whatsapp.css'

function Whatsapp(props) {
    const ProfileImage = props.Img
  return (
    <div className='whatsapp'>
        <StatusBar>
            <ProfileImage />
            <Profile>
                <h2>{props.details.name}</h2>
                <h2>{props.details.status}</h2>
            </Profile>
        </StatusBar>
        <DisplayMessage>
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
        </DisplayMessage>
        <MessageBar />
    </div>
  )
}

export default Whatsapp

const StatusBar = styled.div`
    background-color: green;
    width: 200px;
    border-bottom: grey;
    display: flex;
    flex-direction: row;
`

const DisplayMessage = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`

const MessageBar = styled.div`
    background-color: green;
    width: 200px;
    height: 20px;
    border-top: grey;
`

const Profile = styled.div`
    margin-left: 20px;
`