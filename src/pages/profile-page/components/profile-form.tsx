import { Edit } from '@mui/icons-material';
import { Avatar, Box, Button, Container, createTheme, Grid, IconButton, Paper, ThemeProvider } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import FadeTransition from '../../../components/fade-transition';
import FormInput from '../../../components/form/input';
import { useFormStatus } from '../../../providers/form-status-provider';
import { IProfileData } from '../../../types';
import ContactSection from './contact-section';
import IntroduceSection from './introduce-section';
import FormTextField from '../../../components/form/text-field';

interface IProfileFormProps {
  data: Partial<IProfileData>;
  onUpdate: (data: IProfileData) => void;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function ProfileForm({ data }: IProfileFormProps) {
  const methods = useForm({
    defaultValues: data,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { readonly, toggleReadonly } = useFormStatus();

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
              {readonly && (
                <IconButton
                  className="edit-btn"
                  aria-label="edit"
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                  onClick={toggleReadonly}>
                  <Edit />
                </IconButton>
              )}
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

              <Box sx={{ p: 4, animation: 'fadeIn 1s ease-out', bgcolor: '#f5f5f5' }}>
                <Grid container spacing={4}>
                  <IntroduceSection />
                  <ContactSection />
                </Grid>
              </Box>
            </Paper>
            <FadeTransition
              readonly={readonly}
              readonlyComponent={null}
              lineHeight={0}
              height={0}
              width="100%"
              ml={-2}
              mt={-1}>
              <Grid container spacing={2} m={0} justifyContent="flex-end">
                <Grid item xs={6} md={2}>
                  <Button variant="outlined" fullWidth onClick={toggleReadonly}>
                    取消
                  </Button>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Button variant="contained" fullWidth type="submit">
                    保存
                  </Button>
                </Grid>
              </Grid>
            </FadeTransition>
          </form>
        </Box>
      </Container>
    </FormProvider>
  );
}

export default ProfileForm;
