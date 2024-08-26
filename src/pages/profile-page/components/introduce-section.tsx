import { Person } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import FormInput from '../../../components/form/input';
import FormTextField from '../../../components/form/text-field';

function IntroduceSection() {
  return (
    <Grid item xs={12}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
        <Person />
        <FormInput name="person.title" />
      </Box>
      <FormTextField name="person.detail" />
    </Grid>
  );
}

export default IntroduceSection;
