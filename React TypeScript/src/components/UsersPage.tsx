import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
// Импортируем axios для запросов к серверу
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

const UsersPage: FC = () => {
    /*
     * Создаем состояние при помощи хука useState.
     * По умолчанию будет пустой массив.
     * Для определения типа, который должен быть внутри состояния, указываем дженерик и передаём туда массив интерфейса.
     * После того, как был выполнен предыдущий шаг, поместить внутрь состояния какой-то другой тип не сможем.
     */
    const [users, setUsers] = useState<IUser[]>([])
    // Для асинхронного запроса используем хук useEffect, чтобы при первом рендере страницы сразу получить пользоват-й.
    useEffect(() => {
        fetchUsers()
    },[])
    // Создаём функцию, с помощью которой будем получать пользователей
    async function fetchUsers() {
        // Для отлавливания ошибок используем блок try...catch
        try {
            /*
             * Создаём GET-запрос.
             * Указываем, что в ответе на запрос ожидаем массив пользователей (IUser[]).
             * Передаём URL с JSON Placeholder.
             */
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            // Результаты запроса помещаем в состояние users
            setUsers(response.data)
        } catch (e) {
            // Если ошибка произошла, выводим ее в alert
            alert(e)
        }
    }

    return (
        // Создаём список пользователей
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />
    );
};

export default UsersPage;