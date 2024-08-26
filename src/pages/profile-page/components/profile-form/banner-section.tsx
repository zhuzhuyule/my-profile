import { Avatar, Box, createTheme, ThemeProvider } from '@mui/material';
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
      <Box
        className="profile-page"
        sx={{
          p: 8,
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}>
        <Avatar
          alt="John Doe"
          src="https://via.placeholder.com/150"
          sx={{
            width: 160,
            height: 160,
            margin: '0 auto',
            border: (theme) => `4px solid ${theme.palette.common.white}`,
            boxShadow: 3,
          }}
        />
        <FormInput
          name="name"
          fullWidth
          sx={{ mt: 2, p: 0, fontSize: '1.5rem', lineHeight: '2rem', height: '2rem' }}
          inputProps={{ sx: { textAlign: 'center' } }}
        />
        <FormTextField name="slogan" fullWidth inputProps={{ sx: { textAlign: 'center' } }} />
      </Box>
    </ThemeProvider>
  );
}

export default BannerSection;
