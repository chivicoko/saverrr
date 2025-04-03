'use client';

import ButtonNeutral from '../button/ButtonNeutral';
import BankTransactionTable from './dataDisplay/BankTransactionTable';
import { useGeneralData } from '@/context/GeneralDataContext';
import { dashboardTabs, INITIAL_GENERAL_DATA } from '@/data/base';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import MonthlyIssuanceBarChart from './dataDisplay/MonthlyIssuanceBarChart';
import OverviewAreaChart from './dataDisplay/OverviewAreaChart';

const Dashboard = () => {
  const {currentTab, setCurrentData} = useGeneralData();
  const [activeTab, setActiveTab] = useState<string>('Recent Transactions');

  useEffect(() => {
    setCurrentData(INITIAL_GENERAL_DATA);
    localStorage.setItem('currentData', JSON.stringify(INITIAL_GENERAL_DATA));
  }, [setCurrentData]);

  const handleTabToggle = (tab: string) => setActiveTab(tab);

  return (
    <div className='w-full pt-2 pb-4 space-y-2 md:space-y-6'>
      <Toaster position="top-center" reverseOrder={false} />

      {currentTab === '/' && 
      <div className='space-y-2'>
        <div className="flex items-center justify-between mt-6">
          <h2 className='text-base font-bold'>Overview of Recent Transactions</h2>
          <ButtonNeutral btnText1='View all' classes='px-3 py-2 rounded-radius-8 border text-sm' />
        </div>

        <ul className='flex items-center gap border-b'>
          {dashboardTabs.map(tab => 
            <li key={tab.id} className='group'>
              <button onClick={() => handleTabToggle(tab.title)} className={`cursor-pointer py- px-6`}>
                <span className="flex items-center gap-2 overflow-hidden">
                  <span className="">
                    <span className={`${activeTab === tab.title ? 'text-primary' : 'text-gray-700 group-hover:text-primary_hover'} text-base font-semibold`}>{tab.title}</span>
                    <div className={`${activeTab === tab.title ? '-translate-x-0 bg-primary' : '-translate-x-full group-hover:-translate-x-0 bg-transparent group-hover:bg-primary_hover'} transform h-[1.7px] w-full transition-all duration-300 ease-in-out`}></div>
                  </span>
                </span>
              </button>
            </li>
          )}
        </ul>

        {activeTab === 'Recent Transactions' && 
        
        <div className="flex flex-col xl:flex-row items-start gap-3 py-3">
          <div className='w-full xl:w-1/2 rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
            <BankTransactionTable />
          </div>
          
          <div className='w-full xl:w-1/2 rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
            <MonthlyIssuanceBarChart />
          </div>
        </div>
        }
        {activeTab === 'Summary Chart' && 
        <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
          <OverviewAreaChart />
        </div>}
      </div>}
    </div>
  )
}

export default Dashboard;