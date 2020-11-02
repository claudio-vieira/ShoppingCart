import { ADD_TO_CART,ADD_QUANTITY,REMOVE_ITEM,SUB_QUANTITY,CLEAN_ITEMS} from './CartActionsTypes'

export const addToCart = (id) => {
    return { type: ADD_TO_CART, id }
}

export const removeItem = (id) => {
    return { type: REMOVE_ITEM, id }
}

export const subtractQuantity = (id) => {
    return { type: SUB_QUANTITY, id }
}

export const addQuantity = (id) => {
    return { type: ADD_QUANTITY, id }
}

export const cleanItems = (id) => {
    return { type: CLEAN_ITEMS, id }
}