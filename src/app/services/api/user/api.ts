import { baseApi } from '../../baseApi';
import { User } from '../../types';
import {
    ILoginRequest,
    ILoginResponse,
    IRegisterRequest,
    IRegisterResponse,
    IUpdateUserRequest
} from './types';

export const userApiService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<ILoginResponse, ILoginRequest>({
            query: (data: ILoginRequest) => ({
                url: `/login`,
                method: 'POST',
                body: data
            })
        }),

        login: builder.mutation<IRegisterResponse, IRegisterRequest>({
            query: (data: ILoginRequest) => ({
                url: `/login`,
                method: 'POST',
                body: data
            })
        }),

        current: builder.query<User, void>({
            query: () => ({
                url: `/current`,
                method: 'GET'
            })
        }),

        getUserById: builder.query<User, string>({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'GET'
            })
        }),

        updateUser: builder.mutation<User, IUpdateUserRequest>({
            query: ({ userData: data, id }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                data: data
            })
        })
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useCurrentQuery,
    useGetUserByIdQuery,
    useLazyCurrentQuery,
    useLazyGetUserByIdQuery,
    useUpdateUserMutation
} = userApiService;

export const {
    endpoints: { login, register, current, getUserById, updateUser }
} = userApiService;
