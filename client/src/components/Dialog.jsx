/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaTrash } from "react-icons/fa";
import supabase from "../../supaBaseData";

const AlertDialog = ({ item, onDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleClose = async (e) => {
    setOpen(false);
  };

  const handleDelete = async (e) => {
    setOpen(false);
    const rowId = e.target.value;

    const response = await supabase
      .from("row_items")
      .delete()
      .eq("item_id", rowId);

    onDelete();
  };

  return (
    <React.Fragment>
      <Button
        size="small"
        variant="outlined"
        onClick={handleClickOpen}
        className=" absolute  right-0"
      >
        <FaTrash className="text-white p-0" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will permanently delete the data stored.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button value={item.item_id} onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertDialog;
