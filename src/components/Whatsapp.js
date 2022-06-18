import React from 'react'
import styled from 'styled-components'


function Whatsapp(props) {
  return (
    <div className='whatsApp'>
        <StatusBar>
            <h2>{props.details.name}</h2>
        </StatusBar>
        <DisplayMessage>
            <ul>
                {props.messages.map((message) => (
                    <li key={message.id}>
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