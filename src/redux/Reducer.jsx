import * as types from "./ActionType"

const initialstate = {

    product : [],
    cartdata : [],
    isLoading : false,
    isError : false,

}

 const reducer = (state = initialstate, action)=>{

    const {type, payload} = action;
    
    switch(type){
         case types.GET_PRODUCT_REQUEST :
            return {...state, isLoading : true, isError : false  };
        
         case types.GET_PRODUCT_SUCCESS :
            return {...state, product : [...payload], isLoading : false, isError : false};
         
         case types.GET_PRODUCT_FAILURE :
            return {...state, isLoading : false, isError : true };   


         case types.GET_CART_REQUEST :
            return {...state, isLoading : true, isError : false  };
            
         case  types.GET_CART_SUCCESS :
            return { ...state, cartdata : [...state.cartdata, payload], isLoading : false, isError : false };

         case types.GET_CART_FAILURE :
             return {...state, isLoading : false, isError : true}   

         default :
         return state ;  

    }

    return state;
      
 }

export {reducer};



