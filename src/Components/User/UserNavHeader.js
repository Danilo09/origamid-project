import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../userContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg'
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg'
import { ReactComponent as Post } from '../../Assets/adicionar.svg'
import { ReactComponent as Leave } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'

function UserNavHeader() {
    const { mobile, setMobile } = React.useState(null)
    const { userLogout } = React.useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/account" end><MyPhotos />{mobile && 'Minhas fotos'}</NavLink>
            <NavLink to="/account/stats"><Stats />{mobile && 'Estatísticas'}</NavLink>
            <NavLink to="/account/post"><Post />{mobile && 'Adicionar'}</NavLink>
            <button onClick={userLogout}><Leave />{mobile && 'Sair'}</button>
        </nav>
    )
}

export default UserNavHeader