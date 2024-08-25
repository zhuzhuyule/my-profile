import EditIcon from '@mui/icons-material/Edit';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import { useSessionContext } from '../contexts/session';
import RequiredLogin from './required-login';

import './profile-page.css';

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
            <Avatar
              alt="User Avatar"
              src={session.user.avatar} // 替换为实际头像地址
              sx={{ width: 120, height: 120, mb: 2 }}
            />
            <IconButton aria-label="edit" sx={{ mb: 2 }}>
              <EditIcon />
            </IconButton>
            <Typography variant="h5" component="div" gutterBottom>
              {session.user.fullName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {session.user.email}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {session.user.phone}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
