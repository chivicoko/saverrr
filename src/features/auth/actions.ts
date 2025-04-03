'use server';

import { destroyCookie } from 'nookies';
import { sendApiRequest } from '../../utils/api';
import { UserDataProps } from '@/types/base';


export const registerUser = async (userData: UserDataProps) => {
    return await sendApiRequest(
        'post',
        `${process.env.SAVERRR_API_URL}/register`,
        userData
    );
};


// INPUT DATA
// {
//     "name": "Victor Okoye",
//     "email": "victor@gmail.com",
//     "password": "password1234",
//     "phone_number": "09037847974",
//     "address": "No.5 Victor Okoye Boulivard"
// }


// RETURN JSON
// {
//     "data": {
//       "user": {
//         "name": "Victor Okoye",
//         "email": "victor@gmail.com",
//         "phone_number": "09037847974",
//         "address": "No.5 Victor Okoye Boulivard",
//         "updated_at": "2025-04-01T02:40:59.000000Z",
//         "created_at": "2025-04-01T02:40:59.000000Z",
//         "id": 13
//       },
//       "token": "621|o28rl9WCYzeZtuQPfJw3eKFo2YHNs5TONTGfKroQ634b5372"
//     },
//     "message": "Registration successful"
//   }

export const loginUser = async (emailAddress: string, password: string) => {
    return await sendApiRequest(
        'post',
        `${process.env.SAVERRR_API_URL}/login`,
        {
            "email": emailAddress,
            "password": password
        }
    );
};



// INPUT DATA
// {
//     "email": "victor@gmail.com",
//     "password": "password1234"
//   }


// RETURN DATA
// {
//     "data": {
//       "user": {
//         "id": 13,
//         "name": "Victor Okoye",
//         "email": "victor@gmail.com",
//         "phone_number": "09037847974",
//         "address": "No.5 Victor Okoye Boulivard",
//         "email_verified_at": null,
//         "created_at": "2025-04-01T02:40:59.000000Z",
//         "updated_at": "2025-04-01T02:40:59.000000Z"
//       },
//       "token": "622|GnLkGwh09Xdl7BzdBupFJdCdmjg2AlHKN5NOEa4h769adae0"
//     },
//     "message": "Login successful"
//   }


export const logoutUser = async () => {
    // dropLoggedInUserInfo();
    destroyCookie(null, 'accessToken');
    // router.push('/login');
};
