import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import TestOrLiveSelection from './TestOrLiveSelection';
import EntryExitConditionsCard from './EntryExitConditionsCard';
import { gridSpacing } from 'store/constant';
import BacktestButton from './backtest';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            <TestOrLiveSelection isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={gridSpacing} direction="column">
              <Grid item xs={12}>
                <PopularCard isLoading={isLoading} />
              </Grid>
              <Grid item xs={12}>
                <EntryExitConditionsCard isLoading={isLoading} />
              </Grid>
              <Grid item xs={12}>
                <BacktestButton /> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
