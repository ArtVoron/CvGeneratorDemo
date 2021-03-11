import { Redirect, Route, Switch } from "react-router-dom";

import { Container, Grid } from "@material-ui/core";

import { Header } from "./components/Header";
import { Routers } from "./constants/Routers";
import MainContentContainer from "./containers/MainContentContainer";
import { ListCv } from "./pages/ListCVs";
// import { MainContent } from "./pages/MainContent";
import { PrintCv } from "./pages/PrintCV";
import { ViewCv } from "./pages/ViewCV";

function App() {
  return (
    <Container maxWidth="lg" style={{ marginTop: 24 }}>
      <Grid container spacing={3}>
        <Header />
        <Switch>
          <Route path={Routers.LIST_CV_PAGE_ROUTE} exact component={ListCv} />
          <Route path={Routers.PRINT_CV_PAGE_ROUTE} exact component={PrintCv} />
          <Route path={Routers.VIEW_CV_PAGE_ROUTE} exact component={ViewCv} />
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
