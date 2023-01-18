import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import { UserContext } from '../../userContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head'

function LoginForm() {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext)

    async function handleSubmit(event) {
        event.preventDefault()
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }
    return (
        <section className='animeLeft'>
            <Head title="Login" />
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />
                {loading ? <button disabled>Carregando ...</button> : <Button>Entrar</Button>}

                <Error error={error} />
            </form>
            <Link className={styles.lost} to="/login/lost">Perdeu a senha?</Link>
            <div className={styles.register}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site!</p>
            </div>
            <Link className={stylesBtn.button} to="/login/create">Cadastro</Link>
        </section>
    )

}
export default LoginForm