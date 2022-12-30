import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    /*
     * Делаем input управляемым, объявляя состояние
     * Создаём состояние, которое будет true, если элемент занесён в квадрат, и false, если за пределы квадрата вышли.
     * Состояние будет типа boolean
     */
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    /*
     * Поскольку работаем со слушателем событий onChange, то используем тип ChangeEvent
     * В качестве дженерика указываем HTMLInputElement, т.к. работаем с input
     * В поле target находятся только те поля, которые имеет только input
     */
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    /*
     * Для всех событий, связанных с мышью, указываем тип MouseEvent
     * В качестве дженерика указываем HTMLButtonElement, т.к. работаем с input
     * Выводим в логе значение из неуправляемого input
     * Используем оператор ?, т.к. current может быть null
     */
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }
    /*
     * В качестве дженерика указываем HTMLDivElement, поскольку работаем с блоком div
     * В логе выводим информацию о том, что начали перемещать элемент
     */
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }
    /*
     * Для предотвращения действия браузера по умолчанию вызываем функцию preventDefault.
     * Когда перенесли первый квадрат на второй, состояние будет true.
     */
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
       e.preventDefault()
        setIsDrag(true)
    }
    /*
     * Когда вышли за пределы квадрата, состояние будет false
     */
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    /*
     * В логе выводим информацию о том, что дропнули элемент
     */
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

    return (
        /*
         * Реализуем слушатель события onChange для того, чтобы отслеживать изменения в input.
         * В качестве примера в кнопку добавлен случайный текст.
         * Реализуем слушатель событий onDrag для перемещения карточки.
         * Добавляем пропс draggable, чтобы можно было передвигать карточку.
         * Реализуем слушатель событий onDragLeave (когда вышли за пределы карточки).
         * Реализуем слушатель событий onDragOver (когда находимся внутри карточки).
         * Задаём проверку, чтобы квадрат менял цвет на синий в случае перемещения или оставался красным.
         * Для примера создаём управляемый и неуправляемый компоненты.
         */
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"/>
            <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>asfasf</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;