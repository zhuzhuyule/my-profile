import { Grid, createTheme, ThemeProvider } from '@mui/material';
import FormAvatar from '../../../../components/form/avatar';
import FormInput from '../../../../components/form/input';
import FormTextField from '../../../../components/form/text-field';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const BANNER_STYLE = {
  p: 8,
  zIndex: 1,
  color: 'white',
  textAlign: 'center',
  position: 'relative',
};

function BannerSection() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container className="profile-page" sx={BANNER_STYLE}>
        <FormAvatar name="name" />
        <FormInput
          name="name"
          fullWidth
          sx={{ p: 0, fontSize: '1.5rem', lineHeight: '2rem', height: '2rem' }}
          inputProps={{ sx: { textAlign: 'center' } }}
        />
        <FormTextField name="slogan" fullWidth inputProps={{ sx: { textAlign: 'center' } }} emptyValue="" />
      </Grid>
    </ThemeProvider>
  );
}

export default BannerSection;
