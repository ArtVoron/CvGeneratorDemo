import * as React from "react";

import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

export default class PrintCvForm extends React.PureComponent {
  render() {
    const { cv } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item lg={12} xs={12}>
          <Typography>{cv.id}</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography>{cv.firstName}</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography>{cv.lastName}</Typography>
        </Grid>
      </Grid>
    );
  }
}

PrintCvForm.propTypes = {
  cv: PropTypes.objectOf().isRequired,
};
