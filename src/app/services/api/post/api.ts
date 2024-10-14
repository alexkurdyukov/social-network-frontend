import { baseApi } from '../../baseApi';
import { Post } from '../../types';
import { ICreatePostRequest } from './types';

export const postApiService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation<Post, ICreatePostRequest>({
            query: (data) => ({
                url: `/posts`,
                method: 'POST',
                body: data
            })
        }),

        getAllPosts: builder.query<Post[], void>({
            query: () => ({
                url: `/posts`,
                method: 'GET'
            })
        }),

        getPostById: builder.query<Post, string>({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'GET'
            })
        }),

        deletePost: builder.query<void, string>({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE'
            })
        })
    })
});

export const {
    useCreatePostMutation,
    useGetAllPostsQuery,
    useGetPostByIdQuery,
    useDeletePostQuery
} = postApiService;

export const {
    endpoints: { createPost, getAllPosts, getPostById, deletePost }
} = postApiService;
