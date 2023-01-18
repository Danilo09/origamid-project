import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../userContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'
import styles from './Login.module.css'
import NotFound from '../../NotFound'

const Login = () => {

    const { login } = React.useContext(UserContext)

    if (login === true) return <Navigate to="/account" />

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="create" element={<LoginCreate />} />
                    <Route path="lost" element={<LoginLost />} />
                    <Route path="reset" element={<LoginReset />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login