import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../../components/form/input';
import { IProfileData } from '../../../types';
import ContactSection from './contact-section';
import IntroduceSection from './introduce-section';

interface IProfileFormProps {
  data: Partial<IProfileData>;
  onUpdate: (data: IProfileData) => void;
}

function ProfileForm({ data }: IProfileFormProps) {
  const methods = useForm({
    defaultValues: data,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return (
    <FormProvider {...methods}>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 4, my: 5, overflow: 'hidden' }}>
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
            <Typography variant="h4" sx={{ mt: 2 }}>
              <FormInput name="name" />
            </Typography>
            <Typography variant="subtitle1">
              <FormInput name="slogan" />
            </Typography>
          </Box>

          <Box sx={{ p: 4, animation: 'fadeIn 1s ease-out', bgcolor: '#f5f5f5' }}>
            <Grid container spacing={4}>
              <IntroduceSection />
              <ContactSection />
            </Grid>
          </Box>
        </Paper>
      </Container>
    </FormProvider>
  );
}

export default ProfileForm;
