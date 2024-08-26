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
        <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {item.icon}
          <FormInput name={`contact.${item.name}`} fullWidth />
        </Box>
      ))}
    </Grid>
  );
}

export default ContactSection;
