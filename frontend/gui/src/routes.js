// import Base from 'antd/lib/typography/Base';
import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './containers/ArticleListView'
import ArticleDetial from "./containers/ArticleDetailView";
import LoginForm from './containers/Login';
import RegistrationForm from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/login/' component={LoginForm} />
        <Route exact path='/signup/' component={RegistrationForm} />
        <Route exact path='/articles/:articleID/' component={ArticleDetial} />
        
    </div>
);

export default BaseRouter;