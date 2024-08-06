import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import CardComponent from './CardComponent'; // Adjust the import path accordingly

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme();

  const items = [
    'Subscribe Plan Inactive',
    'Broking Account Not Connected',
    'Portfolio Strategy'
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Align cards vertically
        width: '100%',
        height: '100', // Make the Box take full height
        minHeight: '253px' // Set a minimum height for the Box (adjust as needed)
      }}
    >
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: 'primary.dark',
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column', // Ensure content within the card is vertical
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2 // Add margin between cards
          }}
        >
          <CardComponent
            title="AlgoBulls Fund Insufficient"
            items={items}
          />
        </MainCard>
      )}
    </Box>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
