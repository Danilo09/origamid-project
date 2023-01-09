import React from 'react'
import FeedPhotosItens from './FeedPhotosItens'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

function FeedPhotos({ user, setModalPhoto }) {

    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user })
            const { json } = await request(url, options)
            console.log(json)
        }
        fetchPhotos();
    }, [request, user])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map(photo => <FeedPhotosItens key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}

            </ul>
        )
    else return null
}

export default FeedPhotos