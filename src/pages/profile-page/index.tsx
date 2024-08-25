import { Box } from '@mui/material';
import { useSessionContext } from '../../contexts/session';
import RequiredLogin from '../required-login';
import ProfileForm from './components/profile-form';
import './index.css';

function ProfilePage() {
  const { session } = useSessionContext();

  if (!session.user) {
    return <RequiredLogin />;
  }
  return (
    <Box
      className="profile-page"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // 确保页面内容始终撑满屏幕高度
      bgcolor="background.default" // 设置背景颜色
      padding="0">
      <ProfileForm
        data={{
          name: session.user.fullName,
          email: session.user.email,
          avatar: session.user.avatar,
        }}
      />
    </Box>
  );
}

export default ProfilePage;
