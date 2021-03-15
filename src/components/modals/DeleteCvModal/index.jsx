/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export const DeleteCvModal = ({ open, close, deleteCV, id }) => {
  const handleForSubmit = () => {
    deleteCV(id);
    close();
  };

  return (
    <Dialog maxWidth="md" open={open}>
      <DialogTitle>
        <Typography variant="h5">DELETE CV</Typography>
      </DialogTitle>

      <DialogContent style={{ overflow: "hidden" }}>
        <Grid container spacing={2}>
          <Grid item lg={12} xs={12}>
            <Typography>Are you sure want to delete this CV?</Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Button
              startIcon={<DeleteOutlineIcon />}
              variant="contained"
              color="primary"
              onClick={handleForSubmit}
            >
              Yes, delete
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: 8 }}
              color="secondary"
              onClick={close}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
