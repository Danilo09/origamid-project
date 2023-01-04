import React from 'react'
import styles from './FeedPhotosItens.module.css'

function FeedPhotosItens({ photo, setModalPhoto }) {
    function handleClick() {
        setModalPhoto(photo)
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <img src={photo.src} alt={photo.title} />
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotosItens