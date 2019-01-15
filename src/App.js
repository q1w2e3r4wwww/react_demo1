import React, {
    Component
} from 'react';
import Todoitem from './todoItem.js'; // 组件使用大写字母开头
import {Button} from 'antd-mobile';
import { connect } from  'react-redux'
import { add_num , Decrease_num , addAsync} from "./index.redux";
import './index.css'
import 'antd-mobile/dist/antd-mobile.css'

// 因为函数体是一个对象，所以该箭头函数的函数体需要使用()来包裹 state => ({num : state})
@connect(
    // 要state的什么属性放到props里
    (state) => ({num : state}),
    // 要什么方法放到props里，自动dispatch
    { add_num , Decrease_num , addAsync}) // 通过调用add_num这些方法来触发state.crateReducer这个reducer,

// 创建一个react组件，固定语法：类 + name + extends + react.component{ render（）{ retrun (  这里是主显示页面展示的内容   )}}
class App extends Component {
    constructor(props) { //组件加载成功，该构造器就会执行，this.state相当于vue的data
        super(props);
        this.state = {
            list: [
                'learn react',
                'learn reactNetive'
            ],
        };
        this.valueChange = this.valueChange.bind(this)
    }

    valueChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtn() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: '',
        })
    }

    deleteItem(index) { // 这里的index是从子组件传过来的
        let list = [...this.state.list]; // 这里可以这样写 let list = this.state.list
        list.splice(index, 1); // 建议复制一个原数组出来进行删除操作，不要在原来的数组上面做删除
        this.setState({
            list // 这里是list:list的简写，就是当key:value命名相同时，可以简写
        })
    }

    itemContent() {
        return this.state.list.map((item, index) => {
            // 方法delItem给子组件调用，然后触发方法deleteItem
            return <Todoitem delItem={this.deleteItem.bind(this)} index={index} key={index} item={item}/>
        })
    }

    // 这里使用...this.state.list扩展运算符，表示每一次的内容都是最新内容
    /* 这里使用bind(this)是将按钮自身的this绑定到组件App之上  */
    render() {
        return (
            <React.Fragment>
                <div>
                    <input className="myInput" value={this.state.inputValue} onChange={this.valueChange}/>
                    <Button type={"primary"} onClick={this.handleBtn.bind(this)}>add</Button>
                </div>
                <ul>{this.itemContent()}</ul>
                <hr />
                <span>这里学习redux</span>
                <div>
                    <button type="button" onClick={this.props.Decrease_num}>-</button>
                    <input type="text" value={ this.props.num.crateReducer }/>
                    {/*由dispatch方法将状态发送给redux的对应的reducer函数来执行相关内容修改操作*/}
                    <button type="button" onClick={this.props.add_num}>+</button>
                    <button type="button" onClick={this.props.addAsync}>晚2秒增加</button>
                </div>
            </React.Fragment>
        );
    }
}

export default App; // 这里导出，src下的index.js才可能通过import引入
