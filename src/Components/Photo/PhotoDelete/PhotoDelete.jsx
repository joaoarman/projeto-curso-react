import React from 'react'
import { PHOTO_DELETE } from '../../../../API';
import useFetch from '../../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {

    const { loading, request } = useFetch();

    async function handleClick() {
        const confirm = window.confirm('Tem certeza que deseja deletar a postagem?');
        if(confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const {response} = await request(url, options);
            if(response.ok) {
                window.location.reload();
            }
        }
        
    }


    return (
        <>
            {loading ? <button className={styles.delete} disabled>Deletar</button> : <button className={styles.delete} onClick={handleClick}>Deletar</button>}
        </>
    )
}

export default PhotoDelete
