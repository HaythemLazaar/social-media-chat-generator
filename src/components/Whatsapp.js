import React from 'react'
import styled from 'styled-components'
import '../css/whatsapp.css'

function Whatsapp(props) {
  return (
    <div className='whatsapp'>
        <StatusBar>
            <h2>{props.details.name}</h2>
            <h2>{props.details.status}</h2>
        </StatusBar>
        <DisplayMessage>
            <ul>
                {props.messages.map((message, i) => (
                    message.sendingUser == 3 ?
                        <li key={i} className={"user" + message.sendingUser}>
                            <div>{message.content} Break</div>
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
    height: 20px;
    border-bottom: grey;
`

const DisplayMessage = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 200px;
`

const MessageBar = styled.div`
    background-color: green;
    width: 200px;
    height: 20px;
    border-top: grey;
`