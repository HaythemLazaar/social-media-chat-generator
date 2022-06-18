import React, { useState, useEffect} from 'react';
import MessagingApp from './components/MessagingApp';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import styled from 'styled-components';


function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'Hello',
      time: '11:30 AM',
      sendingUser: 1
    }
  ]);

  const [details, setDetails] = useState({
    name: 'Dan',
    status: 'Online'
  })

  const changeName = (e) => setDetails({name: e.target.value})
  const changeStatus = e => setDetails({status: e.target.value})

  return (
    <div className="App">
      <MessagingConfig>
        <ChatSettings>
          <h3>Name :</h3>
          <input type='text' value={details.name} onChange={changeName}/>
          <h3>Image :</h3>
          <ProfileImage />
          <h3>Online Status :</h3>
          <input type='text' value={details.status} onChange={changeStatus}/>
          <h3>Add Message Break :</h3>
          <input type='text' placeholder='TODAY'/>
          <button onClick>Add</button>
        </ChatSettings>
        <Chat>
          <ChatPerson>
            <h2>Person 1 Chat :</h2>
            <h2>Time :</h2>
            <input type='text' />
            <h2>Message :</h2>
            <textarea placeholder='Enter person 1 message here' />
            <button>Send Message</button>
          </ChatPerson>
          <ChatPerson>
            <h2>Person 2 Chat :</h2>
            <h2>Time :</h2>
            <input type='text' />
            <h2>Message :</h2>
            <textarea placeholder='Enter person 2 message here' />
            <button>Send Message</button>
          </ChatPerson>
        </Chat>
      </MessagingConfig>
        
      <MessagingApp messages={messages} details={details} appName={'w'}/>
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
  max-width: 30px;
  height: 30px; 
  background-color: green;
`

const MessagingConfig = styled.div`
`

const Chat = styled.div`
  display: flex;
  flex-direction: row;
`