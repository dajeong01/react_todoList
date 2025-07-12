import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const todoContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 80vh;

  & > h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 500;
  }
`;

export const inputContainer = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > input {
    box-sizing: border-box;
    border-radius: 0.5rem;
    padding-left: 1rem;
    width: 90%;
    height: 4rem;
  }

  & > input::placeholder {
    font-size: 2rem;
  }

  & > div > svg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%);
    font-size: 4rem;
    color: #06cc80;
  }
`;

export const todoList = css`
  box-sizing: border-box;
  border: 0.1rem solid #000000;
  border-radius: 0.5rem;
  margin: 2rem 1rem;
  width: 90%;
  flex-grow: 1;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
