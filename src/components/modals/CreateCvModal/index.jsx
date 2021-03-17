import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import RemoveIcon from "@material-ui/icons/Remove";
import { useFormik } from "formik";
import PropTypes from "prop-types";

// import { createCV } from "../../../redux/actions/actions";

const styles = {
  button: {
    margin: "0px 5px",
  },

  buttonsGrid: {
    display: "flex",
    justifyContent: "flex-end",
  },

  dialog: {
    overflow: "hidden",
  },
};

export const CreateCvModal = ({ open, close, createCV }) => {
  const formic = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      experience: "",
    },
    onSubmit: (values) => {
      const newCV = {
        firstName: values.firstName,
        lastName: values.lastName,
        experience: values.experience,
      };
      // "test text"
      // "test text2"
      createCV(newCV);
      close();
    },
  });

  const [countFieldSkills, setCountFieldSkills] = useState(2);
  const [countFieldProgects, setCountFieldProgects] = useState(2);
  const [countProgects] = useState(1);
  //   const [error, setError] = useState(false);

  const fieldsHadler = (e, fieldType) => {
    if (e > 1 && e < 9) {
      if (fieldType === "skill") {
        setCountFieldSkills(e);
      } else {
        setCountFieldProgects(e);
      }
    }
  };

  // const handleForSubmit = (e) => {
  //   debugger;
  //   createCV(newCV);
  // const skillsFields = [];
  // const progectsFields = [];
  // Array.from(Array(countFieldSkills).keys()).forEach((element) => {
  //   debugger;
  //   skillsFields.push(e.target[`skill${element}`].value);
  // });
  // };

  // eslint-disable-next-line no-console
  console.log("Formik: ", formic.values);

  return (
    <Dialog maxWidth="md" open={open}>
      <DialogTitle>
        <Typography variant="h5">NEW CV</Typography>
      </DialogTitle>

      <DialogContent style={styles.dialog}>
        <Grid container spacing={2}>
          <form onSubmit={formic.handleSubmit}>
            <Grid item lg={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={12} xs={12}>
                  <Typography variant="h6">Main information</Typography>
                </Grid>
                <Grid item lg={12} xs={12}>
                  <Divider />
                </Grid>
                <Grid item lg={3} xs={3}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    label="First name"
                    onChange={formic.handleChange}
                    value={formic.values.firstName}
                  />
                </Grid>
                <Grid item lg={3} xs={3}>
                  <TextField
                    name="lastName"
                    variant="outlined"
                    label="Last Name"
                    onChange={formic.handleChange}
                    value={formic.values.lastName}
                  />
                </Grid>
                <Grid item lg={3} xs={3}>
                  <TextField
                    name="experience"
                    variant="outlined"
                    label="Experience (years)"
                    onChange={formic.handleChange}
                    value={formic.values.experience}
                    inputProps={{
                      type: "number",
                      min: "0",
                    }}
                  />
                </Grid>

                <Grid item lg={9} xs={9}>
                  <Typography variant="h6">Professional skills</Typography>
                </Grid>
                <Grid item lg={3} xs={3} style={styles.buttonsGrid}>
                  <Button
                    variant="contained"
                    size="small"
                    style={styles.button}
                    color="secondary"
                    onClick={() => fieldsHadler(countFieldSkills - 1, "skill")}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    style={styles.button}
                    color="primary"
                    onClick={() => fieldsHadler(countFieldSkills + 1, "skill")}
                  >
                    <AddIcon />
                  </Button>
                </Grid>
                <Grid item lg={12} xs={12}>
                  <Divider />
                </Grid>
                {Array.from(Array(countFieldSkills).keys()).map((element) => {
                  return (
                    <Grid item lg={3} xs={3}>
                      <TextField
                        variant="outlined"
                        name={`skill${element}`}
                        label={`skill#${element + 1}`}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid item lg={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={9} xs={9}>
                  <Typography variant="h6">Progect activities</Typography>
                </Grid>
                <Grid item lg={3} xs={3} style={styles.buttonsGrid}>
                  <Button
                    variant="contained"
                    size="small"
                    style={styles.button}
                    color="secondary"
                    onClick={() =>
                      fieldsHadler(countFieldProgects - 1, "progect")
                    }
                  >
                    <RemoveIcon />
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    style={styles.button}
                    color="primary"
                    onClick={() =>
                      fieldsHadler(countFieldProgects + 1, "progect")
                    }
                  >
                    <AddIcon />
                  </Button>
                </Grid>
                <Grid item lg={12} xs={12}>
                  <Divider />
                </Grid>
                {Array.from(Array(countProgects).keys()).map((element) => {
                  return (
                    <Grid container spacing={3}>
                      <Grid item lg={12} xs={12}>
                        <Typography>Progect #{element}</Typography>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <TextField
                          variant="outlined"
                          key={element}
                          name={`progect${element}position`}
                          label="position"
                        />
                      </Grid>
                      {Array.from(Array(countFieldProgects).keys()).map(
                        (field) => {
                          return (
                            <Grid item lg={3} xs={3}>
                              <TextField
                                key={field}
                                variant="outlined"
                                name={`skill${field}`}
                                label={`skill#${field + 1}`}
                              />
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={9} xs={9}>
                  <Typography variant="h6">Discription</Typography>
                </Grid>
                <Grid item lg={12} xs={12}>
                  <Divider />
                </Grid>

                <Grid item lg={12} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<DoneIcon />}
                  >
                    Create cv
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

CreateCvModal.propTypes = {
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  createCV: PropTypes.func.isRequired,
};
