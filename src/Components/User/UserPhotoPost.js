import React from 'react'
import styles from './UserPhotoPost.module.css'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'

function UserPhotoPost() {
    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = React.useState({});
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (data) navigate('/account');
    }, [data, navigate])

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('ímg', img.raw)
        formData.append('nome', nome.value)
        formData.append('idade', idade.value)
        formData.append('peso', peso.value)

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token)
        request(url, options)
    }

    function handleImgChance({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        })
    }

    return (
        <section className={`${styles.photoPost} animeLeft `}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name='nome' {...nome} />
                <Input label="Peso" type="number" name='peso' {...peso} />
                <Input label="Idade" type="number" name='idade' {...idade} />
                <Input className={styles.file} type="file" name='img' id="img" onChange={handleImgChance} />
                {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
                <Error error={error} />
            </form>
            <div>
                {img.preview &&
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    ></div>}
            </div>
        </section>
    )
}

export default UserPhotoPost