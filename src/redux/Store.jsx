import  {applyMiddleware, compose, legacy_createStore} from "redux";
  import { reducer}  from "./Reducer";
  import thunk from "redux-thunk";



  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose ;

  const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk)) );

   console.log(store.getState());


export {store};