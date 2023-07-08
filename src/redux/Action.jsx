import * as types from "./ActionType"
 import axios from "axios"

 export const  getProductRequest = ()=>{
     return { 
         type : types.GET_PRODUCT_REQUEST,

     }
 };

 export const  getProductSuccess = (payload)=>{
    return { 
        type : types.GET_PRODUCT_SUCCESS,
        payload 
    }
};

export const  getProductFailure = ()=>{
    return { 
        type : types.GET_PRODUCT_FAILURE,

    }
};

export const  getCartRequest = ()=>{
    return { 
        type : types.GET_CART_REQUEST,

    }
};

export const  getcartSuccess = (payload)=>{
    return { 
        type : types.GET_CART_SUCCESS,
          payload
    }
};

export const  getcartfailure = ()=>{
    return { 
        type : types.GET_CART_FAILURE,

    }
};







