import { Redirect, Route, Switch } from "react-router-dom";

import { Container, Grid } from "@material-ui/core";

import { Header } from "./components/Header";
import { Routers } from "./constants/Routers";
import MainContentContainer from "./containers/MainContentContainer";
import PreviewCvContainer from "./containers/PreviewCvContainer";
import { PrintCV } from "./pages/PrintCV";
import "./App.css";

function App() {
  return (
    <Container maxWidth="lg" style={{ marginTop: 24 }}>
      <Grid container spacing={3}>
        <Header />
        <Switch>
          <Route path={Routers.PRINT_CV_PAGE_ROUTE} exact component={PrintCV} />
          <Route
            path={Routers.PREVIEW_CV_PAGE_ROUTE}
            exact
            component={PreviewCvContainer}
          />
          <Route
            path={Routers.MAIN_PAGE_ROUTE}
            exact
            component={MainContentContainer}
          />
          <Redirect to={Routers.MAIN_PAGE_ROUTE} />
        </Switch>
      </Grid>
    </Container>
  );
}

export default App;
