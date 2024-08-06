import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DASHBOARD DEFAULT - INDICATOR SELECTION BOX ||============================== //

const IndicatorSelectionCard = ({ isLoading }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndicators, setSelectedIndicators] = React.useState({
    indicator1: false,
    indicator2: false,
    indicator3: false,
    indicator4: false,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIndicatorChange = (event) => {
    setSelectedIndicators({
      ...selectedIndicators,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Indicators Selection</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleClick}
                      sx={{
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        textTransform: 'none',
                      }}
                    >
                      Configure Indicators
                    </Button>
                    <Menu
                      id="menu-indicator-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Indicator Settings</MenuItem>
                      <MenuItem onClick={handleClose}>Reset Indicators</MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedIndicators.indicator1}
                          onChange={handleIndicatorChange}
                          name="indicator1"
                        />
                      }
                      label="Indicator 1"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedIndicators.indicator2}
                          onChange={handleIndicatorChange}
                          name="indicator2"
                        />
                      }
                      label="Indicator 2"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedIndicators.indicator3}
                          onChange={handleIndicatorChange}
                          name="indicator3"
                        />
                      }
                      label="Indicator 3"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedIndicators.indicator4}
                          onChange={handleIndicatorChange}
                          name="indicator4"
                        />
                      }
                      label="Indicator 4"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" variant="contained" color="primary">
              Apply Indicators
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

IndicatorSelectionCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default IndicatorSelectionCard;
