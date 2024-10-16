import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { Wrapper } from '../Wrapper';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles(() => ({
    layout: {
        display: 'grid',
        gridTemplateColumns: '280px auto',
        backgroundColor: '#F5F7FA',
        gap: '16px',
    },
    navbar: {},
    wrapper: {},
}));

//
export const Layout = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.layout}>
            <Navbar />
            <Wrapper>
                <Header />
                <Outlet />
            </Wrapper>
        </div>
    );
};
