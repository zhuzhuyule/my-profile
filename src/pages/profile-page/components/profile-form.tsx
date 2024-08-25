import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import FormAvatar from '../../../components/form/avatar';
import FormInput from '../../../components/form/input';

interface IProfileFormProps {
  data: {
    name: string;
    email: string;
    avatar: string;
  };
}

function ProfileForm({ data }: IProfileFormProps) {
  const methods = useForm({
    defaultValues: data,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  return (
    <FormProvider {...methods}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={4}
            boxShadow={3}
            borderRadius={2}
            bgcolor="background.paper">
            <FormAvatar name="avatar" sx={{ width: 120, height: 120, mb: 2 }} />
            <IconButton aria-label="edit" sx={{ mb: 2 }}>
              <EditIcon />
            </IconButton>
            <Typography variant="h5" component="div" gutterBottom>
              <FormInput name="name" />
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              <FormInput name="email" />
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <FormInput name="phone" />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default ProfileForm;
