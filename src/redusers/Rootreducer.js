
import {Buy_Cake,Buy_IceCream} from './Action'
const initCakeState = {
    numOfcake:10
}
 export const CakeReducer = (state = initCakeState,action) =>{
    switch(action.type){
        case Buy_Cake : return {
            ...state,
            numOfcake: state.numOfcake -1
        }
        default:return state
    }

    
}



// ice cream  initstate and reducer
const initIceState ={
    numOfIceCream : 20
}

 export const IceCreamReducer = (state = initIceState, action )=>{
    switch(action.type){
        case Buy_IceCream: return{
            ...state,
            numOfIceCream  : state.numOfIceCream -1
        }
        default: return state
    }
}








