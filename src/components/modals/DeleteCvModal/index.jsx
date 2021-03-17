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
import PropTypes from "prop-types";

export const DeleteCvModal = ({ open, close, deleteCV, id }) => {
  const handleForSubmit = () => {
    deleteCV(id);
    close();
  };

  return (
    <Dialog maxWidth="md" open={open}>
      <DialogTitle>
        <Typography variant="h5">DELETE RESUME</Typography>
      </DialogTitle>

      <DialogContent style={{ overflow: "hidden" }}>
        <Grid container spacing={2}>
          <Grid item lg={12} xs={12}>
            <Typography>
              Are you sure you want to delete this resume?
            </Typography>
          </Grid>
          <Grid item lg={12} xs={12} style={{ paddingTop: 24 }}>
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

DeleteCvModal.propTypes = {
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  deleteCV: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
