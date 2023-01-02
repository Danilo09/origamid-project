import React from 'react'
import UserNavHeader from './UserNavHeader'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

function UserHeader() {

    const [title, setTitle] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        setTitle();
        const { pathname } = location
        switch (pathname) {
            case '/account/stats':
                setTitle("Estatísticas")
                break;
            case '/account/post':
                setTitle("Adicionar")
                break;
            default:
                setTitle("Minha Conta")

        }
    }, [location])
    return (
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserNavHeader />
        </header>
    )
}

export default UserHeader