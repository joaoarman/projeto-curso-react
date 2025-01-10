import React from 'react'
import { UserContext } from '../../../Contexts/userContext'
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const {isLogged} = React.useContext(UserContext)

  const [comments, setComments] = React.useState(props.comments)

  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])


  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map(comment => 
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </ul>
      {isLogged && <PhotoCommentsForm setComments={setComments} id={props.id}/>}
    </>
  )
}

export default PhotoComments
