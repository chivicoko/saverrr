import { CreditCardOutlined, AssuredWorkloadOutlined, HomeOutlined, CurrencyExchangeOutlined, Add, Send } from '@mui/icons-material';

export const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        url: '/',
        icon: HomeOutlined,
    },
    {
        id: 2,
        title: "Investment",
        url: '/investment',
        icon: AssuredWorkloadOutlined,
    },
    {
        id: 3,
        title: "Savings",
        url: '/savings',
        icon: CreditCardOutlined,
    },
    {
        id: 4,
        title: "Transactions",
        url: '/transactions',
        icon: CurrencyExchangeOutlined,
    },
];

export const recentCardRequestTableHead = [
    {id: 1, title: "Transaction"},
    {id: 2, title: "Amount"},
    {id: 3, title: "Status"},
    {id: 4, title: "Date"},
    {id: 5, title: "Category"},
];

export const cardRequests = [
    {id: 1, transaction: "Spotify", amount: '1,500', date: 'Thur 13:21pm', status: 'Success', category: 'Subscriptions', avatar: '2.jpeg' },
    {id: 2, transaction: "Alexa Doe", amount: '500', date: 'Wed 12:45pm', status: 'Declined', category: 'Deposit', avatar: 'default_avatar.png' },
    {id: 3, transaction: "Figma", amount: '1,500', date: 'Mon 02:30pm', status: 'Processing', category: 'Income', avatar: '3.jpeg' },
    {id: 4, transaction: "Fresh F&V", amount: '300', date: 'Fri 14:15pm', status: 'Success', category: 'Groceries', avatar: '5.jpeg' },
    {id: 5, transaction: "Sam Sulek", amount: '1,500', date: 'Wed 00:20pm', status: 'Processing', category: 'Food', avatar: 'default_avatar.png' },
    {id: 6, transaction: "Spotify", amount: '1,500', date: 'Fri 02:20pm', status: 'Success', category: 'Subscriptions', avatar: '2.jpeg' },
    {id: 7, transaction: "Alexa Doe", amount: '500', date: 'Mon 13:40pm', status: 'Declined', category: 'Deposit', avatar: 'default_avatar.png' },
    {id: 8, transaction: "Figma", amount: '1,500', date: 'Wed 22:25pm', status: 'Processing', category: 'Income', avatar: '3.jpeg' },
    {id: 9, transaction: "Fresh F&V", amount: '300', date: 'Thur 15:01pm', status: 'Success', category: 'Groceries', avatar: '5.jpeg' },
    {id: 10, transaction: "Sam Sulek", amount: '1,500', date: 'Sun 17:11pm', status: 'Processing', category: 'Food', avatar: 'default_avatar.png' },
];


export const SavingsTabs = [
    {id: 1, title: "List"},
    {id: 2, title: "Chart"},
    {id: 3, title: "Add Savings Goal"},
];

export const savingsDataTableHead = [
    {id: 1, title: "Title"},
    {id: 2, title: "Target Amount"},
    {id: 3, title: "Status"},
    {id: 4, title: "Fixed Time (Months)"},
    {id: 5, title: "Progress (%)"},
    {id: 6, title: "Interest Rate (%)"},
    {id: 7, title: "Action"},
];

export const savingsData = [
    {id: 1, title: "Emergency Fund", targetAmount: '10,000,000', increaseAmount: '5,500', fixedTime: '12 (Jan 2026)', status: 'Completed', interestRate: '3.5', progressPercentage: '99.5' },
    {id: 2, title: "Vacation to Hawai", targetAmount: '2,000,000', increaseAmount: '5,000', fixedTime: '20 (Dec 2026)', status: 'Just Beginning', interestRate: '1.8', progressPercentage: '18' },
    {id: 3, title: "New Car", targetAmount: '5,000,000', increaseAmount: '5,500', fixedTime: '24 (Mar 2027)', status: 'Half Way', interestRate: '2.5', progressPercentage: '56' },
    {id: 4, title: "New House", targetAmount: '300,000,000', increaseAmount: '20,000', fixedTime: '36 (July 2027)', status: 'Just Beginning', interestRate: '4.5', progressPercentage: '9' },
];


export const investmentsTabs = [
    {id: 1, title: "List"},
    {id: 2, title: "Chart"},
    {id: 3, title: "Add New Investment"},
];

