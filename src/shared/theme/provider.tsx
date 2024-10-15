import { createContext, useState } from 'react';
import { ThemeContextType, Themes, ThemeType } from './types';
import { LOCAL_STORAGE_THEME_KEY } from './const';

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: Themes.dark,
    toggleTheme: () => null,
});

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
    const themeFromStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType;

    const currentTheme = themeFromStorage ?? Themes.dark;

    const [theme, setTheme] = useState<ThemeType>(currentTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === Themes.light ? Themes.dark : Themes.light;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main className={`${theme} text-foreground bg-background`}>{children}</main>
        </ThemeContext.Provider>
    );
};
