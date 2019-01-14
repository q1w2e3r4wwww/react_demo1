// 整个项目的入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter , Route , Link , Switch} from 'react-router-dom'
import thunk from 'redux-thunk' // 用于开启异步请求
import { crateReducer  } from  './index.redux'
//合并多个reducer
import { reducers } from  './reducer'

import App from './App'
import Auth from './Auth/Auth'
import Boss from './boss/boss'


// 新建store   redux的仓库  状态仓库一般是要放在主入口文件的
const store = createStore(crateReducer,applyMiddleware(thunk));
// 将组件App放到id为root的div里面显示,在public下的index.html里面的<div id="root"></div>，既是：index.html是主显示文件
ReactDOM.render(
    /*Provider组件在应用的最外层，传入store，只用一次*/
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/"  >首页</Link>
                    </li>
                    <li>
                        <Link to="/Auth/Auth" >个人</Link>
                    </li>
                    <li>
                        <Link to="/boss/boss" >boss</Link>
                    </li>
                </ul>
                {/*exact 表示完全匹配才显示*/}
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/Auth/Auth' component={Auth}/>
                    <Route path='/boss/boss' component={Boss}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>), document.getElementById('root'));

