import { useContext } from 'react';
import { ThemeContext } from '../../theme/provider';
import { Themes } from 'src/shared/theme/types';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles(() => ({
    header: {
        borderBottom: '1px solid #E6EFF5',
        backgroundColor: '#ffffff',
        height: '80px',
    },
}));

export const Header = () => {
    const { classes } = useStyles();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return <div className={classes.header}>header</div>;
};
