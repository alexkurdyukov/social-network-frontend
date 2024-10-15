import { Button as MantineButton } from '@mantine/core';

interface IButtonProps {
    children: React.ReactNode;
}
export const Button = ({ children }: IButtonProps) => {
    return <MantineButton>{children}</MantineButton>;
};