export const investmentsDataTableHead = [
    {id: 1, title: "Title"},
    {id: 2, title: "Value"},
    {id: 3, title: "Change"},
    {id: 4, title: "Allocation"},
    {id: 5, title: "Action"},
];

export const investmentsData = [
    {id: 1, title: "Renewable Energy", initials: 'RNWL', category: 'increase', value: '4,350.09', units: '10.5', change: '3.5', allocation: '99.5' },
    {id: 2, title: "Global Bonds", initials: 'BOND', category: 'increase', value: '2,300.80', units: '15.05', change: '1.8', allocation: '18' },
    {id: 3, title: "Real Estate Trust", initials: 'REIT', category: 'decrease', value: '1,100.50', units: '30.5', change: '2.5', allocation: '56' },
    {id: 4, title: "S&P 500 ETF", initials: 'SPY', category: 'increase', value: '3,085.00', units: '45', change: '4.5', allocation: '9' },
];

export const budgets = [
    {id: 1, text1: "Subscriptions", text2: '$28 left', icon: 'setting-05.svg', bg: 'gray', overallColor: 'blue', progress: '25' },
    {id: 2, text1: "Food and booze", text2: '$120 left', icon: 'package-check.svg', bg: 'orange', overallColor: 'green', progress: '75' },
    {id: 3, text1: "Savings", text2: '$50 left', icon: 'credit-card-pos.svg', bg: 'green', overallColor: 'red', progress: '40' },
];

export const INITIAL_GENERAL_DATA = {
    currentTab: '/',
    currentInvestmentsTab: 'List',
    currentSavingsTab: 'List',
    currentTransactionsTab: 'Transfer',
    NGNBalance: 22345974.37,
    GBPBalance: 4234565.46,
    USDBalance: 7024344.90,
    savings: savingsData,
    investments: investmentsData
}

export const availableBankOptions = [
    {id: 1, accountName: "Maleek Umar Buhari", bank: 'United Bank of Africa (UBA)', accountNumber: '9847635637'},
    {id: 2, accountName: "Onyeka Onwenu Veronica", bank: 'First Bank of Nigeria (FBN)', accountNumber: '8374649072'},
    {id: 3, accountName: "Vik John Basil", bank: 'Zenith Bank', accountNumber: '0947483622'},
    {id: 4, accountName: "John Doe Mark", bank: 'Fidelity Bank', accountNumber: '3384995787'},
    {id: 5, accountName: "Ifeanyi Hyacinth Okafor", bank: 'Union Bank', accountNumber: '0049044453'},
    {id: 6, accountName: "Mark Anthony Odumodu", bank: 'Access Bank', accountNumber: '2849111758'},
];

export const users = [
    { id: 1, organization: 'Lendsqr', username: 'Grace Effiom', email: 'grace@lendsqr.com', phoneNumber: '07038474444', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'active' },
    { id: 2, organization: 'Irorun', username: 'Adedeji Joy', email: 'joy@lendsqr.com', phoneNumber: '07094833345', dateJoined: 'May 20, 2021 09:35 AM', status: 'inactive' },
    { id: 3, organization: 'Relith', username: 'Debby Ogana', email: 'debby@relith.com', phoneNumber: '07003957771', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'active' },
    { id: 4, organization: 'McCkiney', username: 'Ada Imoke', email: 'ada@mcckiney.com', phoneNumber: '07038474444', dateJoined: 'Sept 22, 2022 01:00 PM', status: 'blacklisted' },
    { id: 5, organization: 'Flektr', username: 'Emma Vin', email: 'emma@flektr.com', phoneNumber: '07003957771', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'active' },
    { id: 6, organization: 'Lendstar', username: 'Zara Grace', email: 'zara@lendstar.com', phoneNumber: '07094833345', dateJoined: 'May 20, 2021 09:35 AM', status: 'pending' },
    { id: 7, organization: 'Amliss', username: 'Excel Adindu', email: 'excel@amliss.com', phoneNumber: '07038474444', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'active' },
    { id: 8, organization: 'Hexasphere', username: 'Ify Okoye', email: 'ify@hexasphere.com', phoneNumber: '07003957771', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'blacklisted' },
    { id: 9, organization: 'Agubas', username: 'Max Bonny', email: 'max@agubas.com', phoneNumber: '07038474444', dateJoined: 'Sept 22, 2022 01:00 PM', status: 'inactive' },
    { id: 10, organization: 'Innova', username: 'Tosin Mark', email: 'tosin@innova.com', phoneNumber: '07094833345', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'pending' },
]

