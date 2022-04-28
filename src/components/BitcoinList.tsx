import { FC, SetStateAction, useContext, useState } from "react";
import { bitcoinContext } from "../context/bitcoinContext";
import { bitcoinContextType } from "../types/bitcoinContextType";
import { Datum } from "../interfaces/Data";
import BitcoinItem from "./BitcoinItem";
import Table from "react-bootstrap/Table";
import  Pagination  from "./Pagination"

const BitcoinList: FC = () => {
  const { bitcoin } = useContext(bitcoinContext) as bitcoinContextType;

  const [currentPage, setCurrentPage] = useState(1);

  const [bitcoinPerPage, setBitcoinPerPage] = useState<number>(20);

  const indexOfLastBitCoin = currentPage * bitcoinPerPage;
  const indexFirstBitcoin = indexOfLastBitCoin - bitcoinPerPage;

 // const currentBitcoin = bitcoin.slice(indexFirstBitcoin, indexOfLastBitCoin);

 const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

  const createBitcoinList = () => {
    return bitcoin.slice(indexFirstBitcoin, indexOfLastBitCoin)
    .map((bitcoin: Datum, key: number) => {

  

      //console.log(key);

      return (
      
        <BitcoinItem
          time={bitcoin.time}
          high={bitcoin.high}
          low={bitcoin.low}
          open={bitcoin.open}
          volumefrom={bitcoin.volumefrom}
          volumeto={bitcoin.volumeto}
          close={bitcoin.close}
          conversionSymbol={""}
        />
      );
    });
  };


  return (
    
  
    <section>
    
      <h3>Bitcoin</h3>
      <Table className='table table-hover table-dark'>
        <thead>
          <tr>
            <th scope='high'>High</th>
            <th scope='close'>Close</th>
            <th scope='open'>Open</th>
            <th scope='time'>Time</th>
            <th scope='volumefrom'>Volume from</th>
            <th scope='volumeto'>Volume to</th>
          </tr>
        </thead>

        {createBitcoinList()}
        
       
      </Table>
      <Pagination bitcoinPerPage={bitcoinPerPage}  totalBitcoin={100} paginate={paginate} />
    </section>
  );
};




export default BitcoinList;
