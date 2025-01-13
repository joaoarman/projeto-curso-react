import React from 'react'
import styles from './FeedPhotosItem.module.css'
import ImageSkeleton from '../../Helper/ImageSkeleton/ImageSkeleton'


const FeedPhotosItem = ({ photo, setModalPhoto }) => {

    function handleClick() {
        setModalPhoto(photo)
    }


  return (
    <li className={styles.photo} onClick={handleClick}>
        <ImageSkeleton src={photo.src} alt={photo.title} />
        {/* <img  /> */}
        <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
