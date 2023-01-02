import React from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

function User() {
    return (
        <section className='container'>
            <UserHeader />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='post' element={<UserPhotoPost />} />
                <Route path='stats' element={<UserStats />} />
            </Routes>
        </section>
    )
}

export default User