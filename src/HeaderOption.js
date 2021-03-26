import React from 'react';
import './HeaderOption.css';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, displayName, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && (
                <Avatar src={user?.photoUrl} className='sidebar__avatars'>
                    {user?.displayName[0]} </Avatar>
                )}

        </div>
    );
}

export default HeaderOption

