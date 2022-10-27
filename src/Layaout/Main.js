import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-10  gap-3 w-10/12 m-auto mt-10'>
                <div className='md:col-span-3 hidden md:block'><LeftSide></LeftSide></div>
                <div className='col-span-9 md:col-span-7'><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Main;