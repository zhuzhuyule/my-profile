import { Grid, createTheme, ThemeProvider } from '@mui/material';
import FormAvatar from '../../../../components/form/avatar';
import FormInput from '../../../../components/form/input';
import FormTextField from '../../../../components/form/text-field';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function BannerSection() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        className="profile-page"
        sx={{
          p: 8,
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}>
        <FormAvatar name="name" />
        <FormInput
          name="name"
          fullWidth
          sx={{ p: 0, fontSize: '1.5rem', lineHeight: '2rem', height: '2rem' }}
          inputProps={{ sx: { textAlign: 'center' } }}
        />
        <FormTextField name="slogan" fullWidth inputProps={{ sx: { textAlign: 'center' } }} />
      </Grid>
    </ThemeProvider>
  );
}

export default BannerSection;
