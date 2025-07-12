import { css } from "@emotion/react";

export const todoItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
  height: 3rem;
`;

export const contentContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;

  & > svg {
    margin-right: 1rem;
  }
`;

export const checkedItem = css`
  color: #22b25d;
`;

export const unCheckedItem = css`
  color: #ff5c77;
`;

export const deleteIcon = css`
  font-size: 2rem;
  color: #ff5c77;
`;
