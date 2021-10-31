import React,{useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10,
}
const reducer =(state , action)=>{
    switch (action.type) {
        case 'increament':
            return{...state , firstCounter : state.firstCounter+ action.value}
  
        case 'decreament':
            return { ...state , firstCounter : state.firstCounter- action.value}
  
        case 'increament2':
            return{ ...state , secondCounter : state.secondCounter+ action.value}
  
        case 'decreament2':
            return { ...state , secondCounter : state.secondCounter - action.value}
  
        case 'reset':
            return initialState
  
        default:
           return state
    }
}

export default function CounterTwo() {
    const [count , dispatch] =  useReducer(reducer , initialState)

    return (
        <div>
            <h1>first Count -  {count.firstCounter}</h1>
            <h1>Second Count -  {count.secondCounter}</h1>
            <button onClick={() => dispatch({type : 'increament', value: 1})}>Increament</button>
            <button onClick={() => dispatch({type : 'decreament', value: 1})}>Decreament</button>

            <button onClick={() => dispatch({type : 'increament2', value: 5})}>Increament2</button>
            <button onClick={() => dispatch({type : 'decreament2', value: 5})}>Decreamet2</button>
            <button onClick={() => dispatch({type : 'reset'})}>reset</button>
        </div>
    )
}
