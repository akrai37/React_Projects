const reducer = (state, action) => {
    if(action.type==='CLEAR_CART')
    return {...state,cart:[]}

if (action.type === 'REMOVE') {
    return {
        ...state,
        cart:state.cart.filter((cartItem)=>cartItem.id!==action.payload),
    }
}
 if (action.type === 'INCREASE') {
    
 }    
}

export default reducer