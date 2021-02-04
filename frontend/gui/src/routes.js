// import Base from 'antd/lib/typography/Base';
import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './containers/ArticleListView'
import ArticleDetial from "./containers/ArticleDetailView";
import NormalLoginForm from './containers/Login';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/login/' component={NormalLoginForm} />
        <Route exact path='/articles/:articleID/' component={ArticleDetial} />
        
    </div>
);

export default BaseRouter;