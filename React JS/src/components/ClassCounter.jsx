import React from 'react';

// Наследуем свойства от React компонента
class ClassCounter extends React.Component {
    // Создаём конструктор, принимающий параметрами пропсы
    constructor(props){
        // используем super для вызова конструктора наследуемого класса
        super(props);
        // Инициализируем состояние
        this.state = {
            // Создаём поле "count" (счётчик)
            count: 0
        }
        // Используем метод bind для привязки контекста и передаём this
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        /*
         * Для изменения состояния вызываем функцию setState, куда передаём новые состояния с изменёнными значениями.
         * Значение счётчика увеличивается на единицу.
         */
        this.setState({count: this.state.count + 1})

    }

    decrement(){
        // Значение счётчика уменьшается на единицу
        this.setState({count: this.state.count - 1})
    }

    render(){
        return (
            // Поскольку находимся внутри класса, для обращения к свойствам необходимо использовать ключевое слово this
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
// Экспортируем класс
export default ClassCounter;

// Классовые компоненты являются устаревшим подходом. Рекомендуется использовать функциональные компоненты и хуки
