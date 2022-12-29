import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../userContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'

const Login = () => {

    const { login } = React.useContext(UserContext)

    if (login === true) return <Navigate to="/account" />

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="create" element={<LoginCreate />} />
                <Route path="lost" element={<LoginLost />} />
                <Route path="reset" element={<LoginReset />} />
            </Routes>
        </div>
    )
}

export default Login