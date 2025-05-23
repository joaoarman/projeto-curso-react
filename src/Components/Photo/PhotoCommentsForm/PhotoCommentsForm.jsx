import React from 'react'
import Enviar from '../../../Assets/enviar.svg?react'
import useFetch from '../../../Hooks/useFetch'
import Error from '../../Helper/Error'
import { COMMENT_POST } from '../../../../API';
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments, single}) => {

    const [comment, setComment] = React.useState('');
    const {data, loading, request, error} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});
        const {response, json} = await request(url, options)
        if(response.ok) {
            setComment('');
            setComments((prevComments) => [...prevComments, json])
        }
    }

    function handleChange({target}) {
        setComment(target.value)
    }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea 
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder='Comentário...'
        value={comment} 
        onChange={handleChange}></textarea>
      <button className={styles.button}><Enviar /></button>
      <Error error={error} /> 
    </form>
  )
}

export default PhotoCommentsForm
