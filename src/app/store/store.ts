import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { baseApi } from '../services/baseApi';
import { userApiService } from '../services/api/user/api';
import { postApiService } from '../services/api/post/api';
import { commentApiService } from '../services/api/comment/api';
import { likeApiService } from '../services/api/like/api';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApiService.middleware,
            postApiService.middleware,
            commentApiService.middleware,
            likeApiService.middleware
        )
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
