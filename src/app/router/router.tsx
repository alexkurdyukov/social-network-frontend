import { createBrowserRouter } from 'react-router-dom';
import { PATH_DASHBOARD } from './paths';
import { Layout } from 'src/shared/components/Layout';
import { Posts } from 'src/pages/posts';
import { Post } from 'src/pages/post';
import { User } from 'src/pages/user';
import { Followers } from 'src/pages/followers';
import { Following } from 'src/pages/following';

export const router = createBrowserRouter([
    { path: PATH_DASHBOARD.auth, element: <div>auth</div> },
    {
        path: PATH_DASHBOARD.root,
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Posts />,
            },
            {
                path: 'posts/:id',
                element: <Post />,
            },
            {
                path: 'users/:id',
                element: <User />,
            },
            {
                path: 'followers',
                element: <Followers />,
            },
            {
                path: 'following',
                element: <Following />,
            },
        ],
    },
]);
