'use client';

import React, { useState } from 'react'
import InputFieldFloatingLabel from '../inputs/InputFieldFloatingLabel'
import ButtonOne from '../button/ButtonOne'
import { investmentFormSchema, InvestmentFormType } from '@/features/auth/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useGeneralData } from '@/context/GeneralDataContext';
import { showToast } from '../HotToast';
import { formatCurrency, parseFormattedAmount } from '@/utils/numberFormatter';
import SelectInputField from '../inputs/InputSelectField';

const InvestmentForm = ({data}: {data?: InvestmentFormType}) => {
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
    } = useForm<InvestmentFormType>({
        resolver: zodResolver(investmentFormSchema),
        defaultValues: data,
    });

    const onFormSubmit = handleSubmit(async (formData) => {
        try {
            const parsedAmount = parseFormattedAmount(formData.amount);

            if (!isNaN(parsedAmount) && parsedAmount > 0) {
                const updatedFormData: InvestmentFormType = {
                    ...formData,
                    amount: parsedAmount.toString(),
                };

                const updatedInvestmentData = {
                    id: Math.random(),
                    title: formData.title,
                    initials: formData.initials,
                    category: formData.category,
                    value: updatedFormData.amount,
                    units: formData.units,
                    change: formData.change,
                    allocation: formData.allocation
                };
    
                updateGeneralData({ ...currentData, currentInvestmentsTab: 'List', investments: [...currentData.investments, updatedInvestmentData] });
                showToast('Investment has been made successfully!');
            } else {
                console.error('Invalid amount, please enter a valid number.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });

  return (
    <div className="w-full">
        <div className='mt-12 w-full md:w-[95%] rounded-radius-12 p-6 mx-auto bg-white border border-customGray space-y-3'>
            <h2 className='font-semibold pb-4'>Add Investment</h2>
            <form onSubmit={onFormSubmit} className="w-full space-y-3">
                <div className="w-full space-y-3">
                    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-2">
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("title")}
                            error={errors.title}
                            floatingLabel='Title'
                            classes='flex-1'
                        />
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("initials")}
                            error={errors.initials}
                            floatingLabel='initials'
                            classes='flex-1'
                        />
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("amount")}
                            error={errors.amount}
                            floatingLabel='Monthly Contribution (₦)'
                            classes='flex-1'
                            
                            onChange={onCodeChange}
                            value={inputAmount}
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-2">
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("units")}
                            error={errors.units}
                            floatingLabel='Units'
                            classes='flex-1'
                        />
                        <InputFieldFloatingLabel
                            required={true}
                            {...register("change")}
                            error={errors.change}
                            floatingLabel='Change'
                            classes='flex-1'
                        />
                        <InputFieldFloatingLabel
                            {...register("allocation")}
                            error={errors.allocation}
                            floatingLabel='Allocation (%)'
                            classes='flex-1'
                        />
                    </div>

                    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-2">
                        <SelectInputField
                            {...register("category")}
                            error={errors.category}
                            defaultValue={data?.category}
                            name="category"
                            placeholderText='Select Category'
                            valueArray={[{text: 'increase'}, {text: 'decrease'}]}
                            classes='flex-1'
                        />
                        
                        <ButtonOne type='submit' classes='flex-1 py-2 px-8 text-sm font-semidbold' btnText1={isLoading ? 'Loading...' : 'Submit'} />
                    </div>
                </div> 
            </form>
        </div>
    </div>
  )
}

export default InvestmentForm;