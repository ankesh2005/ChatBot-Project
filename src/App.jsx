import { useState,useEffect} from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import {ChatMessages} from './components/ChatMessages';
import './App.css'



function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: 'hello ChatBot', sender: 'user', id: 'id1' },
    { message: 'Hello! How can I help you?', sender: 'robot', id: 'id2' },
    { message: 'can you get me todays date?', sender: 'user', id: 'id3' },
    { message: 'today is september 27', sender: 'robot', id: 'id4' }
]);

useEffect(()=>{
  Chatbot.addResponses({
    'goodbye':'Goodbye. Have a great day!',
    'give me a unique id':function(){
      return `sure! here's a unique ID:${crypto.randomUUID()}`;
    }
  })
},[]);

return (
  <div className="app-container">
    
    <ChatMessages
      chatMessages={chatMessages}
    />
    <ChatInput 
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
    />
  </div>
);
}


export default App
