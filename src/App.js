import { Container, Grid } from '@material-ui/core';
import './App.css';
import { ListCv } from './components/cv/ListCv'
import { PrintCv } from './components/cv/PrintCv'
import { ViewCv } from './components/cv/ViewCv'
import { MainContent } from './components/mainContent/MainContent';
import { Redirect, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Container maxWidth='lg' style={{ marginTop: 24 }}>
        <Grid container spacing={3}>
          <Switch>
            <Route path='/list-cv' exact component={ListCv} />
            <Route path='/print-cv/:id' exact component={PrintCv} />
            <Route path='/view-cv/:id' exact component={ViewCv} />
            <Route path='/main' exact component={MainContent} />
            <Redirect to='/main' />
          </Switch>
        </Grid>
      </Container>
    </>
  );
}

export default App;
