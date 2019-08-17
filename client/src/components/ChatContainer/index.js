import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  > div {
    position: relative;
    width: 100vw;
    max-width: 375px;
    min-height: 640px;
    padding: 10px;
    border: 1px solid #ddd;
  }
  form,
  div {
    box-sizing: border-box;
  }
  @media (max-width: 480px) {
    > div {
      max-width: 100%;
      min-height: 100vh;
      padding: 4px;
      border: none;
    }
  }
`;
