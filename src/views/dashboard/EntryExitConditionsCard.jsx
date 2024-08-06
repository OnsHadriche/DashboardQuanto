import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Button, CardActions, CardContent, Grid, Typography, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import PopularCard from 'ui-component/cards/Skeleton/PopularCard';

// ==============================|| DASHBOARD DEFAULT - ENTRY EXIT CONDITIONS BOX ||============================== //

const EntryExitConditionsCard = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <PopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Typography variant="h4">Entry and Exit Conditions</Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Long Conditions"
                  multiline
                  rows={4}
                  placeholder="Enter your long conditions here"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Short Conditions"
                  multiline
                  rows={4}
                  placeholder="Enter your short conditions here"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" variant="contained" color="primary">
              Apply Conditions
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

EntryExitConditionsCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default EntryExitConditionsCard;
