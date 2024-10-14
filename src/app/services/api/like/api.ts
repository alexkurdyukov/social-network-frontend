import { baseApi } from '../../baseApi';
import { Like } from '../../types';
import { ICreateLikeRequest } from './types';

export const likeApiService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        likePost: builder.mutation<Like, ICreateLikeRequest>({
            query: (data) => ({
                url: '/likes',
                method: 'POST',
                body: data
            })
        }),

        unlikePost: builder.mutation<void, string>({
            query: (postId) => ({
                url: `/likes/${postId}`,
                method: 'DELETE'
            })
        })
    })
});

export const { useLikePostMutation, useUnlikePostMutation } = likeApiService;

export const {
    endpoints: { likePost, unlikePost }
} = likeApiService;
