import React from 'react'
import UserHeaderNav from '../UserHeaderNav/UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {

    const location = useLocation();
    const [title, setTitle] = React.useState('')

    React.useEffect(() => {

        switch(location.pathname) {
            case '/conta/postar':
                setTitle('Postar');
                break;
            case '/conta/estatisticas':
                setTitle('Estatísticas');
                break;   
            default:
                setTitle('Minha Conta');
                break;   
        }

    }, [location])

    return (
        
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
        
    )
}

export default UserHeader
