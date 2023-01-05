import React, {useEffect, useRef, useState} from 'react';
import useScroll from "../hooks/useScroll";

const List = () => {
    // Создаём состояние списка дел
    const [todos, setTodos] = useState([])
    /*
     * Создаём состояние динамической пагинации.
     * В состоянии храним номер текущей страницы.
     */
    const [page, setPage] = useState(1)
    // Указываем ограниченное кол-во записей
    const limit = 20;
    // Создаём для корневого блока div ссылки
    const parentRef = useRef();
    const childRef = useRef();
    /*
     * Воспользуемся созданным в файле useScroll хуком.
     * Первым и вторым параметром в хук передаём ссылки, а третьим - callback, в котором вызываем функцию fetchTodos.
     */
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));
    /*
     * Создаём функцию с запросом.
     * В качестве параметров в функцию передаём page и limit.
     * Также, в запрос передаём page и limit.
     */
    function fetchTodos (page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                /*
                 * В состояние будем записывать новый массив, в котором происходит следующее:
                 * Разворачивается старый массив;
                 * Затем разворачивается то, что получили от сервера.
                 */
                setTodos(prev => [...prev, ...json]);
                // Изменяем страницу
                setPage(prev => prev + 1)
            })
    }

    return (
        /*
         * При помощи функции map итерируемся.
         * Для каждого элемента итерации отрисовываем блок div.
         * Задаём внутри блока div стили.
         * Блокам div указываем reference.
         * Родителем является элемент, у которого есть полоса прокрутки.
         * Ребёнком является элемент, который должен появиться в области видимости браузера.
         */
        <div ref={parentRef} style = {{height: '80vh', overflow: 'auto'}}>
            {todos.map(todo =>
                <div key= {todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
            <div ref={childRef} style ={{height: 20, background: 'green'}}/>
        </div>
    );
};

export default List;