'use client';

import React, { useState } from 'react'
import InputFieldFloatingLabel from '../inputs/InputFieldFloatingLabel'
import ButtonOne from '../button/ButtonOne'
import { savingsFormSchema, SavingsFormType } from '@/features/auth/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useGeneralData } from '@/context/GeneralDataContext';
import { showToast } from '../HotToast';
import { formatCurrency, parseFormattedAmount } from '@/utils/numberFormatter';

const SavingsForm = ({data}: {data?: SavingsFormType}) => {
    const [inputAmount, setInputAmount] = useState('');
    const { currentData, updateGeneralData } = useGeneralData();

    const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCurrency(e.target.value);
        setInputAmount(formattedValue);
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm<SavingsFormType>({
        resolver: zodResolver(savingsFormSchema),
        defaultValues: data,
    });

    const onFormSubmit = handleSubmit(async (formData) => {
        try {
            const parsedAmount = parseFormattedAmount(formData.amount);

            if (!isNaN(parsedAmount) && parsedAmount > 0) {
                const updatedFormData: SavingsFormType = {
                    ...formData,
                    amount: parsedAmount.toString(),
                };

                const updatedSavingsData = {
                    id: Math.random(),
                    title: formData.title,
                    targetAmount: updatedFormData.amount,
                    increaseAmount: formData.interestRate,
                    fixedTime: formData.duration,
                    status: 'Just Beginning',
                    interestRate: formData.interestRate,
                    progressPercentage: '0.5',
                };
    
                updateGeneralData({ ...currentData, currentSavingsTab: 'List', savings: [...currentData.savings, updatedSavingsData] });
                showToast('Savings goal has been set successfully!');
            } else {
                console.error('Invalid amount, please enter a valid number.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });

  return (
    <div className="w-full">
        <div className='mt-12 w-full sm:w-96 md:w-2/3 rounded-radius-12 p-6 mx-auto bg-white border border-customGray space-y-3'>
            <h2 className='font-semibold pb-4'>Add Savings Goal</h2>
            <form onSubmit={onFormSubmit} className="w-full space-y-3">
                <div className="w-full space-y-3">
                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-2">
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("title")}
                            error={errors.title}
                            floatingLabel='Title'
                            classes='flex-1'
                        />
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("amount")}
                            error={errors.amount}
                            floatingLabel='Monthly Contribution'
                            classes='flex-1'
                            
                            onChange={onCodeChange}
                            value={inputAmount}
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-2">
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("duration")}
                            error={errors.duration}
                            floatingLabel='Time Period (Months)'
                            classes='flex-1'
                        />
                        <InputFieldFloatingLabel
                            {...register("interestRate")}
                            error={errors.interestRate}
                            floatingLabel='Interest Rate (% APY)'
                            classes='flex-1'
                        />
                    </div>
                    
                    <ButtonOne type='submit' classes='w-full py-2 px-8 text-sm font-semidbold' btnText1={isLoading ? 'Loading...' : 'Submit'} />
                </div> 
            </form>
        </div>
    </div>
  )
}

export default SavingsForm