//will have to refractor some codes
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Switch } from 'react-router-dom'; 
import { userAuthSession } from './Redux/User/user.actions';

//HOC (Higher Order Component
import WithAuth from './Higher-Order-Com/withAuth';

  //layout
import MainLayout from  './layout/mainLayout';
import HomeLayout from  './layout/HomeLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Recovery from './pages/Recovery';
import Login from './pages/Login';
import DashboardC from './pages/Dashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import Cart from './pages/Cart';
import About from './pages/About';

import AppBar from './Admin/AdminComponents/AppBar';
import Home from './Admin/Pages/Home';


import './default.scss';

const App = props => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userAuthSession());
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

    return (
      <div className="App"> 
        <Switch>
            <Route exact path='/' render={() => (
              <HomeLayout>
                <Homepage />
              </HomeLayout>
            )}/> 
            <Route exact path='/registration' render={() =>  (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}/> 
             <Route exact path='/login' 
              render={() =>  (
                <MainLayout>
                  <Login />
                </MainLayout>
              )}/> 
               <Route exact path='/about' 
              render={() =>  (
                <MainLayout>
                  <About/>
                </MainLayout>
              )}/> 
              <Route exact path='/recovery' render={() => (
                <MainLayout>
                  <Recovery/>
                </MainLayout>
              )}/>   
               <Route exact path='/dashboardC' render={() => (
                 <WithAuth>
                  <MainLayout>
                    <DashboardC/>
                  </MainLayout>
                </WithAuth>
              )}/> 
              <Route exact path='/account' render={() => (
                 <WithAuth>
                  <MainLayout>
                    <UserProfile/>
                  </MainLayout>
                </WithAuth>
              )}/>    
                <Route exact path='/cart' render={() => (
                 <WithAuth>
                  <MainLayout>
                    <Cart/>
                  </MainLayout>
                </WithAuth>
              )}/>    
            <AppBar/>
            <Route exact path="admin" component={Home}/>  
        </Switch>
        
        </div>
    );
  }
export default App;
