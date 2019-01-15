import React from 'react'
import {Button} from 'antd-mobile';
import { connect } from 'react-redux'
import { Redirect} from "react-router-dom";
import axios from 'axios'
import { login , getUserData } from  '../Auth.redux'

@connect(
    state => state.auth, //这里需要auth reducer与login方法连接,通过调用login方法来触发auth reducer
    { login , getUserData }
)
class Auth extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // 这里获取的是server.js里面mongodb的数据
        console.log(this.props)
        this.props.getUserData();
    }
    render(){
        return(
            <div>
                { this.props.isAuth ?  <Redirect to="/boss/boss" /> : null }
                <h2>你还没有权限访问</h2>
                {/*这里要通过this.props.login访问到Auth.redux.js里面的login reducer是通过
                    @connect(
                        state => state.auth, //这里需要auth对象与login方法连接
                        { login }
                    )才能访问的
                */}
                <Button onClick={this.props.login}>登录</Button>
            </div>
        )
    }
}

export default Auth;