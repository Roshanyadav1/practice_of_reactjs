import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentD() {
    const countContext = useContext(CountContext); 
    return (
        <div>
            ComponentD =>{countContext.countState}
            <button onClick={() => countContext.countDispatch('increament')}>Increament</button>
            <button onClick={() => countContext.countDispatch('decreament')}>Decreament</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>

        </div>
    )
}

export default ComponentD
