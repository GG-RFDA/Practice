import {useEffect, useState} from "react";
// Функция принимает параметром reference - ссылку на какой-то элемент
export default function useHover(ref) {
    /*
     * Создаём логику наведения на квадрат.
     * Если пользователь навёл на квадрат, то будет true. Если польз-ль вышел за пределы квадрата, будет false.
     */
    const [isHovering, setHovering] = useState(false);
    // Создаём функции, меняющие состояния
    const on = () => setHovering(true);
    const off = () => setHovering(false);
    // Передаём функцию в качестве первого параметра. Вторым параметром передаём пустой массив зависимостей.
    useEffect(() => {
        /*
         * Чтобы не поймать ошибку, делаем проверку на существование поля current у reference.
         * Если поля нет, то прекращаем выполнение функции.
         */
        if (!ref.current) {
            return;
        }
        // Создаём переменную, в которую вынесем поле current
        const node = ref.current;
        /*
         * На ранее созданный элемент вешаем несколько слушателей событий:
         * mouseenter - когда пользователь навёл мышкой на элемент.
         * mousemove - когда пользователь ведёт мышкой по элементу.
         * mouseleave - когда пользователь вышел мышкой за пределы элемента.
         */
        node.addEventListener('mouseenter', on)
        node.addEventListener('mousemove', on)
        node.addEventListener('mouseleave', off)
        // Когда компонент демонтируется (см. жизненный цикл React-компонентов), слушатели необходимо удалить
        return function () {
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mousemove', on)
            node.removeEventListener('mouseleave', off)
        }

    }, [])

    return isHovering;
};
