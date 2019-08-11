import React, { useRef, useEffect } from 'react';
import Loading from '../Loading';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const Message = ({ text, name, className }) => {
  return (
    <div>
      <div className={className}>
        <b>{name}</b>
        <br />
        {text}
      </div>
    </div>
  );
};

const Messages = ({ messages = [], className }) => {
  const messagesEnd = useRef(null);

  if (messages.length < 1) {
    return <Loading />;
  }
  const scrollToBottom = () => {
    if (!messagesEnd) {
      return;
    }
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(function() {
    scrollToBottom();
  });

  return (
    <div className={className}>
      <Scrollbars style={{ height: '480px', width: 'calc(100% - 0.8em)' }}>
        {messages.map((message, i) => (
          <StyledMessage key={i} {...message} even={i % 2 === 0} />
        ))}
        <div ref={messagesEnd} />
      </Scrollbars>
    </div>
  );
};

const StyledMessage = styled(Message)`
  background-color: ${props => (props.even ? '#ffe9c0' : '#e3e3e9')};
  padding: 0.4rem;
  border-radius: 0.4rem;
  margin: 10px 0;
  width: 80%;
  margin-left: ${props => (props.even ? '20%' : '0')};
  margin-right: ${props => (!props.even ? '20%' : '0')};
`;

const StyledMessages = styled(Messages)`
  box-sizing: border-box;
  > div {
    overflow: hidden;
    box-sizing: border-box;
  }
`;

export default StyledMessages;
