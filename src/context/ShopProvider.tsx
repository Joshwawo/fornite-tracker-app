import { createContext, useContext, useState, ReactNode } from "react";
import useSwr from 'swr'
import axios from 'axios'
import {Shoptypes} from '@/types/Shop'

interface ShopContextTypes{
  hola:string
  data:Shoptypes | undefined,
  isLoading:boolean,
  fetchError:any
}

const ShopContext = createContext<ShopContextTypes | null>(null);

const ShopProvider = ({children}: {children: ReactNode}) => {
  const [hola, setHola] = useState<string>('hola desde context')
  const url = "https://fortnite-api.com/v2/shop/br/combined?language=en"
  const fetcher = (url:string) => axios.get<Shoptypes>(url).then((res) => res.data);

  const {data, isLoading,error} = useSwr(url, fetcher)
  
 

  
  return (
    <ShopContext.Provider value={{hola,data,isLoading,fetchError:error}}>
    {children}
    </ShopContext.Provider>
  )
    
};

export {
  ShopProvider
}

const useShop = ()=>{
  const context = useContext(ShopContext)
  if (context === null) {
    throw new Error("useShop debe estar dentro de un ShopProvider");
  }
  return context
}

export default useShop
