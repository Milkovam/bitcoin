import axios from "axios";



export const bitcoinService = (function(){

    const bitconApi = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2";

    const getAll = async () => {
        const response = await  axios.get(bitconApi);
        return response.data["Data"];
    } 


  

   

 return {getAll}

} ())