'use client';

import ButtonNeutral from '@/components/button/ButtonNeutral';
import SelectInputField from '@/components/inputs/InputSelectField';
import { TransactionsAreaChartData, TransactionsAreaChartMonthsArray, TransactionsAreaChartMonthsArray2 } from '@/data/base';
import Image from 'next/image';
import { useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const InvestmentAreaChart = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(TransactionsAreaChartData.length - 6);

  const toggleChartExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${isExpanded ? 'fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-2 z-50' : ''} pt-1 transition-all duration-300 ease-in-out`}>
      <div className={`${isExpanded ? 'bg-white w-[95%] h-[97%] md:w-[80%] md:h-[90%] p-4 sm:p-7 md:p-10 rounded-xl' : ''} `}>
        <div className="flex items-center justify-between gap-4">
          <h3 className='text-textGrayDarker font-semibold'>Yearly Investment Flow</h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <SelectInputField
                valueArray={TransactionsAreaChartMonthsArray}
                name='startMonth'
                label=''
                defaultValue={start}
                onChange={(e) => setStart(parseInt(e.target.value))}
              />
              <span>-</span>
              <SelectInputField
                valueArray={TransactionsAreaChartMonthsArray2}
                name='stopMonth'
                label=''
                onChange={(e) => setStop(parseInt(e.target.value))}
                defaultValue={stop}
              />
            </div>

            {!isExpanded ?
              <ButtonNeutral
                classes='rounded-radius-4'
                onClick={toggleChartExpansion}
                icon1={<div className="relative size-[20px]" title='Expand to full screen view'><Image src="/icons/maximize-2.svg" fill alt="expansion icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
              /> :
              <button onClick={toggleChartExpansion} title='Reduce to normal screen view' className="p-2 rounded-full text-3xl hover:text-red-700 hover:rotate-90 hover:translate-y-[3.5px] hover:translate-x-[3.5px] transition-all duration-300 ease-in-out">
                &times;
              </button>
            }
          </div>
        </div>
        
        <div className={`${isExpanded ? 'h-[80vh] md:h-[72vh]' : 'h-[42vh]'} w-full flex items-center justify-between gap-6 pt-3 pb-1`}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={730} height={250} data={TransactionsAreaChartData.slice(start, stop)} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
              <defs>
                {/* <linearGradient id="colorDeposit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                </linearGradient> */}
                <linearGradient id="colorWithdrawal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f87171" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fontSize: isExpanded ? 15 : 12, fill: '#072635' }} axisLine={{ stroke: 'transparent' }} tickLine={{ stroke: 'transparent' }} />
              <YAxis tick={{ fontSize: isExpanded ? 15 : 12, fill: '#072635' }} axisLine={{ stroke: 'transparent' }} tickLine={{ stroke: 'transparent' }} />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Tooltip contentStyle={{borderRadius: '10px', borderColor: 'gray'}} />
              {/* <Area type="monotone" dataKey="Deposit" stroke="#4ade80" fillOpacity={1} fill="url(#colorDeposit)" /> */}
              <Area type="monotone" dataKey="Withdrawal" stroke="#f87171" fillOpacity={1} fill="url(#colorWithdrawal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default InvestmentAreaChart;