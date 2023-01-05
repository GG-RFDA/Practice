import React, {useCallback, useRef, useState} from 'react';
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
// Импортируем axios в компонент
import axios from "axios";
import useRequest from "./hooks/useRequest";
function App() {
    // Вызываем хук и передаём пераметром функцию fetchTodos
    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos() {
        /*
         * Вызываем функцию get.
         * Добавим пару символов в запрос, чтобы вызвать сообщение об ошибке (это нужно для проверки).
         */
        return axios.get(`https://jsonplaceholder.typicode.com/todssos`)
    }
    // Создаём проверку (если loading равен true, то возвращаем данное сообщение)
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    // Создаём проверку (если error не пустой, то выводим сообщение об ошибке)
    if (error) {
        return <h1>Произошла ошибка при загрузке данных</h1>
    }

    return (
        // Добавляем проверку (если список дел не null, то пробегаемся по нему при помощи функции map)
        <div>
            {todos && todos.map(todo =>
                <div key= {todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
        </div>
    );
}

export default App;