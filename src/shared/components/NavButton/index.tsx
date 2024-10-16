import { Link } from 'react-router-dom';
import { Button } from '../Button';

interface INavButtonProps {
    children: React.ReactNode;
    icon: JSX.Element;
    href: string;
}

export const NavButton = ({ children, href }: INavButtonProps) => {
    return (
        <Button>
            <Link to={href}>{children}</Link>
        </Button>
    );
};
