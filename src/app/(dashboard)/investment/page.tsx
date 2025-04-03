'use client';

import InvestmentAreaChart from '@/components/investment/InvestmentAreaChart';
import InvestmentForm from '@/components/investment/InvestmentForm';
import InvestmentTable from '@/components/investment/InvestmentTable';
import { useGeneralData } from '@/context/GeneralDataContext';
import { investmentsTabs } from '@/data/base';
import { Toaster } from 'react-hot-toast';

const Investment = () => {
    const { currentData, updateGeneralData } = useGeneralData();
      
    const handleTabToggle = (tab: string) => updateGeneralData({ ...currentData, currentInvestmentsTab: tab });
  
    return (
      <div className='w-full pt-2 pb-4 space-y-2 md:space-y-5'>
        <Toaster position="top-center" reverseOrder={false} />
  
        <div className='space-y-2 mt-7'>
          <h2 className='text-base font-bold'>Investments</h2>
  
          <ul className='flex items-center gap border-b'>
            {investmentsTabs.map(tab => 
              <li key={tab.id} className='group'>
                <button onClick={() => handleTabToggle(tab.title)} className={`cursor-pointer py- px-6`}>
                  <span className="flex items-center gap-2 overflow-hidden">
                    <span className="">
                      <span className={`${currentData.currentInvestmentsTab === tab.title ? 'text-primary' : 'text-gray-700 group-hover:text-primary_hover'} text-base font-semibold`}>{tab.title}</span>
                      <div className={`${currentData.currentInvestmentsTab === tab.title ? '-translate-x-0 bg-primary' : '-translate-x-full group-hover:-translate-x-0 bg-transparent group-hover:bg-primary_hover'} transform h-[1.7px] w-full transition-all duration-300 ease-in-out`}></div>
                    </span>
                  </span>
                </button>
              </li>
            )}
          </ul>
  
          {currentData.currentInvestmentsTab === 'List' &&   
            <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
              <InvestmentTable />
            </div>}

          {currentData.currentInvestmentsTab === 'Chart' && 
            <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
              <InvestmentAreaChart />
            </div>}

          {currentData.currentInvestmentsTab === 'Add New Investment' && <InvestmentForm />}

        </div>
    </div>
  )
}

export default Investment