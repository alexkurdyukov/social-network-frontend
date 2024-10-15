import { Flex, Stack } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { IconBellRinging, IconFingerprint, IconKey, IconReceipt2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles(() => ({
    navbar: {
        borderRight: '1px solid #ffffff',
        padding: '32px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        display: 'flex',
    },
}));

const data = [
    { link: '/', label: 'posts', icon: IconBellRinging },
    { link: 'following', label: 'following', icon: IconReceipt2 },
    { link: 'followers', label: 'followers', icon: IconFingerprint },
    { link: 'settings', label: 'settings', icon: IconKey },
];

export const Navbar = () => {
    const { classes } = useStyles();

    const links = data.map((item) => (
        <Link to={item.link}>
            <Flex align="center" gap={4}>
                <item.icon className={classes.link} stroke={1.5} />
                <span>{item.label}</span>
            </Flex>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <Stack gap={8}>{links}</Stack>
        </nav>
    );
};
