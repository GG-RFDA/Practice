import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo, IUser} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodosPage: FC = () => {
    /*
     * Создаём состояние, в которое будем помещать список дел.
     * Принцип работы здесь тот же самый, что и в файле UsersPage.
     */
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    },[])


    async function fetchTodos() {
        try {
            // Передаём URL с JSON Placeholder, где указываем ограниченное кол-во записей, т.к. изначально их много.
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;