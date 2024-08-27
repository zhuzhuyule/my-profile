import { Alert, Box, CircularProgress, Snackbar } from '@mui/material';
import { DEFAULT_PROFILE } from '../../constants';
import { useFetch, useUpdate } from '../../hooks';
import { FormStatusProvider } from '../../providers/form-status-provider';
import { IProfileData } from '../../types';
import ProfileForm from './components/profile-form';
import './index.css';

function ProfilePage() {
  const { data, loading, refresh } = useFetch<IProfileData>('api/profile/');
  const { put, error, clearError } = useUpdate<IProfileData>();

  return (
    <Box
      sx={{
        p: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #b2c2b7 100%);',
      }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <FormStatusProvider>
          <Snackbar
            open={!!error}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={6000}
            onClose={clearError}>
            <Alert onClose={clearError} severity="error" sx={{ width: '100%' }}>
              {(error?.response?.data as any)?.errors?.map((msg: string) => <Box key={msg}>· {msg}</Box>) ||
                error?.message}
            </Alert>
          </Snackbar>
          <ProfileForm
            data={data || DEFAULT_PROFILE}
            onUpdate={(values) => put('api/profile/', values).then(() => refresh())}
          />
        </FormStatusProvider>
      )}
    </Box>
  );
}

export default ProfilePage;
