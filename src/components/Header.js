import { useHistory } from "react-router-dom";

import { Button, CardContent, Grid, Typography } from "@material-ui/core";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";

export const Header = () => {
  const history = useHistory();

  const showListCv = () => {
    history.push("/list-cv");
  };

  const toMainPage = () => {
    history.push("/main");
  };

  return (
    <Grid item lg={12} xs={12}>
      <CardContent>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item lg={4} xs={4}>
              <ViewCompactIcon
                style={{ fontSize: 56, color: "#5D6D7E", cursor: "pointer" }}
                onClick={toMainPage}
              />
            </Grid>
            <Grid
              item
              lg={4}
              xs={4}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Typography
                variant="h5"
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={toMainPage}
              >
                ATB COMPANY
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              xs={4}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="outlined" onClick={() => showListCv()}>
                List CV's
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardContent>
    </Grid>
  );
};
