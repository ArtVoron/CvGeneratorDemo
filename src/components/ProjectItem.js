/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import { Divider, Grid, Typography } from "@material-ui/core";
// import PropTypes from "prop-types";

export default function ProjectItem({ form, field, ...otherProps }) {
  // eslint-disable-next-line no-console
  console.log("AAA", field.value);
  return (
    <Grid item lg={12} xs={12}>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={4}>
          <Typography>{field.value.id}</Typography>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Typography>{field.value.position}</Typography>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Typography>{field.value.experience}</Typography>
        </Grid>
      </Grid>
      <Divider />
      {/* <Grid item lg={12} xs={12}>
        <Typography>{otherProps}</Typography>
      </Grid> */}
    </Grid>
  );
}

// ProjectItem.propTypes = {
//   cv: PropTypes.objectOf(PropTypes.any).isRequired,
// };
