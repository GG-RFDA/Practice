import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
// Поскольку id достается из строки запроса, то необходим хук useParams
import {useParams, useNavigate} from "react-router-dom";

// Создаём интерфейс, в котором описываем все параметры, которые ожидаем на странице
interface UserItemPageParams {
    id: string;
}

const UserItemPage:FC = () => {
       /*
        * Поскольку состояние хранит теперь одного пользователя, то указываем просто user.
        * Указываем, что пользователь может быть пустым.
        * Получаем параметры с помощью хука.
        */
        const [user, setUser] = useState<IUser | null>(null)
        const params = useParams()


        useEffect(() => {
            fetchUser()
        },[])

        async function fetchUser() {
            try {
                // Меняем URL, добавляя id пользователя
                const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
                setUser(response.data)
            } catch (e) {
                alert(e)
            }
        }

    return (
        /*
         * Создаём кнопку Back, возвращающая обратно к списку пользователей.
         * Создаём заголовок, в котором будет написано, что это страница какого-то пользователя.
         * Внутри блока div указываем информацию о пользователе: email, адрес, улица и почтовый индекс.
         */
        <div>
            <button>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;