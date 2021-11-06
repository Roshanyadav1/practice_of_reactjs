import { ADD_NUM, DEL_NUM } from "./CountType";

const initialState = {
    count : 10
}

const countReducer  =(state= initialState , action)=>{
    switch (action.type) {
        case ADD_NUM:
            return{
                ...state,
                count: state.count + 1
            }
    
        case DEL_NUM:
            return{
                ...state,
                count : state.count - 1
            }
        default:
        return state            
    }
}

export default countReducer