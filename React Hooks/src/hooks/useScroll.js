import {useEffect, useRef} from "react";
/*
 * Создаём хук, принимающий следующие параметры:
 * reference родителя;
 * reference ребёнка;
 * callback, который будет вызываться в тот момент, когда пользователь дошёл до края страницы.
 */
export default function useScroll(parentRef, childRef, callback) {
    // observer - это некоторая функция, которая будет отслеживать появления элемента в зоне видимости браузера.
    const observer = useRef();
    /*
     * Передаём в хук callback и массив зависимостей.
     * В массив зависимостей передаём callback.
     * Массив зависимостей будет вызываться в том случае, если callback изменился.
     */
    useEffect(() => {
        const options = {
            // root - это объект, который необходимо отслеживать
            root: parentRef.current,
            rootMargin: '0px',
            /*
             * Значение, которое сообщает о том, насколько должны пересечь элемент.
             * Если равно 0, то callback вызовется в случае, если дочерний элемент только появился в зоне видимости.
             * Если равно 1, то callback вызовется в случае, если дочерний элемент полностью появился в зоне видимости.
             */
            threshold: 0
        }
        /*
         * Создаём объект observer и помещаем в поле current.
         * Первым параметром передаём callback.
         * Вторым параметром паредаём опции.
         * Т.к. можем отслеживать сразу несколько элементов, то callback принимает массив.
         * Поскольку следим только за одним элементом, то "вытаскиваем" target.
         */
        observer.current = new IntersectionObserver(([target]) => {
            // Поле примет значение true, если элемент появится в зоне видимости
            if (target.isIntersecting) {
               console.log('intersected')
               callback()
            }
        }, options)
        // Вызываем функцию observe и передаём дочерний элемент, который достаём из поля current
        observer.current.observe(childRef.current)
        // Когда компонент демонтируется, слежение необходимо отключить
        return function () {
            // Вызываем функцию unobserve
            observer.current.unobserve(childRef.current)
        };
    }, [callback])
};