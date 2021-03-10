import { useHistory } from "react-router";

import { Button, CardContent, Grid, Typography } from "@material-ui/core";

export const ViewCv = () => {
  const history = useHistory();

  const printCv = (e) => {
    history.push(`/print-cv/${e}`);
  };

  return (
    <Grid item lg={12} xs={12}>
      <CardContent>
        <CardContent>
          <Typography>View CV</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              printCv(1);
            }}
          >
            Print CV
          </Button>
        </CardContent>
      </CardContent>
    </Grid>
  );
};
