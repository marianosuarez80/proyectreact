import { SettingsBackupRestoreTwoTone } from "@material-ui/icons"

export const initialState = {
    basket: [],
    basketAmount: 0
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM"
}
// el metodo reducer() ejecuta una funcion reductora sobre cada elemento de un Array, 
// devolviendo como resultado un unico valor
export const getBasketTotal= (basket)=>{
   return basket?.reduce((acumulador, item)=> item.price + acumulador, 0)
}

const reducer = (state = initialState, action) => {
    console.log(action); 
    switch (action.type) {
        case "ADD_TO_BASKET":
            let foundItem = false
            const newListItem = state.basket.map(item => {
                if (item.id === action.item.id){
                    item.price += action.item.price
                    foundItem = true
                }
                return item
            })
            if (foundItem){
            
                return {
                    ...state,
                    basket: newListItem,
                    basketAmount: state.basketAmount++
                };
            }
            return {
                ...state,
                basket: [...state.basket, action.item],
                basketAmount: state.basketAmount++
            };

        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem =>basketItem.id === action.id))
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else { console.log("no encuentro el producto") }
            return {
                ...state,
                basket: newBasket,
            };

        default: return state;
    }

}
export default reducer;