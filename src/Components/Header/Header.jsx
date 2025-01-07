import React from 'react'
import styles from './Header.module.css' 
import { Link } from 'react-router-dom'
import DogsLogo from '../../Assets/dogs.svg?react';
import UserIcon from '../../Assets/usuario.svg?react';
import { UserContext } from '../../Contexts/userContext'

const Header = () => {

  const { data, userLogout, isLogged, loading } = React.useContext(UserContext);
  
  return (
    <header className={styles.header}>
      <div className='container'>

        <nav>
            <Link to="/" className={styles.logo} aria-label="Dogs - Home">
                <DogsLogo />
            </Link>
            {loading ? 'true' : 'false'}
            {
              data ? 
              <Link to="/login" className={styles.login}>
                { data.nome }
                <UserIcon />
              </Link>
              :
              <Link to="/login" className={styles.login}>
                Login / Criar
                <UserIcon />
              </Link>
            }
            
        </nav>

      </div>
    </header>
  )
}

export default Header
