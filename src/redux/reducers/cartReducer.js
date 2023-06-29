import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // eklenecek ürün sepette mevcutsa
            var addedItem = state.find(c=>c.product.id===action.payload.product.id)
            if(addedItem){
                var newState = state.map(cartItem=>{
                    // tüm state'i gez, eklenecek ürünü ara
                    if(cartItem.product.id===action.payload.product.id){
                        // Object.assign js'den geliyor, state'i değiştirmek için kullandık
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem;
                })
                return newState;
            }
            else{
                // eğer ürün daha önce eklenmemişse state'in kopyasına yeni ürünü ekleyip döndür
                return [...state,{...action.payload}]
            }

        case actionTypes.REMOVE_FROM_CART:
            const newState2= state.filter(cartItem=>cartItem.product.id!==action.payload.id)
        // silinmek istenen id'ye sahip item dışındaki tüm itemleri yeni state array'ine ekleyip döndür
            return newState2;
    
        default:
            return state;
    }
}
