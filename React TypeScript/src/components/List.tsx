import React, {FC} from 'react';

// Указываем свой дженерик T (это может быть абсолютно любой тип)
interface ListProps<T> {
    // На входе в компонент ожидаем массив каких-то элементов, и они могут быть любого типа
    items: T[];
    // Вторым пропсом компонент будет ожидать пропс, являющийся компонентом, который необходимо отрисовать
    renderItem: (item: T) => React.ReactNode
}
// В качестве параметров указываем пропсы
export default function List<T>(props: ListProps<T>){
    return (
        /*
         * Пробегаемся по item, которые достаем из пропсов.
         * В качестве колбэка передаем в функцию map renderItem.
        */
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}