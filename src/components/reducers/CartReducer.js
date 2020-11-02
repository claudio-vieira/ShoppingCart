import { ADD_TO_CART,ADD_QUANTITY,REMOVE_ITEM,SUB_QUANTITY,CLEAN_ITEMS} from '../actions/CartActionsTypes'

const initState = {
    items: [
        {id:1,name:'Sledgehammer', price:125.75},
        {id:2,name:'Axe', price:190.50},
        {id:3,name:'Bandsaw',price:562.13},
        {id:4,name:'Chisel', price:12.9},
        {id:5,name:'Hacksaw”', price:18.45}
    ],
    addedItems:[],
    total: 0

}

const cartReducer= (state = initState, action)=>{
   
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)

        //check if the id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        
        if(existed_item){
            existed_item.quantity += 1;
            state.total = state.total + existed_item.price;

            //update the state of the cart
            localStorage.setItem('@shopping-cart-app/state', JSON.stringify(state));
            
            return{...state}
        }else{
            addedItem.quantity = 1;

            //calculating the total
            let newTotal = state.total + addedItem.price 

            state.addedItems = [...state.addedItems, addedItem];
            state.total = newTotal;

            //update the state of the cart
            localStorage.setItem('@shopping-cart-app/state', JSON.stringify(state));
            
            return{...state} 
        }
    }

    if(action.type === REMOVE_ITEM){
        
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        state.addedItems = new_items;
        state.total = state.total - (itemToRemove.price * itemToRemove.quantity );

        //update the state of the cart
        localStorage.setItem('@shopping-cart-app/state', JSON.stringify(state));
        
        return{...state}
    }

    //UPDATING QUANTITIES CART COMPONENT
    if(action.type === ADD_QUANTITY){

        let addedItem= state.addedItems.find(item=> action.id === item.id)
        addedItem.quantity += 1 
        
        state.total = state.total + addedItem.price;
        
        //update the state of the cart
        localStorage.setItem('@shopping-cart-app/state', JSON.stringify(state));

        return{...state}
    }
    if(action.type === SUB_QUANTITY){  
         
        let addedItem= state.addedItems.find(item=> action.id === item.id)        
        
        //if quantity == 0 then remove the item
        if(addedItem.quantity === 1){
            
            state.addedItems = state.addedItems.filter(item=>item.id !== action.id);
            state.total = state.total - addedItem.price;

            //update the state of the cart
            localStorage.setItem('@shopping-cart-app/state', JSON.stringify(state));

            return{...state}
        }
        else {
            addedItem.quantity -= 1
            state.total = state.total - addedItem.price;

            //update the state of the cart
            localStorage.setItem('@shopping-cart-app/state', JSON.stringify(state));

            return{...state}
        }
        
    }else if(action.type === CLEAN_ITEMS){
        state.addedItems = [];
        state.total = 0;

        //update the state of the cart (RESET)
        localStorage.setItem('@shopping-cart-app/state', JSON.stringify(state));

        alert("Completed purchase");

        return{...state}
    }else{
        //localStorage.removeItem('@shopping-cart-app/state');
        
        const stateTemp = JSON.parse(localStorage.getItem('@shopping-cart-app/state'));
        
        if(stateTemp !== null){
            state = stateTemp;
        }
        
        return state
    }
    
}

export default cartReducer