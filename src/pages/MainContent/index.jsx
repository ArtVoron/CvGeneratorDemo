import { useState } from "react";

import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

import CVsTable from "../../components/CVcTable";
import { CreateCvModal } from "../../components/modals/CreateCvModal";

export const MainContent = ({
  createCV,
  editCV,
  deleteCV,
  printCV,
  previewCV,
  cvs,
}) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <CreateCvModal
        open={showModal}
        close={modalHandler}
        createCV={createCV}
      />

      <Grid item lg={12} xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item lg={9} xs={9}>
                <Typography variant="h5">Basic CV's information</Typography>
              </Grid>
              <Grid
                item
                lg={3}
                xs={3}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={modalHandler}
                >
                  Create new CV
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={12} xs={12}>
        <CVsTable
          cvs={cvs}
          previewCV={previewCV}
          editCV={editCV}
          deleteCV={deleteCV}
          printCV={printCV}
        />
      </Grid>
    </>
  );
};

MainContent.propTypes = {
  cvs: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  createCV: PropTypes.func.isRequired,
  editCV: PropTypes.func.isRequired,
  deleteCV: PropTypes.func.isRequired,
  printCV: PropTypes.func.isRequired,
  previewCV: PropTypes.func.isRequired,
};