export const currentUserInfo = {
    id: '',
    name: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    created_at: '2025-03-23T16:12:51.656Z',
    updated_at: '2025-03-23T16:12:51.656Z',
}
 
export const walletBalanceInfo = [
    {
        id: 1,
        currency: '£',
        currencyInitials: 'GBP',
        currencyFlag: 'canada.svg.webp',
        balance: 4234565.46
    },
    {
        id: 2,
        currency: '₦',
        currencyInitials: 'NGN',
        currencyFlag: 'nigerian_flag.jpg',
        balance: 22345974.37
    },
    {
        id: 3,
        currency: '$',
        currencyInitials: 'USD',
        currencyFlag: 'us.jpg',
        balance: 7024344.90
    },
];

export const quickActions = [
    {
        id: 1,
        icon: Add,
        text: 'Fund Wallet',
    },
    {
        id: 2,
        icon: Send,
        text: 'Transfer',
    },
];

export const dashboardTabs = [
    {id: 1, title: "Recent Transactions"},
    {id: 2, title: "Summary Chart"},
];

export const TransactionsTabs = [
    {id: 1, title: "Transfer"},
    {id: 2, title: "Invest"},
    {id: 3, title: "Save"},
];

export const MonthlyIssuance = [
    { NGN: 90, USD: 60, EUR: 52, GBP: 42, month: 'May' },
    { NGN: 65, USD: 45, EUR: 40, GBP: 30, month: 'Jun' },
    { NGN: 55, USD: 35, EUR: 31, GBP: 21, month: 'Jul' },
    { NGN: 70, USD: 60, EUR: 40, GBP: 320, month: 'Aug' },
    { NGN: 89, USD: 69, EUR: 59, GBP: 44, month: 'Sept' },
    { NGN: 48, USD: 28, EUR: 22, GBP: 20, month: 'Oct' },
    { NGN: 92, USD: 82, EUR: 52, GBP: 32, month: 'Nov' },
];

export const TransactionsAreaChartMonthsArray = [
    {num: '0', text: 'January'},
    {num: '1', text: 'Fabruary'},
    {num: '2', text: 'March'},
    {num: '3', text: 'April'},
    {num: '4', text: 'May'},
    {num: '5', text: 'June'},
    {num: '6', text: 'July'},
    {num: '7', text: 'August'},
    {num: '8', text: 'September'},
    {num: '9', text: 'October'},
    {num: '10', text: 'November'},
    {num: '11', text: 'December'},
]

export const TransactionsAreaChartMonthsArray2 = [
    {num: '1', text: 'January'},
    {num: '2', text: 'Fabruary'},
    {num: '3', text: 'March'},
    {num: '4', text: 'April'},
    {num: '5', text: 'May'},
    {num: '6', text: 'June'},
    {num: '7', text: 'July'},
    {num: '8', text: 'August'},
    {num: '9', text: 'September'},
    {num: '10', text: 'October'},
    {num: '11', text: 'November'},
    {num: '12', text: 'December'},
]

export const TransactionsAreaChartData = [
    {
      "name": "Jan",
      "Deposit": 7400,
      "Withdrawal": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "Deposit": 6398,
      "Withdrawal": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "Deposit": 5800,
      "Withdrawal": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "Deposit": 3508,
      "Withdrawal": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "Deposit": 8000,
      "Withdrawal": 4800,
      "amt": 2181
    },
    {
      "name": "June",
      "Deposit": 3000,
      "Withdrawal": 3800,
      "amt": 2500
    },
    {
      "name": "July",
      "Deposit": 2300,
      "Withdrawal": 4300,
      "amt": 2100
    },
    {
      "name": "Aug",
      "Deposit": 4300,
      "Withdrawal": 7300,
      "amt": 2100
    },
    {
      "name": "Sept",
      "Deposit": 8300,
      "Withdrawal": 6300,
      "amt": 2100
    },
    {
      "name": "Oct",
      "Deposit": 6300,
      "Withdrawal": 7300,
      "amt": 2100
    },
    {
      "name": "Nov",
      "Deposit": 7100,
      "Withdrawal": 7900,
      "amt": 2100
    },
    {
      "name": "Dec",
      "Deposit": 700,
      "Withdrawal": 9300,
      "amt": 2100
    }
]