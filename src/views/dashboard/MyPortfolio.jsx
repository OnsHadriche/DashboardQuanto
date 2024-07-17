import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';
const MyPortfolio = () => {
  return (
    <div>
      <MainCard title="Portfolio">
        <Grid container spacing={gridSpacing}>
            <h3> Protfolio Section </h3>
        </Grid>
      </MainCard>
    </div>
  );
};

export default MyPortfolio;
