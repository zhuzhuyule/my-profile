import { Grid } from '@mui/material';
import React from 'react';
import FormInput from '../../../components/form/input';

function Section({ children, icon, name }: { children: React.ReactNode; icon?: React.ReactNode; name: string }) {
  return (
    <Grid item xs={12}>
      <Grid container alignItems="center" mb={1} gap={1} flexWrap="nowrap">
        {icon}
        <FormInput name={name} sx={{ fontSize: '1.5rem' }} />
      </Grid>
      {children}
    </Grid>
  );
}

export default Section;
