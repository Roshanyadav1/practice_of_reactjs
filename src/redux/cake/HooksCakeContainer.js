import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '..'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes -{numOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
