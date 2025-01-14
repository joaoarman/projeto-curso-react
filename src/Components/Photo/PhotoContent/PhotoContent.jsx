import React from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments/PhotoComments';
import { UserContext } from '../../../Contexts/userContext';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import ImageSkeleton from '../../Helper/ImageSkeleton/ImageSkeleton';

const PhotoContent = ({ data, single }) => {

  const user = React.useContext(UserContext)
  
  const { photo, comments } = data;
  

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>

      <div className={styles.img}>
        <ImageSkeleton src={photo.src} alt={photo.title} />
      </div>
      
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.isLogged && user.data.nome === photo.author ? <PhotoDelete id={photo.id}/> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} single={single} comments={comments} />
    </div>
  );
};

export default PhotoContent
