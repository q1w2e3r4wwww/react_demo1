const Add_num = 'add';
const Decrease = 'Decrease';

// redux 的reducer函数，用于计算，返回值,用一个默认的state状态值，action用于管理内容与type类型
export function crateReducer(state = 0 , action) {
    switch (action.type) {
        case Add_num:
            return state + 1;
        case Decrease:
            return state - 1;
        default:
            return 10;
    }
}

export function add_num() {
    return { type:Add_num }
}
export function Decrease_num() {
    return { type:Decrease }
}

export function addAsync() {
    return dispatch => { // 参数dispatch必须要
        setTimeout(function () {
            dispatch(add_num()); // 使用dispatch来传入参数
        },2000)
    }
}
