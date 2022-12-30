// Создаём отдельный интерфейс для адреса
export interface IAddress{
    street: string;
    city: string;
    zipcode: string;
}
// Создаём интерфейс для пользователя
export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}
// Создаём интерфейс для элемента из списка дел
export interface ITodo {
    id: number;
    // Заголовок
    title: string;
    // Выполнено дело или нет
    completed: boolean;

}