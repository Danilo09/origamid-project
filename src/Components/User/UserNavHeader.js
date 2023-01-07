import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../userContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg'
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg'
import { ReactComponent as Post } from '../../Assets/adicionar.svg'
import { ReactComponent as Leave } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia';

function UserNavHeader() {
    const { userLogout } = React.useContext(UserContext);
    // width from screen
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

    return (
        <>
            {mobile && (
                <button
                    aria-label='Menu'
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive} `}
                >
                </button>
            )}
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to="/account" end><MyPhotos />{mobile && 'Minhas fotos'}</NavLink>
                <NavLink to="/account/stats"><Stats />{mobile && 'Estatísticas'}</NavLink>
                <NavLink to="/account/post"><Post />{mobile && 'Adicionar'}</NavLink>
                <button onClick={userLogout}><Leave />{mobile && 'Sair'}</button>
            </nav>
        </>
    )
}

export default UserNavHeader