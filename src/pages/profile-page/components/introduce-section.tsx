import { Person } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import FormInput from '../../../components/form/input';
import FormTextField from '../../../components/form/text-filed';

function IntroduceSection() {
  return (
    <Grid item xs={12}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
        <Person />
        <FormInput name="person.title" typography={{ variant: 'h5', sx: { fontWeight: 'bold' } }} />
      </Box>
      <FormTextField name="person.detail" />
    </Grid>
  );
}

export default IntroduceSection;
