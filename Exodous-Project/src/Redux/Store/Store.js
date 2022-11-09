import { configureStore } from "@reduxjs/toolkit";
import { allOrdersReducer, orderDetailsReducer } from "../Reducer/ordersReducer";



const Store = configureStore({
    reducer: {
      allOrders : allOrdersReducer,
      orderDetails : orderDetailsReducer,
      
      
    },
  
    
    
  });
  
  export default Store;
  