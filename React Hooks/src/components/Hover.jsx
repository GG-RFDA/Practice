import React, {useRef} from 'react';
import useHover from "../hooks/useHover";

const Hover = () => {
    // Создаём reference при помощи хука
    const ref = useRef();
    /*
     * Используем созданным хуком useHover.
     * В качестве параметра передаём reference.
     */
    const isHovering = useHover(ref);
    // Выводим в логе то, что хук возвращает
    console.log(isHovering)

    return (
        /*
         * На корневой блок div пишем стилизацию.
         * Передаём ref в необходимый элемент.
         * Вешаем на кнопку слушатель событий.
         * Создаём условие, где в случае наведения на элемент его цвет меняется.
         */
        <div ref={ref} style={{width: 300, height: 300, background: isHovering ? 'red' : 'green'}}>
            <button onClick={() => console.log(ref.current)}>Click me</button>
        </div>
    );
};

export default Hover;