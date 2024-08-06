import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [amount, setAmount] = React.useState(1000);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddMoney = () => {
    // Handle add money logic here
    console.log(`Added ${amount} dollars`);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: theme.palette.primary.main, // Change to primary main color which is often blue
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: theme.palette.primary.dark,
              borderRadius: '50%',
              top: { xs: -105, sm: -85 },
              right: { xs: -140, sm: -95 }
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: theme.palette.primary.dark,
              borderRadius: '50%',
              top: { xs: -155, sm: -125 },
              right: { xs: -70, sm: -15 },
              opacity: 0.5
            }
          }}
        >
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    
                    
                      
                  </Grid>
                  <Grid item>
                  
                      <MoreHorizIcon fontSize="inherit" />
                    
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                  AlgoBulls Money
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={{ mt: 1.75, mb: 0.75 }}>
                  <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1 }}>
                    $0.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <TextField
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  variant="outlined"
                  sx={{ bgcolor: theme.palette.primary.light, borderRadius: '4px', mr: 1 }}
                />
                <Button
                  variant="contained"
                  sx={{ bgcolor: theme.palette.primary.dark, color: '#fff' }}
                  onClick={handleAddMoney}
                >
                  Add Money
                </Button>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool
};

export default EarningCard;
