import {useCallback, useRef} from "react";
/*
 * Создаём хук.
 * Первым параметром принимает callback, а вторым параметром - задержку, после которой callback должен вызываться.
 */
export default function useDebounce(callback, delay) {
    // Создаём переменную timer и инициализируем при помощи хука useRef
    const timer = useRef();
    /*
     * debouncedCallback будет вызываться только один раз.
     * Первым параметром передаём функцию, а вторым - массив зависимостей, в который передаётся callback и задержка.
     * Функция будет пересоздаваться только в том случае, если callback и задержка изменились.
     * Принимаем бесконечное кол-во аргументов.
     */
    const debouncedCallback = useCallback((...args) => {
        // Проверяем, есть ли что-то внутри timer в поле current
        if(timer.current) {
            // Если есть, то вызываем функцию clearTimeout и очищаем то, что в этом current находится
            clearTimeout(timer.current)
        }
        /*
         * Логика здесь следующая:
         * Делаем timeout;
         * В случае, если функция вызвалась ещё раз, то timeout удаляем и задаём заново;
         * В таком случае timeout перезаписывается, и когда пользователь прекращает ввод, то вызывается callback.
         * Передаём бесконечное кол-во аргументов.
         */
        timer.current = setTimeout(() => {
            // Внутри этой функции вызываем callback
            callback(...args)
        }, delay)
    }, [callback, delay])
    // Из хука возвращаем debouncedCallback
    return debouncedCallback;
};