import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// assets
import CloseIcon from '@mui/icons-material/Close';

const CardComponent = ({ title, buttonLabel, buttonAction, items }) => {
  return (
    <Box sx={{ p: 2.25, width: '100%' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 500 }}>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2, flexDirection: 'row' }}>
        {items.map((item, index) => (
          <Grid item key={index} sx={{ width: 'auto', mb: 2, mr: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 1 }}>
                  {item}
                </Typography>
                <Avatar
                  sx={{
                    cursor: 'pointer',
                    bgcolor: 'error.main',
                    color: '#fff',
                    width: 24,
                    height: 24,
                    ml: 1 // margin-left to create a small space between the text and the icon
                  }}
                  onClick={() => console.log(`${item} clicked`)}
                >
                  <CloseIcon fontSize="small" />
                </Avatar>
              </Box>
            </Box>
            <Button
              variant="outlined"
              sx={{ mt: 1, width: '100%', bgcolor: '#fff', color: 'secondary.main', borderColor: 'secondary.main' }}
              onClick={() => console.log(`Click to Add for ${item}`)}
            >
              Click to Add
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CardComponent;
