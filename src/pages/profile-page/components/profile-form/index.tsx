import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Grid, Paper } from '@mui/material';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStatus } from '../../../../providers/form-status-provider';
import { IProfileData } from '../../../../types';
import EditButton from '../edit-button';
import BannerSection from './banner-section';
import ContactSection from './contact-section';
import IntroduceSection from './introduce-section';
import schema from '../../schema';
import SubmitButtons from './submit-buttons';

const PAPER_STYLE = {
  borderRadius: 4,
  overflow: 'hidden',
  position: 'relative',
  '&:hover .edit-btn': { opacity: 1 },
};
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

  const handleSubmit = useCallback(
    () =>
      methods.handleSubmit(
        (values) =>
          onUpdate(values)
            .then(() => {
              methods.reset(values);
              toggleReadonly();
            })
            .catch(),
        (errors) => {
          // eslint-disable-next-line no-console
          console.log('-----Validate Error----->', errors);
        },
      )(),
    [methods, onUpdate, toggleReadonly],
  );

  return (
    <FormProvider {...methods}>
      <Container maxWidth="md">
        <Box sx={{ mt: { xs: 2, md: 5 }, mb: { xs: 8 } }}>
          <Paper sx={PAPER_STYLE}>
            <EditButton />
            <BannerSection />
            <Grid container spacing={4} sx={{ p: 4, animation: 'fadeIn 1s ease-out', bgcolor: '#f5f5f5' }}>
              <IntroduceSection />
              <ContactSection />
            </Grid>
          </Paper>
          <SubmitButtons onSubmit={handleSubmit} />
        </Box>
      </Container>
    </FormProvider>
  );
}

export default ProfileForm;
