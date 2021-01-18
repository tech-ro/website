// import Base from 'antd/lib/typography/Base';
import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './containers/ArticleListView'
import ArticleDetial from "./containers/ArticleDetailView";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/:articleID' component={ArticleDetial} />
    </div>
);

export default BaseRouter;