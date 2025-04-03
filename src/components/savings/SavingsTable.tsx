'use client';

import FullPagination from '@/components/pagination/FullPagination';
import { savingsDataTableHead } from '../../data/base';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonNeutral from '@/components/button/ButtonNeutral';
import Search from '../Search';
import { useGeneralData } from '@/context/GeneralDataContext';
import { DeleteOutline } from '@mui/icons-material';

const SavingsTable = () => {
  // ============== pagination =================
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transactionsPerPage, setTransactionsPerPage] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const { currentData, updateGeneralData } = useGeneralData();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430 && !isExpanded) {
        setTransactionsPerPage(3);
      } else if (window.innerWidth <= 640 && !isExpanded) {
        setTransactionsPerPage(5);
      } else {
        if (window.innerHeight <= 731 && !isExpanded) {
          setTransactionsPerPage(3);
        } else if (window.innerHeight <= 810 && !isExpanded) {
          setTransactionsPerPage(4);
        } else if (window.innerHeight <= 1180 && !isExpanded) {
          setTransactionsPerPage(7);
        }  else {
          setTransactionsPerPage(12);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [transactionsPerPage, isExpanded]);

  // Search
  const filteredData = currentData.savings.filter((data) => {
    return (
      data.title.toLowerCase().includes(searchText.toLowerCase())
      || data.targetAmount.toLowerCase().includes(searchText.toLowerCase())
      || data.fixedTime.toLowerCase().includes(searchText.toLowerCase())
      || data.status.toLowerCase().includes(searchText.toLowerCase())
      || data.progressPercentage.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const indexOfLastProduct = currentPage * transactionsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - transactionsPerPage;
  const currentSavingsData = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredData.length / transactionsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  // ============== pagination =================

  const toggleChartExpansion = () => {
    setIsExpanded((prev) => !prev);
    
    if (isExpanded) {
      setTransactionsPerPage(7);
    }
  };

  const deleteSavingsGoal = (id: number) => {
    const newSavingsGoalArray = currentData.savings.filter(item => item.id !== id);
    updateGeneralData({ ...currentData, currentSavingsTab: 'List', savings: newSavingsGoalArray });
  };

  return (
    <div className={`${isExpanded ? 'fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-2 z-50' : ''} pt-1 transition-all duration-300 ease-in-out`}>
      <div className={`${isExpanded ? 'bg-white w-[95%] h-[97%] md:w-[80%] md:h-[90%] p-4 sm:p-7 md:p-10 rounded-xl' : ''} `}>
        <div className="flex items-center justify-between gap-4">
          <h3 className='text-textGrayDarker'>Recent Savings</h3>
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

        <div className="flex flex-col items-center justify-between gap-1 pt-3">
          <div className="w-full overflow-x-scroll custom-scrollbar">
            <Search searchText={searchText} setSearchText={setSearchText} />

            {currentSavingsData && currentSavingsData.length > 0 ?
            <table className="min-w-full custom-scrollbar">
              <thead className="bg-transparent border-b border-customGray">
                <tr className="border-t divide-x divide-customGray">
                  {savingsDataTableHead.map(item => (
                    <th key={item.id} className={`${isExpanded ? "py-[11px] text-[13px] sm:py-[14px] sm:text-[14px]" : "py-[11px] text-[13px]"} whitespace-nowrap px-2 ${item.title === 'Title' ? 'text-start pl-8' : 'text-center'} text-textGray capitalize tracking-wider`}>{item.title}</th>
                  ))}
                </tr>
              </thead>
                <tbody className="divide-y divide-neutral-200">
                  {currentSavingsData.map((item, index) => (
                    <tr key={item.id} className={`my-2 even:bg-[#f7f3f3] odd:bg-[#f6f8f2]`}>
                      <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                        <span className='flex items-center gap-4'>
                          <span>{index + 1}.</span>
                          <span>{item.title}</span>
                        </span>
                      </td>
                      <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                      ₦{item.targetAmount}
                      </td>
                      <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                        <span className={`w-fit flex items-center gap-1 px-1 mx-auto ${item.status === 'Completed' ? 'text-green-700 border-green-300 bg-green-100' : item.status === 'Half Way' ? 'text-orange-700 border-orange-300 bg-orange-100' : 'text-gray-700 border-gray-300 bg-gray-100'} border rounded-full`}>
                          <div className={`size-1 rounded-full ${item.status === 'Completed' ? 'bg-green-700' : item.status === 'Half Way' ? 'bg-orange-700' : 'bg-gray-700'} `}></div>
                          {item.status}
                        </span>
                      </td>
                      <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>{item.fixedTime}</td>
                      <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                        {item.progressPercentage}%
                      </td>
                      <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                        {item.interestRate}%
                      </td>
                      <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[7px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                        <ButtonNeutral onClick={() => deleteSavingsGoal(item.id)} icon2={<DeleteOutline style={{fontSize: '20px'}} />} classes='text-sm bg-secondary_lighter hover:bg-secondary text-neutral-600 hover:text-primary transition-all duration-200 eas-in-out rounded-full size-8' />
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
            : 
            <div className='text-center text-xl text-gray-600 py-6'>No Savings available</div>}
          </div>
          
          <FullPagination
            totalPages={totalPages}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default SavingsTable;