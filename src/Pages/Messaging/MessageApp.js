import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed'
// import LoginForm from './Components/LoginForm';
import './MessageApp.css';
import SignUpPage from '../SignUpPage'



const projectID = '3faf9385-a42e-487e-93cc-53f4d5ca1b65';

const MessageApp = () => {
  //if (!localStorage.getItem('username')) return <LoginForm />;
  // const current_username = localStorage.email.split("@")[0]

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.email}
      //userName={localStorage.getItem('username')}
      userSecret="123"
      //userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );

};

// infinite scroll, logout, more customizations...

export default MessageApp;