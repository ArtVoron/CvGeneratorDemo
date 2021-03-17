// import { useHistory } from "react-router";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Button, CardContent, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import PrintCvForm from "../../components/PrintCvForm";

export const PreviewCV = ({ cv }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const printCv = (e) => {
    // history.push(`/print-cv/${e}`);
    window.print();
  };

  return (
    <Grid item lg={12} xs={12}>
      <CardContent>
        <CardContent>
          <Typography>View CV</Typography>
          {JSON.stringify(cv)}
          {/* <Typography>{JSON.parse(cv)}</Typography> */}
          <Button
            variant="contained"
            color="primary"
            // onClick={() => {
            //   printCv(1);
            // }}
            onClick={handlePrint}
          >
            Print CV
          </Button>
          <PrintCvForm cv={cv} ref={componentRef} />
        </CardContent>
      </CardContent>
    </Grid>
  );
};

PreviewCV.propTypes = {
  cv: PropTypes.objectOf(PropTypes.any).isRequired,
};
