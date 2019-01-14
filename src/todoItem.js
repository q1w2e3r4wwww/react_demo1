import React, {
	Component
} from 'react';

class todoitem extends Component{
	itemClick() {
		this.props.delItem(this.props.index); // 这里调用父组件的方法
	}
	render() {
		let { item } = this.props; // 这种是es6的解构赋值写法
		return <li onClick={this.itemClick.bind(this)}>{item}</li>
	}
}

export default todoitem;