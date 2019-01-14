import React from 'react'

// 定义一个组件
class MyDux extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    itemClick(){
        this.props.zjunm();
    }
    render(){
        const store = this.props.point;
        return (
            <div>
                <button type="button">-</button>
                <input type="text" value={store}/>
                <button type="button" onClick={this.itemClick.bind(this)}>+</button>
            </div>
        )
    }
}
export default MyDux;