import { Container, Grid } from '@material-ui/core';
import { Header } from './components/header/Header';
import './App.css';
import { MainContent } from './components/mainContent/MainContent';

function App() {
  return (
    <>
      <Container maxWidth='lg'style={{ marginTop: 24 }}>
        <Grid container spacing={3}>
          <Header />
          <MainContent />
        </Grid>
      </Container>
    </>
  );
}

export default App;
