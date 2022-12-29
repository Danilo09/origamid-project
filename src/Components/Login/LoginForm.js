import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import { UserContext } from '../../userContext'

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
        <section>
            <h1>Login</h1>
            <form action='' onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />
                {loading ? <button disabled>Carregando ...</button> : <Button>Entrar</Button>}

                {error && <p>{error}</p>}
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )

}
export default LoginForm