import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

// Компонент будет ожидать один пропс - список пользователей
interface UserListProps {
    // Указываем тип пропсов (список пользователей типа IUSer)
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {

    return (
        // Проитерируемся по списку пользователей с помощью функции map
        <div>
            {users.map(user =>
                /*
                 * В качестве ключа указываем id пользователя
                 * Для каждого пользователя что-нибудь отрисовывается
                 * Для каждого элемента итерации внутри функции map отрисовываем UserItem и передаём туда польз-ля
                 */
                  <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserList;