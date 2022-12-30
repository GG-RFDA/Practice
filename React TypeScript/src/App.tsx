import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import UserItem from "./components/UserItem";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
// Импортируем необходимые компоненты из react-router-dom для навигации web-приложения
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {


    return (
        /*
         * Оборачиваем web-приложение в BrowserRouter.
         * Создаём навигационную панель, в которую добавляем 2 ссылки NavLink.
         * Создаём 2 обычных пути: первый вызывает страницу UsersPage, второй вызывает страницу TodosPage
         * Создаём 2 динамических пути с id.
         * Передаём URL с JSON Placeholder.
         */
        <BrowserRouter>
        <div>
            <div>
                <NavLink to={"/users"}>Пользователи</NavLink>
                <NavLink to={"/todos"}>Список дел</NavLink>
            </div>
            <Routes>
              <Route>
                  <Route path="/users" element ={<UsersPage />} />
                  <Route path="/todos" element ={<TodosPage/>} />
                  <Route path="/users/:id" element ={<UserItemPage/>} />
                  <Route path="/todos/:id" element ={<TodoItemPage/>} />
              </Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
};

export default App;