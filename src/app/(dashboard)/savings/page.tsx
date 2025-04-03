'use client';

import SavingsAreaChart from '@/components/savings/SavingsAreaChart';
import SavingsForm from '@/components/savings/SavingsForm';
import SavingsTable from '@/components/savings/SavingsTable';
import { useGeneralData } from '@/context/GeneralDataContext';
import { SavingsTabs } from '@/data/base';
import { Toaster } from 'react-hot-toast';

const Savings = () => {
    const { currentData, updateGeneralData } = useGeneralData();

    const handleTabToggle = (tab: string) => updateGeneralData({ ...currentData, currentSavingsTab: tab });
  
    return (
      <div className='w-full pt-2 pb-4 space-y-2 md:space-y-5'>
        <Toaster position="top-center" reverseOrder={false} />
  
        <div className='space-y-2 mt-7'>
          <h2 className='text-base font-bold'>Savings</h2>
  
          <ul className='flex items-center gap border-b'>
            {SavingsTabs.map(tab => 
              <li key={tab.id} className='group'>
                <button onClick={() => handleTabToggle(tab.title)} className={`cursor-pointer py- px-6`}>
                  <span className="flex items-center gap-2 overflow-hidden">
                    <span className="">
                      <span className={`${currentData.currentSavingsTab === tab.title ? 'text-primary' : 'text-gray-700 group-hover:text-primary_hover'} text-base font-semibold`}>{tab.title}</span>
                      <div className={`${currentData.currentSavingsTab === tab.title ? '-translate-x-0 bg-primary' : '-translate-x-full group-hover:-translate-x-0 bg-transparent group-hover:bg-primary_hover'} transform h-[1.7px] w-full transition-all duration-300 ease-in-out`}></div>
                    </span>
                  </span>
                </button>
              </li>
            )}
          </ul>
  
          {currentData.currentSavingsTab === 'List' &&   
            <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
                <SavingsTable />
            </div>}

          {currentData.currentSavingsTab === 'Chart' && 
            <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
                <SavingsAreaChart />
            </div>}

          {currentData.currentSavingsTab === 'Add Savings Goal' && <SavingsForm />}

        </div>
    </div>
  )
}

export default Savings