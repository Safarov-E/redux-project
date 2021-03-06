import {createStore} from 'redux'

const reducer = function(state = 0, action) {
    switch(action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'RES':
            return state = 0
        case 'UPL':
            return state + action.value
        case 'UPL':
            return state + action.value
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
document.querySelector('.upload_block_item').addEventListener('click', () => {
    fetch('http://localhost:3001/numbers')
    .then((response) => response.json())
    .then((jsonNumber) => {
        let itemConst = jsonNumber.map(item => {
            return  item.const
        })
        let rnd = Math.floor(Math.random() * itemConst.length)
        let value = Number(itemConst[rnd])
        store.dispatch({type: 'UPL', value})
    })
})
document.querySelector('.download_block').addEventListener('click', () => {
    console.log(store.getState())
    let num = store.getState();
    let data = {"const": num}
    fetch('http://localhost:3001/numbers', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((jsonNumber) => jsonNumber)
    store.dispatch({type: 'LOA'})
})
const update = () => {
    document.querySelector('.counter').textContent = store.getState();
}
store.subscribe(update)