import styled from 'styled-components';

export default styled.div`
    position: fixed;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em
    font-family: sans-serif;
    width: 100%;
    height: 100%;
    max-width: 480px;
    max-height: 720px;
    border: 1px solid #ddd;
    form,
    div {
        box-sizing: border-box;
    }
    @media (max-width: 480px) {
        border: 1px solid transparent;
        position: static;
        width: 100%;
        height: 100%;
        transform: unset;
        padding: .4em;
        max-width: 375px;
        max-height: calc(100% - 32px);
    }
`;
