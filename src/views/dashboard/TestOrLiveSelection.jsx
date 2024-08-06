import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const TestOrLiveSelection = ({ isLoading }) => {
  const [mode, setMode] = useState('Test');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [asset, setAsset] = useState('');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <MainCard
      border={false}
      content={false}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        margin: 0,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 2,
        boxShadow: 1,
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Asset Selection */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Asset"
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              fullWidth
            />
          </Grid>

          {/* Start Date */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>

          {/* End Date */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>

          {/* Timeframe */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="timeframe-label">Timeframe</InputLabel>
              <Select
                labelId="timeframe-label"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                label="Timeframe"
              >
                <MenuItem value="1D">1 Day</MenuItem>
                <MenuItem value="1W">1 Week</MenuItem>
                <MenuItem value="1M">1 Month</MenuItem>
                {/* Add other timeframes here */}
              </Select>
            </FormControl>
          </Grid>

          {/* Backtest Button */}
          
        </Grid>
      </Box>
    </MainCard>
  );
};

TestOrLiveSelection.propTypes = {
  isLoading: PropTypes.bool,
};

export default TestOrLiveSelection;
