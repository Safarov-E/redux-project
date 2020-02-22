import {createStore} from 'redux'

const reducer = function(state = 0, action) {
    switch(action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'RES':
            return state = 0
        default:
            return state
    }
}
const store = createStore(reducer)
document.querySelector('.plus_block_item').addEventListener('click', () => {
    store.dispatch({type: 'INC'})
})
document.querySelector('.minus_block_item').addEventListener('click', () => {
    store.dispatch({type: 'DEC'})
})
document.querySelector('.reset_block_item').addEventListener('click', () => {
    store.dispatch({type: 'RES'})
})
const update = () => {
    document.querySelector('.counter').textContent = store.getState();
}
store.subscribe(update)