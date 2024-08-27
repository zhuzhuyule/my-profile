import { Box, Container, Grid, Paper } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { IProfileData } from '../../../../types';
import EditButton from '../edit-button';
import BannerSection from './banner-section';
import ContactSection from './contact-section';
import IntroduceSection from './introduce-section';
import SubmitButtons from './submit-buttons';

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
        <Box sx={{ mt: { xs: 2, md: 5 }, mb: { xs: 8 } }}>
          <form autoComplete="off">
            <Paper
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                '&:hover .edit-btn': { opacity: 1 },
              }}>
              <EditButton />
              <BannerSection />
              <Box sx={{ p: 4, animation: 'fadeIn 1s ease-out', bgcolor: '#f5f5f5' }}>
                <Grid container spacing={4}>
                  <IntroduceSection />
                  <ContactSection />
                </Grid>
              </Box>
            </Paper>
            <SubmitButtons />
          </form>
        </Box>
      </Container>
    </FormProvider>
  );
}

export default ProfileForm;
