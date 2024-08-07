import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */
export const theme = (customization) => {
    const color = colors;

    const themeOption = {
        colors: color,
        heading: customization.isDarkMode ? color.grey300 : color.grey900,
        paper: customization.isDarkMode ? color.grey800 : color.paper,
        backgroundDefault: customization.isDarkMode ? color.grey900 : color.paper,
        background: customization.isDarkMode ? color.primaryDark : color.primaryLight,
        darkTextPrimary: customization.isDarkMode ? color.grey300 : color.grey700,
        darkTextSecondary: customization.isDarkMode ? color.grey500 : color.grey500,
        textDark: customization.isDarkMode ? color.grey300 : color.grey900,
        menuSelected: customization.isDarkMode ? color.primaryLight : color.secondaryDark,
        menuSelectedBack: customization.isDarkMode ? color.primaryDark : color.secondaryLight,
        divider: customization.isDarkMode ? color.grey700 : color.grey200,
        customization
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;
