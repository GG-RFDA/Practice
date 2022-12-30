import React, {FC} from 'react';
import {ITodo} from "../types/types";
// Принцип работы здесь почти тот же самый, что и в файле UserItem
interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        /*
         * Помещаем id и название списка дел.
         * Как пропс передаём поле completed (если дело будет выполнено, то галочка будет стоять).
         */
        <div>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;