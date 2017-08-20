import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from 'components/header/header-container';
import CreateUser from 'components/create-user/create-user-container';
import ForgotPassword from 'components/forgot-password/forgot-password-container';
import ResetPassword from 'components/reset-password/reset-password-container';
import VerifyAccount from 'components/verify-account/verify-account-container';
import Login from 'components/login/login-container';
import EditUser from 'components/edit-user/edit-user-container';
import ListUser from 'components/list-user/list-user-container';
import ListMeals from 'components/list-meals/list-meals-container';

const Routes = () => {
  return (<div>
    <Route path='/(users|roles)' component={Header}/>
    <Switch>
      <Route path='/auth/create-account' component={CreateUser}/>
      <Route path='/auth/forgot-password' component={ForgotPassword}/>
      <Route path='/auth/reset-password' component={ResetPassword}/>
      <Route path='/auth/verify-account' component={VerifyAccount}/>
      <Route path='/auth/login' component={Login}/>
      <Route exact path='/users/edit/:userId' component={EditUser}/>
      <Route exact path='/users' component={ListUser}/>
      <Route exact path='/users/:userId/meals' component={ListMeals}/>
    </Switch>
  </div>);
};

export default Routes;