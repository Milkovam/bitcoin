import {FC, createContext, useState, useEffect} from "react";
import { Data, Datum} from "../interfaces/Data";
import { bitcoinContextType } from "../types/bitcoinContextType";
import { bitcoinService } from "../services/bitcoinService";


export const bitcoinContext = createContext<bitcoinContextType | null> (null);

export const BitcoinProvider: FC = ({ children}) => {

    
    const [bitcoin, setBitcoin] = useState<Datum[]>([]);

   
 
    useEffect(() => {
        getBitcoinsFromService();

    }, [])

    const getBitcoinsFromService = async () => {
        const results = await  bitcoinService.getAll();
        setBitcoin(results.Data);
    }
   

  
    return (
       
      
        <bitcoinContext.Provider value={{bitcoin}}> 
         
            { children}  
            
         
        </bitcoinContext.Provider>
        
             
    ) 
  

}