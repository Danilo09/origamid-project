import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../userContext';


const Header = () => {
    const { data, userLogout } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container `}>
                <Link className={styles.logo} to="/" aria-label='Dogs - Homes'>
                    <Dogs />
                </Link>
                {data ? (
                    <Link className={styles.login} to="/account">
                        {data.nome}
                        <button onClick={userLogout}>Sair</button>
                    </Link>
                ) :
                    (
                        <Link className={styles.login} to="/login">Login / Criar </Link>
                    )
                }

            </nav>
        </header>
    )
}

export default Header