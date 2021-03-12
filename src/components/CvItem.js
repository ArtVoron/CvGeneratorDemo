import React from "react";

import { Divider, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

export default function CvItem({ cv }) {
  return (
    <Grid item lg={12} xs={12}>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={4}>
          <Typography>{cv.firstName}</Typography>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Typography>{cv.lastName}</Typography>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Typography>{cv.experience}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}

CvItem.propTypes = {
  cv: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
