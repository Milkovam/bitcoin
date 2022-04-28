
import React from "react";

type props = {
    bitcoinPerPage: number, 
    totalBitcoin: number,
    paginate: any
}
const Pagination  = ({bitcoinPerPage, totalBitcoin, paginate} : props) => { 
    const pageNumbers = [];
    for (let i = 1; i <=Math.ceil(totalBitcoin /bitcoinPerPage); i ++) {
        pageNumbers.push(i);
    }
  return (
    <nav aria-label="Page navigation">
        <ul className='pagination justify-content-center'>
            {pageNumbers.map(number =>
            (
                <li key={number} className ="page-item">
                    <a onClick = {() => paginate(number)}href='!#' className='page-link'>
                        {number}
                        </a>

                </li>
            ))}
            </ul>
    </nav>
  )
}

export default Pagination;

