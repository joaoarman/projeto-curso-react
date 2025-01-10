import React from 'react'
import FeedModal from './FeedModal/FeedModal'
import FeedPhotos from './FeedPhotos/FeedPhotos'


const Feed = () => {

  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
        {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto}/>}
        <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  )
}

export default Feed
