import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { useEffect, useMemo } from 'react';
import { SET_TOGGELE_DARK } from 'store/actions';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();
    const theme = useMemo(() => themes(customization), [customization]);
    console.log(theme);

    useEffect(() => {
        const savedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
        if (savedDarkMode !== customization.isDarkMode) {
            dispatch({ type: SET_TOGGELE_DARK });
        }
    }, [customization.isDarkMode, dispatch]);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavigationScroll>
                    <RouterProvider router={router} />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
