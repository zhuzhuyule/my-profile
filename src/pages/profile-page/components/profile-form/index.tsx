import { yupResolver } from '@hookform/resolvers/yup';
import { Box, CircularProgress, Container, Dialog, DialogContent, Grid, Paper } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStatus } from '../../../../providers/form-status-provider';
import { IProfileData } from '../../../../types';
import EditButton from '../edit-button';
import BannerSection from './banner-section';
import ContactSection from './contact-section';
import IntroduceSection from './introduce-section';
import schema from './schema';
import SubmitButtons from './submit-buttons';

interface IProfileFormProps {
  data: IProfileData;
  onUpdate: (data: IProfileData) => Promise<void>;
}

function ProfileForm({ data, onUpdate }: IProfileFormProps) {
  const methods = useForm({
    defaultValues: data,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { toggleReadonly } = useFormStatus();

  return (
    <FormProvider {...methods}>
      <Container maxWidth="md">
        <Box sx={{ mt: { xs: 2, md: 5 }, mb: { xs: 8 } }}>
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
          <SubmitButtons
            onSubmit={methods.handleSubmit(
              (values) => {
                return onUpdate(values).then(() => {
                  methods.reset(values);
                  toggleReadonly();
                });
              },
              (errors) => {
                // eslint-disable-next-line no-console
                console.log('---------->', errors);
              },
            )}
          />
        </Box>
      </Container>
      <Dialog open={methods.formState.isSubmitting}>
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <CircularProgress />
          更新中...
        </DialogContent>
      </Dialog>
    </FormProvider>
  );
}

export default ProfileForm;
