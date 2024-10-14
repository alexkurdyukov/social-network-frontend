import { baseApi } from '../../baseApi';
import { Comment } from '../../types';

export const commentApiService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createComment: builder.mutation<Comment, Partial<Comment>>({
            query: (data) => ({
                url: '/posts',
                method: 'POST',
                body: data
            })
        }),

        deleteComment: builder.mutation<void, string>({
            query: (commentId) => ({
                url: `/posts/${commentId}`,
                method: 'DELETE'
            })
        })
    })
});

export const { useCreateCommentMutation, useDeleteCommentMutation } =
    commentApiService;

export const {
    endpoints: { createComment, deleteComment }
} = commentApiService;
