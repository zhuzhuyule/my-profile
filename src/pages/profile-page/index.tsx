import { Box } from '@mui/material';
import { useFetch } from '../../hooks';
import { IProfileData } from '../../types';
import ProfileForm from './components/profile-form';
import { FormStatusProvider } from '../../providers/form-status-provider';
import './index.css';

function ProfilePage() {
  const { data, loading } = useFetch<IProfileData>('api/profile/');

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
        'loading...'
      ) : (
        <FormStatusProvider>
          <ProfileForm data={data || {}} onUpdate={() => {}} />
        </FormStatusProvider>
      )}
    </Box>
  );
}

export default ProfilePage;
