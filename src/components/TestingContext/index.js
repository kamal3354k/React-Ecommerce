import {createContext} from "react";
const ProductInfo = createContext();
const ProductProvider = ProductInfo.Provider;
const ProductConsumer = ProductInfo.Consumer;
export {ProductConsumer,ProductProvider}