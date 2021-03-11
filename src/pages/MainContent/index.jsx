/* eslint-disable react/prop-types */
import { useState } from "react";

import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { CreateCvModal } from "../../components/modals/CreateCvModal";
// import CreateCVContainer from "../../containers/MainContentContainer";

const styles = {
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export const MainContent = ({ createCV, listCvs }) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    // eslint-disable-next-line no-unused-vars
    const a = listCvs;
    debugger;
    setShowModal(!showModal);
  };

  return (
    <>
      <CreateCvModal
        open={showModal}
        close={modalHandler}
        createCV={createCV}
      />
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
            {listCvs.cv.map((cv) => {
              return (
                <Typography>
                  {`${cv.firstName} ${cv.lastName} ${cv.experience}`}
                </Typography>
              );
            })}
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
