import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';
const marketPlace = () => {
  return (
    <div>
       <MainCard title="Market place">
        <Grid container spacing={gridSpacing}>
        </Grid>
       </MainCard>
    </div>
  )
}

export default marketPlace
