import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ onSubmit = f => f, className }) => {
  const [message, setMessage] = useState('');
  const messageHandle = e => {
    const value = e.target.value;
    setMessage(value);
  };
  const submitHandle = e => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };
  return (
    <form onSubmit={submitHandle} className={className}>
      <input type="text" value={message} onChange={messageHandle} />
      <button type="submit">Отправить</button>
    </form>
  );
};

const styledForm = styled(Form)`
  padding: 0.4em;
  background: #fafafa;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto 120px;
  grid-gap: 10px;
  > span {
    display: inline-block;
    line-height: 32px;
    width: 100%;
    font-weight: 700;
  }
  > button[type='submit'] {
    background: red;
    color: #fff;
    height: 32px;
    border-radius: 0;
    font-weight: 700;
    border-width: unset;
    border-style: unset;
    &:hover {
      background: darkred;
    }
  }
  > input[type='text'],
  > button[type='submit'] {
    border: 1px solid #d2d2d2;
    height: 100%;
    line-height: 32px;
    font-size: 16px;
    padding: 0;
  }
  > input[type='text'] {
    padding-left: 10px;
  }
  > button[type='submit'] {
    border: 1px solid red;
  }
`;

export default styledForm;
