/** @jsxImportSource @emotion/react */
import { FaRegTrashAlt } from "react-icons/fa";
import * as s from "./styles";
import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export default function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;
  return (
    <div css={s.todoItem}>
      <div css={s.contentContainer} onClick={() => onToggle(id)}>
        {checked ? (
          <ImCheckboxChecked css={s.checkedItem} />
        ) : (
          <ImCheckboxUnchecked css={s.unCheckedItem} />
        )}
        <h1>{text}</h1>
      </div>
      <div css={s.deleteIcon} onClick={() => onRemove(id)}>
        <FaRegTrashAlt />
      </div>
    </div>
  );
}
