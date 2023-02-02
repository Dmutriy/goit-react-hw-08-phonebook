import { Link } from './AuthNav.styled';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '40px',
      }}
    >
      <Link to="/register">Registration</Link>
      <Link to="/login">Log In</Link>
    </Box>
  );
};
