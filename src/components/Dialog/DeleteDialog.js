import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

/* page components */
import { ProgressButton, AlertMessage } from "@/components";

export default function DeleteDialog({
  isDeleteBlogLoading,
  handleCloseDeleteDialog,
  userInput,
  handleDelete
}) {
  const warning = "Are you sure ? You won't be able to revert this";
  return (
    <div>
      <Dialog open={userInput.isOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete Blog</DialogTitle>
        <DialogContent>
          <AlertMessage
            success={userInput.success}
            error={userInput.error}
            warning={userInput.success ? null : warning}
          />
        </DialogContent>

        <DialogActions>
          {userInput.success ? null : (
            <ProgressButton
              handleButtonClick={handleDelete}
              loading={isDeleteBlogLoading}
              lable="Delete"
            />
          )}
          <Button
            disabled={isDeleteBlogLoading ? true : false}
            variant="contained"
            onClick={handleCloseDeleteDialog}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
