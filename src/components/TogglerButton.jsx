import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { SET_TOGGELE_DARK } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
export const TogglerButton = () => {
    const customization = useSelector((state) => state.customization);
    const isDarkMode = customization.isDarkMode;
    const dispatch = useDispatch();
    const handleDarkModeToggle = () => {
        dispatch({ type: SET_TOGGELE_DARK });
    };
    return (
        <Box
        sx={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            
          }}
        >
            <IconButton sx={{ ml:0 }} onClick={handleDarkModeToggle} color="inherit">
                {isDarkMode ? <ToggleOffIcon fontSize='large' /> : <ToggleOnIcon fontSize='large' />}
            </IconButton>
        </Box>
    );
};
