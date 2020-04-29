import React from "react";
import { Button, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { isEmailvalid } from "@/utils";
const useStyles = makeStyles(theme => ({
  root: {
    // height: "100vh"
    marginTop: -30,
    marginBottom: -50
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export function ContactForm(props) {
  const classes = useStyles();
  const { handleFormChange, handleSendMessage, userInput } = props;

  return (
    <>
      <TextField
        name="name"
        variant="outlined"
        margin="normal"
        defaultValue={userInput.name}
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        onChange={handleFormChange}
        autoFocus
      />

      <TextField
        name="email"
        variant="outlined"
        margin="normal"
        helperText={
          !userInput.email
            ? "* required"
            : !isEmailvalid(userInput.email) &&
              "You have entered an invalid email address!"
        }
        defaultValue={userInput.email}
        error={!isEmailvalid(userInput.email)}
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        onChange={handleFormChange}
        autoFocus
      />
      <TextField
        name="message"
        id="outlined-multiline-flexible"
        error={userInput.message ? false : true}
        helperText={"* required"}
        fullWidth
        label="Message"
        multiline
        rows="5"
        onChange={handleFormChange}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSendMessage}
      >
        Submit
      </Button>
    </>
  );
}
