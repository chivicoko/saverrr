'use client';

import FullPagination from '@/components/pagination/FullPagination';
import { cardRequests, recentCardRequestTableHead } from '../../../data/base';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonNeutral from '@/components/button/ButtonNeutral';
import Search from '@/components/Search';

const BankTransactionTable = () => {
  // ============== pagination =================
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transactionsPerPage, setTransactionsPerPage] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setTransactionsPerPage(3);
      } else if (window.innerWidth <= 640) {
        setTransactionsPerPage(5);
      } else {
        if (window.innerHeight <= 731) {
          setTransactionsPerPage(3);
        } else if (window.innerHeight <= 810) {
          setTransactionsPerPage(4);
        } else if (window.innerHeight <= 1180) {
          setTransactionsPerPage(7);
        // } else if (window.innerHeight <= 1085) {
        //   setTransactionsPerPage(8)
        // } else if (window.innerHeight <= 1180) {
        //   setTransactionsPerPage(10)
        }  else {
          setTransactionsPerPage(13);
        }
      }

      if (isExpanded) {
        setTransactionsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [transactionsPerPage, isExpanded]);

  // Search function
  const filteredData = cardRequests.filter((data) => {
    return (
      data.amount.toLowerCase().includes(searchText.toLowerCase())
      || data.category.toLowerCase().includes(searchText.toLowerCase())
      || data.date.toLowerCase().includes(searchText.toLowerCase())
      || data.status.toLowerCase().includes(searchText.toLowerCase())
      || data.transaction.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const indexOfLastProduct = currentPage * transactionsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - transactionsPerPage;
  const currentRequestCards = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredData.length / transactionsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTransactionsPerPage(Number(event.target.value));
  //   setCurrentPage(1);
  // };
  // ============== pagination =================

  const toggleChartExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${isExpanded ? 'fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-2 z-50' : ''} pt-1 transition-all duration-300 ease-in-out`}>
      <div className={`${isExpanded ? 'bg-white w-[95%] h-[97%] md:w-[80%] md:h-[90%] p-4 sm:p-7 md:p-10 rounded-xl' : ''} `}>
        <div className="flex items-center justify-between gap-4">
          <h3 className='text-textGrayDarker'>Recent Transactions</h3>
          {!isExpanded ?
            <ButtonNeutral
              classes='rounded-radius-4'
              onClick={toggleChartExpansion}
              icon1={<div className="relative size-[20px]" title='Expand to full screen view'><Image src="/icons/maximize-2.svg" fill alt="expansion icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
            />
            :
            <button onClick={toggleChartExpansion} title='Reduce to normal screen view' className="p-2 rounded-full text-3xl hover:text-red-700 hover:rotate-90 hover:translate-y-[3.5px] hover:translate-x-[3.5px] transition-all duration-300 ease-in-out">
              &times;
            </button>
          }
        </div>

        <div className="flex flex-col items-center justify-between gap-1 pt-4">
          {currentRequestCards && currentRequestCards.length > 0 ?
          <>
          <div className="w-full overflow-x-scroll custom-scrollbar">
            <Search searchText={searchText} setSearchText={setSearchText} />
          
            <table className="min-w-full custom-scrollbar">
              <thead className="bg-transparent border-b border-customGray">
                <tr className="bg-neutral-100">
                  {recentCardRequestTableHead.map(item => (
                    <th key={item.id} className={`${isExpanded ? "py-[11px] text-[13px] sm:py-[14px] sm:text-[14px]" : "py-[10px] text-[13px]"} whitespace-nowrap px-2 ${item.title === 'Transaction' ? 'text-start' : 'text-center'} text-textGray capitalize tracking-wider`}>{item.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {currentRequestCards.map(item => (
                  <tr
                    key={item.id}
                    className={`my-2 ${item.status === 'Success' ? 'bg-green-50' : item.status === 'Declined' ? 'bg-orange-50' : 'bg-gray-50'}`}
                  >
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                      <span className='flex items-center gap-2'>
                        <div className="relative size-7 rounded-full border">
                          <Image
                              src={`/images/${item.avatar}`}
                              alt="cardinfra logo"
                              fill
                              className="object-cover rounded-full"
                              sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        {item.transaction}
                      </span>
                    </td>
                    <td className={`relative ${+item.amount < 1000  ? 'text-orange-700' : 'text-green-700'} ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                    {+item.amount < 1000  ? '-' : '+'} ${item.amount}
                    </td>
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                      <span className={`w-fit flex items-center gap-1 px-1 mx-auto ${item.status === 'Success' ? 'text-green-700 border-green-300 bg-green-100' : item.status === 'Declined' ? 'text-orange-700 border-orange-300 bg-orange-100' : 'text-gray-700 border-gray-300 bg-gray-100'} border rounded-full`}>
                        <div className={`size-1 rounded-full ${item.status === 'Success' ? 'bg-green-700' : item.status === 'Declined' ? 'bg-orange-700' : 'bg-gray-700'} `}></div>
                        {item.status}
                      </span>
                    </td>
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>{item.date}</td>
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                      <span className={`w-fit flex items-center gap-1 px-1 mx-auto ${item.category === 'Deposit' ? 'text-green-700 border-green-300 bg-green-100' : item.category === 'Food' ? 'text-orange-700 border-orange-300 bg-orange-100' : item.category === 'Income' ? 'text-lime-700 border-lime-300 bg-lime-100' : item.category === 'Subscriptions' ? 'text-blue-700 border-blue-300 bg-blue-100' : item.category === 'Groceries' ? 'text-purple-700 border-purple-300 bg-purple-100' : 'text-gray-700 border-gray-300 bg-gray-100'} border rounded-full`}>
                        <div className={`size-1 rounded-full ${item.category === 'Deposit' ? 'bg-green-700' : item.category === 'Food' ? 'bg-orange-700' : item.category === 'Income' ? 'bg-lime-700' : item.category === 'Subscriptions' ? 'bg-blue-700' : item.category === 'Groceries' ? 'bg-purple-700' : 'bg-gray-700'} `}></div>
                        {item.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <FullPagination
            // transactionsPerPage={transactionsPerPage}
            // handleRowsPerPageChange={handleRowsPerPageChange}
            // totalTransactions={cardRequests.length}
            totalPages={totalPages}
            paginate={paginate}
            currentPage={currentPage}
          />
          </>
          : 
          <div className='text-center text-xl text-gray-600'>No Transactions available</div>}
        </div>
      </div>
    </div>
  )
}

export default BankTransactionTable;