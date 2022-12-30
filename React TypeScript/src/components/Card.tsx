// Импортируем тип FC из пакета React
import React, {FC, useState} from 'react';

// Используем перечисление (enum), в котором описываем, что мы ожидаем на входе в пропс variant
export enum CardVariant {
    // Карточка обведена рамкой
    outlined='outlined',
    // Карточка будет залита определённым цветом заднего фона
    primary = 'primary'
}
// Задаём интерфейс, в котором описываем, какие пропсы будет ожидать компонент
interface CardProps {
    // Задаем необязательные типы пропсов width, height и children
    width?: string;
    height?: string;
    // В пропсах указываем, что мы ожидаем что-то из указанного перечисления выше
    variant: CardVariant;
   /*
    * Передаём функцию нажатия на карточку в интерфейсе.
    * Функция принимает параметром число.
    */
    onClick: (num: number) => void;
    children?: React.ReactNode;
}
   /*
    * Используем FunctionComponent (FC) для типизации функционального компонента.
    * Указываем CardProps в обобщённом типе (дженерике).
    */
const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         // Добавляем функцию как пропс в компонент
         onClick,
         children
    }) => {
    /*
     * Создаём внутри компонента состояние с помощью хука useState.
     * По умолчанию состояние равно нулю.
     */
     const [state, setState] = useState(0);
     return (
        <div style={{width, height,
            /*
               Задаём условие, в котором пропс variant может быть равен outlined, и рамка будет толщиной в 1 пиксель
               серого цвета. В обратном случае рамка будет удалена.
            */
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            /*
               Задаём условие, в котором пропс variant может быть равен primary, и цвет заднего фона будет светло-серым.
               В обратном случае передаётся пустое значение.
            */
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
        /*
         * Используем браузерное событие onClick.
         * Передаём стрелочную функцию.
         * В функцию передаём число.
         */
        onClick={() => onClick(state)}
        >
        {children}
        </div>
   );
};

export default Card;