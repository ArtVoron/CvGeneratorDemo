import { useState } from "react";

import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { CreateCv } from "../../components/modals/CreateCv";

const styles = {
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    debugger;
    setShowModal(!showModal);
  };

  return (
    <>
      <CreateCv open={showModal} close={modalHandler} />
      <Grid item lg={12} xs={12} style={styles.button}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={modalHandler}
        >
          Create new CV
        </Button>
      </Grid>

      <Grid item lg={12} xs={12}>
        <Card>
          <CardContent>
            <Typography>Modul 1</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={12} xs={12}>
        <Card>
          <CardContent>
            <Typography>Modul 2</Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
