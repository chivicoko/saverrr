import { z } from "zod";

// Registeration
export const registerSchema = z.object({
    name: z.string().min(1, { message: "First name is required!" }),
    email: z.string().min(3, { message: "Email is required!" }).email({ message: "Invalid email address!" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long!" }),
    phone_number: z.string().min(1, { message: "Phone number is required!" }),
    address: z.string().min(1, { message: "Home address is required!" }),
});
  
export type RegisterType = z.infer<typeof registerSchema>;
  

// Login
export const loginSchema = z.object({
    email: z.string().email({message: 'Invalid email address!'}),
    password: z.string().min(8, { message: 'Password must be up to 8 characters!' }),

});

export type LoginType = z.infer<typeof loginSchema>;



export const fundWalletAmountSchema = z.object({
    amount: z.string().min(1, { message: "Amount must be at least 1 number long!" }),
});

export type FundWalletAmountType = z.infer<typeof fundWalletAmountSchema>;



export const investmentFormSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 5 characters long!" }),
    initials: z.string().min(2, { message: "Title must be at least 5 characters long!" }),
    amount: z.string().min(1, { message: "Amount must be at least 1 digit long!" }),
    units: z.string().min(1, { message: "Enter the duration of the savings goal!" }),
    change: z.string().min(1, { message: "Enter the duration of the savings goal!" }),
    allocation: z.string().min(1, { message: "Enter the duration of the savings goal!" }),
    category: z.enum(["increase", "decrease"], { message: "Category is required!" }),
});

export type InvestmentFormType = z.infer<typeof investmentFormSchema>;



export const savingsFormSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 5 characters long!" }),
    amount: z.string().min(1, { message: "Amount must be at least 1 digit long!" }),
    duration: z.string().min(1, { message: "Enter the duration of the savings goal!" }),
    interestRate: z.string(),
});

export type SavingsFormType = z.infer<typeof savingsFormSchema>;



