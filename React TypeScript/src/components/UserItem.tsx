import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    // Компонент на входе будет ожидать один пропс - пользователя
    user: IUser;
}
const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        // Указываем разметку для пользователя
        <div style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;