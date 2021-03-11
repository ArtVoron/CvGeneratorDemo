import { Redirect, Route, Switch } from "react-router-dom";

import { Container, Grid } from "@material-ui/core";

import { MainHeader } from "./components/headers/MainHeader";
import { routers } from "./constants/routers";
import { ListCv } from "./pages/ListCVs";
import { MainContent } from "./pages/MainContent";
import { PrintCv } from "./pages/PrintCV";
import { ViewCv } from "./pages/ViewCV";

function App() {
  return (
    <Container maxWidth="lg" style={{ marginTop: 24 }}>
      <Grid container spacing={3}>
        <MainHeader />
        <Switch>
          <Route path={routers.LIST_CV_PAGE_ROUTE} exact component={ListCv} />
          <Route path={routers.PRINT_CV_PAGE_ROUTE} exact component={PrintCv} />
          <Route path={routers.VIEW_CV_PAGE_ROUTE} exact component={ViewCv} />
          <Route path={routers.MAIN_PAGE_ROUTE} exact component={MainContent} />
          <Redirect to={routers.MAIN_PAGE_ROUTE} />
        </Switch>
      </Grid>
    </Container>
  );
}

export default App;
