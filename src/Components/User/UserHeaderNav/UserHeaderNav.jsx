import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../Contexts/userContext'
/* import {ReactComponent as MinhasFotos} from '../../../Assets/feed.svg'
import {ReactComponent as AdicionarFoto} from '../../../Assets/adicionar.svg'
import {ReactComponent as Estatisticas} from '../../../Assets/estatisticas.svg' */
import MinhasFotos from '../../../Assets/feed.svg?react'
import AdicionarFoto from '../../../Assets/adicionar.svg?react'
import Estatisticas from '../../../Assets/estatisticas.svg?react'
import Sair from '../../../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../../Hooks/useMedia'


const UserHeaderNav = () => {

    const { userLogout } = React.useContext(UserContext);

    const mobile = useMedia('40rem');
    
    const [mobileMenu, setMobileMenu] = React.useState(false)
    
    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])


  return (
    <>
        {mobile && <button aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)} className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}></button>}

        <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
            <NavLink to="/conta" end>
                <MinhasFotos />
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <Estatisticas />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to="/conta/postar">
                <AdicionarFoto />
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={userLogout}>
                <Sair />
                {mobile && 'Sair'}
            </button>
        </nav>
    </>
  )
}

export default UserHeaderNav
