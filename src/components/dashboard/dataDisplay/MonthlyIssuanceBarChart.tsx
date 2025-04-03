'use client';

import ButtonNeutral from '@/components/button/ButtonNeutral';
import { MonthlyIssuance } from '@/data/base';
import Image from 'next/image';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MonthlyIssuanceBarChart = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChartExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${isExpanded ? 'fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-2 z-50' : ''} pt-1 transition-all duration-300 ease-in-out`}>
      <div className={`${isExpanded ? 'bg-white w-[95%] h-[97%] md:w-[80%] md:h-[90%] p-4 sm:p-7 md:p-10 rounded-xl' : ''} `}>
        <div className="flex items-center justify-between gap-4">
          <h3 className='text-textGrayDarker'>Current Currency Amount</h3>
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
        
        <div className={`${isExpanded ? 'h-[80vh] md:h-[70vh]' : 'h-[38.5vh]'} w-full flex items-center justify-between gap-6 pt-3 pb-1`}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={isExpanded ? 600 : 300}
              data={MonthlyIssuance}
              margin={{
                top: 20,
                right: 10,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: isExpanded ? 15 : 12, fill: '#072635' }} axisLine={false} tickLine={{ stroke: 'transparent' }} />
              <YAxis tick={{ fontSize: isExpanded ? 15 : 12, fill: '#072635' }} axisLine={false} tickLine={{ stroke: 'transparent' }} />
              <Tooltip contentStyle={{borderRadius: '10px', borderColor: 'gray'}} />
              <Bar dataKey="NGN" stackId="a" fill="#550022" maxBarSize={40} legendType='circle' radius={[0, 0, 0, 0]} />
              <Bar dataKey="EUR" stackId="a" fill="#880022" maxBarSize={40} legendType='circle' radius={[0, 0, 0, 0]} />
              <Bar dataKey="GBP" stackId="a" fill="#fecaca" maxBarSize={40} legendType='circle' radius={[0, 0, 0, 0]} />
              <Bar dataKey="USD" stackId="a" fill="#fee2e2" maxBarSize={40} legendType='circle' radius={[10, 10, 0, 0]} />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default MonthlyIssuanceBarChart;