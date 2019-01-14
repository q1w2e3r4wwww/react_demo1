// 整个项目的入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter , Route , Link , Switch} from 'react-router-dom'
import thunk from 'redux-thunk' // 用于开启异步请求
import { crateReducer  } from  './index.redux'
import App from './App'; // 引入App.js

// 新建store   redux的仓库  状态仓库一般是要放在主入口文件的
const store = createStore(crateReducer,applyMiddleware(thunk));

function public2() {
    return <h3>组件2</h3>
}
function public3() {
    return <h3>组件3</h3>
}

function Test(){
    return <h3>404页面</h3>
}
// 将组件App放到id为root的div里面显示,在public下的index.html里面的<div id="root"></div>，既是：index.html是主显示文件
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/"  >组件1</Link>
                    </li>
                    <li>
                        <Link to="/public2" >组件2</Link>
                    </li>
                    <li>
                        <Link to="/public3" >组件3</Link>
                    </li>
                    <li>
                        <Link to="/public223" >404</Link>
                    </li>
                </ul>
                {/*exact 表示完全匹配才显示*/}
                <Switch>
                    <Route path='/' exact component={App} />
                    <Route path='/public2' component={public2}/>
                    <Route path='/public3' component={public3} />
                    <Route path='/:Location' component={Test}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>), document.getElementById('root'));

