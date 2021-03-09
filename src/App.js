import { Redirect, Route, Switch } from "react-router-dom";

import { Container, Grid } from "@material-ui/core";

import { ListCv } from "./components/cv/ListCv";
import { PrintCv } from "./components/cv/PrintCv";
import { ViewCv } from "./components/cv/ViewCv";
import { MainContent } from "./components/mainContent/MainContent";
import { Routers } from "./constants/Routers";

function App() {
  return (
    <Container maxWidth="lg" style={{ marginTop: 24 }}>
      <Grid container spacing={3}>
        <Switch>
          <Route path={Routers.LIST_CV_PAGE_ROUTE} exact component={ListCv} />
          <Route path={Routers.PRINT_CV_PAGE_ROUTE} exact component={PrintCv} />
          <Route path={Routers.VIEW_CV_PAGE_ROUTE} exact component={ViewCv} />
          <Route path={Routers.MAIN_PAGE_ROUTE} exact component={MainContent} />
          <Redirect to={Routers.MAIN_PAGE_ROUTE} />
        </Switch>
      </Grid>
    </Container>
  );
}

export default App;
