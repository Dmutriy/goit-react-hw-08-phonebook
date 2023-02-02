import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home() {
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" component="h1" mt={40} color="#12cfe8">
        Hello, welcome to the phonebook!{' '}
      </Typography>
    </Container>
  );
}

export default Home;
