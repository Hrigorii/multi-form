import React from 'react';
import { Route, Routes } from 'react-router';
import { Addons, Final, Info, Plan, SideBar } from '../';
import classes from './App.module.scss';


export const App: React.FC = () => {


  return (
    <div className={classes.wrapper}>
      <aside className={classes.aside}>
        <SideBar />
      </aside>
      <main className={classes.main}>
        <div className={classes.container}>
          <Routes>
            <Route path='/' element={<Info />} />
            <Route path='/plans' element={<Plan />} />
            <Route path='/addons' element={<Addons />} />
            <Route path='/final' element={<Final />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

