import React from 'react'
import styled from 'styled-components'


function Whatsapp() {
  return (
    <div className='whatsApp'>
        <StatusBar />
        <DisplayMessage>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <div>{message.content}</div>
                        <div>{message.createdAt}</div>
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
    background-color: black;
    height: 200px;
    width: 200px;
`

const MessageBar = styled.div`
    background-color: green;
    width: 200px;
    height: 20px;
    border-top: grey;
`