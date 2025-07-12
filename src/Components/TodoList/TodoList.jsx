/** @jsxImportSource @emotion/react */
import { MdAddBox } from "react-icons/md";
import * as s from "./styles";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleOnChange = useCallback((e) => setValue(e.target.value), []);

  const nextId = useRef(1);

  const handleOnSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    if (value.trim() === "") {
      return;
    }
    setTodos(todos.concat(todo));
    nextId.current++;
    setValue("");
  };

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.keyCode === 13) {
        handleOnSubmit(value);
      }
    };
  });

  const handleOnRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleOnToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div css={s.layout}>
      <div css={s.todoContainer}>
        <h1>일정관리</h1>
        <div css={s.inputContainer}>
          <input
            type="text"
            placeholder="할 일을 입력하세요."
            onChange={handleOnChange}
            value={value}
          />
          <div onClick={() => handleOnSubmit(value)}>
            <MdAddBox />
          </div>
        </div>
        <div css={s.todoList}>
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onRemove={handleOnRemove}
              onToggle={handleOnToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
