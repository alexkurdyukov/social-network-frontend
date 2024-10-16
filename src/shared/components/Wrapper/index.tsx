import { createStyles } from '@mantine/styles';

interface IWrapperProps {
    children: React.ReactElement | React.ReactElement[];
}

const useStyles = createStyles(() => ({
    wrapper: {
        backgroundColor: '#F5F7FA',
        minHeight: '100vh',
    },
}));

export const Wrapper = ({ children }: IWrapperProps) => {
    const { classes } = useStyles();
    return <div className={classes.wrapper}>{children}</div>;
};
