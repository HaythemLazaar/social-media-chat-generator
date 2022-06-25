import React, { useState, useEffect} from 'react';
import MessagingApp from './components/MessagingApp';
import './css/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import styled from 'styled-components';


function App() {
  let message1 = {
    content: '',
    time: '',
    sendingUser: 1
  }

  let message2 = {
    content: '',
    time: '',
    sendingUser: 2
  }

  let messageBreak = {
    content: 'TODAY',
    time: '00',
    sendingUser: 3
  }

  let time = new Date()

  const [messages, setMessages] = useState([
    {
      content: 'Hello',
      time: '11:30',
      sendingUser: 1
    },
    {
      content: 'Hello',
      time: '11:30',
      sendingUser: 2
    }
  ]);

  const [details, setDetails] = useState({
    name: 'Dan',
    status: 'Online'
  })

  const changeName = (e) => {
    const newDetails = {...details}
    newDetails.name = e.target.value
    setDetails(newDetails)
  }
  
  const changeStatus = (e) => {
    const newDetails = {...details}
    newDetails.status = e.target.value
    setDetails(newDetails)
  }

  const addMessage = (e,message) => {
    e.preventDefault();
    if(message.content != "" && message.time != ""){
      const newMessages = [...messages]
      newMessages.push(message)
      setMessages(newMessages)
      e.target.reset()
    }
  }

  useEffect( () => {
    console.log('Updated Messages !')
  }
  ,[messages])


  return (
    <div className="App">
      <div className='MessagingConfig'>
        <ChatSettings>
          <h3>Name :</h3>
          <input type='text' value={details.name} onChange={changeName} />
          <h3>Image :</h3>
          <ProfileImage />
          <h3>Online Status :</h3>
          <input type='text' value={details.status} onChange={changeStatus} />
          <h3>Add Message Break :</h3>
          <input type='text' placeholder='TODAY' onChange={e => messageBreak.content = e.target.value}/>
          <button onClick={e => addMessage(e,messageBreak)}>Add</button>
        </ChatSettings>
        <Chat>
          <ChatPerson>
            <form onSubmit={e => addMessage(e,message1)}>
              <h2>Person 1 Chat :</h2>
              <label>Time :</label><br />
              <input type='text' placeholder={time.getHours() + ':' + time.getMinutes()} onChange={e => message1.time = e.target.value} /><br />
              <label>Message :</label><br />
              <textarea placeholder='Enter person 1 message here' onChange={e => message1.content = e.target.value} /><br />
              <input type='submit' value='Send Message' />
            </form>
          </ChatPerson>
          <ChatPerson>
            <form onSubmit={e => addMessage(e,message2)}>
              <h2>Person 2 Chat :</h2>
              <label>Time :</label><br />
              <input type='text' placeholder={time.getHours() + ':'+time.getMinutes()} onChange={e => message2.time = e.target.value} /><br />
              <label>Message :</label><br />
              <textarea placeholder='Enter person 2 message here' onChange={e => message2.content = e.target.value} /><br />
              <input type='submit' value='Send Message' />
            </form>
          </ChatPerson>
        </Chat>
      </div>
        
      <MessagingApp messages={messages} details={details} appName={'w'} Img={ProfileImage}/>
    </div>
  );
}

export default App;


const ChatPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const ChatSettings = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 30px; 
  background-color: grey;
`

const MessagingConfig = styled.div`
  max-width: 800px;
`

const Chat = styled.div`
  display: flex;
  flex-direction: row;
`