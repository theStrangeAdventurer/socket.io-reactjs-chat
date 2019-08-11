import React, { Fragment, useState, useEffect } from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import 'babel-polyfill';

import C from './consts';
import E from './events';
import Messages from './components/Messages';
import Form from './components/Form';
import UsersBar from './components/UsersBar';
import ChatContainer from './components/ChatContainer';
import OnlineUserBar from './components/OnlineUserBar';

const socket = io.connect(C.SOCKET_URL);

const App = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Здарова, пацаны, как дела?',
      name: 'Эрик Картман'
    },
    {
      text: 'Вы что не помните, меня вчера убили, мать вашу?',
      name: 'Кенни Маккормик'
    }
  ]);

  const [user, setUser] = useState({
    // id: 1,
    // name: 'Эрик Картман',
    // nickname: '',
    // available: false,
    // avatar: '1.jpg'
  });

  useEffect(function() {
    socket.on(E.ADD_MESSAGE_FROM_SERVER, ({ message }) =>
      setMessages(messages => [...messages, message])
    );
  }, []);

  const chooseUserHandler = ({ id, name, nickname, avatar }) => {
    socket.emit(E.CHOOSE_USER_FROM_CLIENT, { id });
    setUser({ name, nickname, avatar });
  };

  const addMessageHandler = message => {
    const newMessage = {
      ...user,
      text: message
    };
    socket.emit(E.ADD_MESSAGE_FROM_CLIENT, { message: newMessage });
    setMessages(messages => [...messages, newMessage]);
  };
  return (
    <div>
      {user.name ? (
        <Fragment>
          <OnlineUserBar user={user} />
          <Messages messages={messages} />
          <Form onSubmit={addMessageHandler} />
        </Fragment>
      ) : (
        <Fragment>
          <h3>Выберите персонажа чтобы начать общение</h3>
          <UsersBar socket={socket} onChoose={chooseUserHandler} />
        </Fragment>
      )}
    </div>
  );
};

render(
  <ChatContainer>
    <App />
  </ChatContainer>,
  document.getElementById('root')
);
