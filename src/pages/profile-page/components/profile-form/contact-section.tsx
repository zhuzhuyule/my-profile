import { Email, House, MobileFriendly, Phone } from '@mui/icons-material';
import { Grid } from '@mui/material';
import FormInput from '../../../../components/form/input';
import Section from './section';

function ContactSection() {
  return (
    <Section name="contact.title" icon={<MobileFriendly />}>
      {[
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
        <Grid key={item.name} container alignItems="center" gap={1} flexWrap="nowrap" flex={1}>
          {item.icon}
          <FormInput name={`contact.${item.name}`} sx={{ maxWidth: '500px' }} />
        </Grid>
      ))}
    </Section>
  );
}

export default ContactSection;
