

// ----------------整个项目的入口文件---------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter , Route  , Redirect, Switch} from 'react-router-dom'
import thunk from 'redux-thunk' // 用于开启异步请求
import './config/config'
//合并多个reducer
import reducers  from  './reducer'

import Auth from './Auth/Auth'
import Boss from './boss/boss'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
// 新建store   redux的仓库
const store = createStore(reducers,compose( // compose是配置redux的谷歌浏览器调试
        applyMiddleware(thunk),
        reduxDevtools
    ));  // 使用appleMiddleware是封装了dispatch
// 将组件App放到id为root的div里面显示,在public下的index.html里面的<div id="root"></div>，既是：index.html是主显示文件
ReactDOM.render(
    /*Provider组件在应用的最外层，传入store，只用一次*/
    (<Provider store={store}>
        <BrowserRouter>
            {/*exact 表示完全匹配才显示*/}
            <Switch>
                <Route path='/login' component={Auth}/>
                <Route path='/boss/boss' component={Boss}/>
                <Redirect to="/boss/boss" /> {/*如果没有匹配的，就跳转到/boss/boss*/}
            </Switch>
        </BrowserRouter>
    </Provider>), document.getElementById('root'));

