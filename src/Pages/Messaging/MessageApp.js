import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed'
import './MessageApp.css';
import SignUpPage from '../SignUpPage'



const projectID = '3faf9385-a42e-487e-93cc-53f4d5ca1b65';

const MessageApp = () => {
  

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.email}
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );

};

// infinite scroll, logout, more customizations...

export default MessageApp;