import { createContext, useContext, useState, ReactNode } from "react";
import useSwr from 'swr'
import axios from 'axios'
import {Shoptypes} from '@/types/Shop'
import {NewsTypes} from '@/types/News'

interface ShopContextTypes{
  data:Shoptypes | undefined,
  isLoading:boolean,
  fetchError?:any,
  showModal:boolean,
  setShowModal:React.Dispatch<React.SetStateAction<boolean>>
  newsData:NewsTypes | undefined,
  newsLoading:boolean,
  newsError?:any
  
}

const ShopContext = createContext<ShopContextTypes | null>(null);

const ShopProvider = ({children}: {children: ReactNode}) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  //URLs
  const url = "https://fortnite-api.com/v2/shop/br/combined"
  const newUrl = "https://fortnite-api.com/v2/news"
  //Fetchers
  const fetcher = (): Promise<Shoptypes> => axios.get<Shoptypes>(url).then((res) => res.data);
  const newFetcher = ():Promise<NewsTypes> => axios.get<NewsTypes>(newUrl).then((res) => res.data);
  //SWR Data Fetching
  const {data, isLoading,error} = useSwr(url, fetcher)
  const {data:newsData, isLoading:newsLoading,error:newsError} = useSwr(newUrl, newFetcher)
  
  return (
    <ShopContext.Provider value={{
      data,
      isLoading,
      fetchError:error,
      showModal,
      setShowModal,
      newsData,
      newsError,
      newsLoading,
      }}>
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
