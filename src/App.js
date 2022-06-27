import React, { useState, useEffect, createRef} from 'react';
import { useScreenshot, createFileName } from 'use-react-screenshot';
import MessagingApp from './components/MessagingApp';
import ProfileImage from './components/ProfileImage';
import './css/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import styled from 'styled-components';
import blank from './whatsapp-images/blank.png'


function App() {
  let message1 = {
    content: '',
    time: '',
    sendingUser: 1
  }

  let message2 = {
    content: '',
    time: '',
    sendingUser: 2,
    status: 'unseen'
  }

  let messageBreak = {
    content: 'TODAY',
    sendingUser: 3
  }

  let time = new Date()

  const [messages, setMessages] = useState([
    {
      content: 'TODAY',
      time: '00',
      sendingUser: 3
    },
    {
      content: 'Hello',
      time: '11:30',
      sendingUser: 1
    },
    {
      content: 'Hello',
      time: '11:30',
      sendingUser: 2,
      status: 'seen'
    }
  ]);

  const [details, setDetails] = useState({
    name: 'Dan',
    status: 'Online'
  })

  const [selectedImage, setSelectedImage] = useState(blank)

  const [lastMessageStatus, setLastMessageStatus] = useState('unseen')

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
    console.log(message.content)
    console.log(message.time)
    if(message.content != "" && message.time != ""){
      console.log('efsefes2')
      const newMessages = [...messages]
      message.status = lastMessageStatus
      newMessages.push(message)
      setMessages(newMessages)
      e.target.reset()
    }
  }
 
  useEffect( () => {
    console.log('Updated Messages !')
  }
  ,[messages])

  const ref = createRef()
  const [screenshot, takeScreenshot] = useScreenshot()

  const download = (image, { name = "chat", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const getImage = () => takeScreenshot(ref.current).then(download)

  return (
    <div className="App">
      <div className='messagingConfig'> 
        <ChatSettings>
          <h2>Chat Settings :</h2>
          <label>Name :</label>
          <input type='text' value={details.name} onChange={changeName} />
          <label>Image :</label>
          <div className='profile-image'>
            <ProfileImage img={selectedImage} />
          </div>
          <input type="file" name="profileImage" onChange={(event) => {
            if(event.target.files.length !== 0) {
              setSelectedImage(URL.createObjectURL(event.target.files[0]));
          }}}/>
          <label>Online Status :</label>
          <input type='text' value={details.status} onChange={changeStatus} />
          <label>Add Message Break :</label>
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
              <label>Message Status :</label><br />
              <input type="radio" id="unseen" name="status" value="unseen" onChange={e => setLastMessageStatus(e.target.value)} checked={lastMessageStatus == 'unseen'} /> <label for="unseen">Delivered</label>
              <input type="radio" id="seen" name="status" value="seen" onChange={e => setLastMessageStatus(e.target.value)} checked={lastMessageStatus == 'seen'} /> <label for="seen">Seen</label><br/>
              <label>Time :</label><br />
              <input type='text' placeholder={time.getHours() + ':'+time.getMinutes()} onChange={e => message2.time = e.target.value} /><br />
              <label>Message :</label><br />
              <textarea placeholder='Enter person 2 message here' onChange={e => message2.content = e.target.value} /><br />
              <input type='submit' value='Send Message' />
            </form>
          </ChatPerson>
        </Chat>
      </div>
      <div className='preview'>
        <div ref={ref}>
          <MessagingApp messages={messages} details={details} appName={'w'} img={selectedImage}/>
        </div>
        <button className='screenshot-button' onClick={getImage}>Take Screenshot</button>
      </div>
    </div>
  );
}

export default App;


const ChatPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #FFE7D6;
  padding: 10px;
  border-radius: 12px;
`

const ChatSettings = styled.div`
  display: flex;
  flex-direction: column;
`

const MessagingConfig = styled.div`
  max-width: 800px;
`

const Chat = styled.div`
  display: flex;
  flex-direction: row;
`