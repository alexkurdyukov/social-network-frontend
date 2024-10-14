import { baseApi } from '../../baseApi';
import { User } from '../../types';
import { IFollowUserRequest } from './types';

export const followApiService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        followUser: builder.mutation<User, IFollowUserRequest>({
            query: (data) => ({
                url: '/follow',
                method: 'POST',
                body: data
            })
        }),

        unfollowUser: builder.mutation<void, string>({
            query: (userId) => ({
                url: `/unfollow/${userId}`,
                method: 'DELETE'
            })
        })
    })
});

export const { useFollowUserMutation, useUnfollowUserMutation } =
    followApiService;

export const {
    endpoints: { followUser, unfollowUser }
} = followApiService;
