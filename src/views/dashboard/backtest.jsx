import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material';

// ==============================|| BACKTEST BUTTON COMPONENT ||============================== //

const BacktestButton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        sx={{
          borderRadius: '50px', // Make the button rounded
          backgroundColor: 'blue', // Set the background color to blue
          color: 'white', // Set the text color to white
          padding: '10px 30px', // Add padding for better button appearance
          textTransform: 'none', // Prevent text capitalization
        }}
      >
        Backtest
      </Button>
    </Box>
  );
};

BacktestButton.propTypes = {
  onClick: PropTypes.func,
};

export default BacktestButton;
