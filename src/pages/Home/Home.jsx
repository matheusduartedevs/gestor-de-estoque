import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Items from '../Items/Items'

const Home = () => {
    return (
        <>
            <Navbar />
            <div>Dashboard</div>
            <Items title={'Diversidade de Itens'} quantity={2}/>
            <Items title={'Inventário Total'} quantity={30}/>
            <Items title={'Items recentes'} quantity={4}/>
            <Items title={'Itens acabando'} quantity={1}/>
            <Outlet />
        </>
    )
}

export default Home