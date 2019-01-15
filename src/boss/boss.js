import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link ,Route , Redirect} from "react-router-dom";
import { logout } from '../Auth.redux'
import App from '../App'

function page1() {
    return <h2>页面1</h2>
}
function page2 () {
    return <h2>页面2</h2>
}

@connect(
    state => state.auth, // 这里需要获取auth这个对象
    { logout }
)
class Boss extends Component {
    render() {
        console.log(this.props)
        const goLogin = <Redirect to="/login" />
        const app = (
            <div>
                <h1>欢迎您! {this.props.name},年龄--{this.props.age}</h1>
                <button onClick={this.props.logout}>注销登录</button>
                <ul>
                    <li>
                        <Link to="/boss/boss/"  >首页</Link>
                    </li>
                    <li>
                        <Link to="/boss/boss/page1" >页面1</Link>
                    </li>
                    <li>
                        <Link to="/boss/boss/page2" >页面2</Link>
                    </li>
                </ul>
                <Route path="/boss/boss/" exact component={App}/>
                <Route path="/boss/boss/page1" component={page1}/>
                <Route path="/boss/boss/page2" component={page2}/>
            </div>
        )
        return this.props.isAuth ? app : goLogin;
    }
}

export default Boss;