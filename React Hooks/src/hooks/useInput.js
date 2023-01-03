import {useState} from "react";

// Создаём и экспортируем функцию
export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
};
