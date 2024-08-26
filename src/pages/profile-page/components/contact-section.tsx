import { Email, House, MobileFriendly, Phone } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import FormInput from '../../../components/form/input';

function ContactSection() {
  return (
    <Grid item xs={12}>
      {[
        {
          name: 'title',
          icon: <MobileFriendly />,
          typography: { variant: 'h5' as const, sx: { fontWeight: 'bold' } },
        },
        {
          name: 'phone',
          icon: <Phone />,
        },
        {
          name: 'email',
          icon: <Email />,
        },
        {
          name: 'address',
          icon: <House />,
        },
      ].map((item) => (
        <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
          {item.icon}
          <FormInput name={`contact.${item.name}`} typography={item.typography} />
        </Box>
      ))}
    </Grid>
  );
}

export default ContactSection;
