'use client';

import React, { useEffect, useRef, useState } from 'react'
import { availableBankOptions, TransactionsTabs } from '../../../data/base';
import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import TextAreaTwo from '@/components/inputs/TextAreaTwo';
import ButtonNeutral from '@/components/button/ButtonNeutral';
import { useGeneralData } from '@/context/GeneralDataContext';
import InputFieldFloatingLabel from '@/components/inputs/InputFieldFloatingLabel';

const TransferSuccessModal = dynamic(() => import("@/components/TransferSuccessModal"), {
  loading: () => <Loading/>,
});

const Transactions = () => {
  const [accountName, setAccountName] = useState<string>('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [accountBalance] = useState<number>(2698435);
  const [remark, setRemark] = useState<string>('');
  const [amountError, setAmountError] = useState<string>('');
  const [accountNumberError, setAccountNumberError] = useState<string>('');
  const { currentData, updateGeneralData } = useGeneralData();

  const bankOptionsRef = useRef(null);

    useEffect(() => {
        if (accountNumber.length > 0 && accountNumber.length !== 10) {
            setAccountNumberError('Invalid account number. Should be 10 digits');
            setAccountName('');
        } else if (amount && amount > currentData.NGNBalance) {
            setAmountError('Insufficient balance');
        } else {
            setAmountError('');
            setAccountNumberError('');
        }

        // if (bankOptionsRef.current !== null && (accountNumber.length === 10 && accountName === '')) {
        //   bankOptionsRef.current.focus();
        // }
    }, [accountNumber, amount, accountBalance, accountName, currentData.NGNBalance]);
  
  const handleTabToggle = (tab: string) => updateGeneralData({ ...currentData, currentTransactionsTab: tab });

  const handleModalToggle = () => {
    setIsLoading(true);
    if (isSuccessModalOpen === false) {
        if (!accountNumber) {
            setAccountNumberError('Enter your account number!');
            setIsLoading(false);
            return;
        }

        if (!amount) {
            setAmountError('Enter amount!');
            setIsLoading(false);
            return;
        }

        if (accountNumber.length > 0 && accountNumber.length !== 10) {
            setAccountNumberError('Invalid account number. Should be 10 digits');
            setAccountName('');
            return;
        } 
        
        if (amount && amount > accountBalance) {
            setAmountError('Insufficient balance');
            return;
        }

        const updatedBalance = currentData.NGNBalance - amount;
        updateGeneralData({ ...currentData, NGNBalance: updatedBalance });
        
        setAccountNumberError('');
        setAmountError('');
        setAccountName('');
        setAccountNumber('');
        setAmount(0);

    // setTimeout(() => {
        setIsSuccessModalOpen(true);
        // }, 1000);
    } else {
        setIsSuccessModalOpen(false);
    }
     
    setIsLoading(false);
  };
    
  if (isLoading) {
    return <Loading/>;
  };

  return (
    <section className='w-full pt-2 pb-4 space-y-2 md:space-y-5'>
        <div className="flex items-center justify-between mt-5">
            <h2 className='text-base font-bold'>Transfer</h2>
            {/* <ButtonNeutral btnText1='Invest' classes='px-3 py-2 rounded-radius-8 border text-sm' /> */}
        </div>

        <ul className='flex items-center gap border-b'>
        {TransactionsTabs.map(tab => 
            <li key={tab.id} className='group'>
            <button onClick={() => handleTabToggle(tab.title)} className={`cursor-pointer py- px-6`}>
                <span className="flex items-center gap-2 overflow-hidden">
                <span className="">
                    <span className={`${currentData.currentTransactionsTab === tab.title ? 'text-primary' : 'text-gray-700 group-hover:text-primary_hover'} text-base font-semibold`}>{tab.title}</span>
                    <div className={`${currentData.currentTransactionsTab === tab.title ? '-translate-x-0 bg-primary' : '-translate-x-full group-hover:-translate-x-0 bg-transparent group-hover:bg-primary_hover'} transform h-[1.7px] w-full transition-all duration-300 ease-in-out`}></div>
                </span>
                </span>
            </button>
            </li>
        )}
        </ul>
        
        {currentData.currentTransactionsTab === 'Transfer' && 
        <div className="w-full mt-3">
            <div className='w-full sm:w-96 rounded-radius-12 p-6 mx-auto bg-white border border-customGray space-y-3'>
                <h2 className='font-semibold pb-4'>Recipient Account</h2>
                <form className="w-full space-y-3">
                    <div className="w-full space-y-3">
                        <div className="w-full">
                            <InputFieldFloatingLabel required={true} disabled={accountName !== ''} type='number' onChange={(e) => setAccountNumber(e.target.value)} name="accountNumber" floatingLabel='Enter account number' classes='w-full' />
                            {(accountNumber.length === 10 && accountName === '') && 
                            <div className='w-full flex items-center justify-between gap-2'>
                                <p className='text-xs'>Select account info</p>
                                <select ref={bankOptionsRef} name='bank' id='bank' onChange={(e) => setAccountName(e.target.value)} className={`bg-transparent py-[1px] pr-1 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]`}>
                                    {availableBankOptions.map((item, index) => (
                                        <option key={index} value={item.accountName}>{item.bank}</option>
                                    ))}
                                </select>
                            </div>}
                            {accountName && <p className='text-end text-xs font-semibold'>{accountName}</p>}
                            {accountNumberError && <p className='text-center text-xs text-red-700'>{accountNumberError}</p>}
                        </div>
                        <div className="w-full">
                            <InputFieldFloatingLabel required={true} type='number' onChange={(e) => setAmount(parseInt(e.target.value))} name="amount" floatingLabel='Amount to be sent' classes='w-full' />
                            {amountError && <p className='text-center text-xs text-red-700'>{amountError}</p>}
                        </div>
                        
                        <TextAreaTwo floatingLabel='Remark' required={true} onChange={(e) => setRemark(e.target.value)} value={remark} name="remark" placeholderText='Any remarks? (Optional)' classes='w-full placeholder:text-center placeholder:pt-4' />
                        
                        <ButtonNeutral onClick={handleModalToggle} btnText1='Confirm' classes={`w-full py-2 px-3 text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary rounded-radius-8 cursor-pointer shadow-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none`} />
                    </div> 
                </form>
            </div>
        </div>}

        {currentData.currentTransactionsTab === 'Invest' && 
        <p>Investments</p>}
        
        {currentData.currentTransactionsTab === 'Save' && 
        <p>Savings</p>}

        {isSuccessModalOpen && <TransferSuccessModal handleModalToggle={handleModalToggle} />}
    </section>
  )
}

export default Transactions