export type ThemeType = 'dark' | 'light';

export const Themes: Record<string, ThemeType> = {
    dark: 'dark',
    light: 'light',
};

export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
};
