import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type GeneralDataProps = {
  currentTab: string,
  currentInvestmentsTab: string,
  currentSavingsTab: string,
  currentTransactionsTab: string,
  NGNBalance: number,
  GBPBalance: number,
  USDBalance: number,
  savings: {
    id: number,
    title: string,
    targetAmount: string,
    increaseAmount: string,
    fixedTime: string,
    status: string,
    progressPercentage: string,
    interestRate: string,
  }[],
  investments: {
    id: number,
    title: string,
    initials: string,
    category: string
    value: string,
    units: string,
    change: string,
    allocation: string
  }[],
}

export interface UserDataProps {
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
}

export interface LocalStorateUserDataProps {
  id: string,
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
}

export interface WalletBalanceInfoProps {
  item: {
    id: number;
    currency: string;
    currencyFlag: string;
    currencyInitials: string;
    balance: number;
  };
}

export interface QuickActionsProps {
  item: {
    id: number;
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
    text: string;
  };
}
