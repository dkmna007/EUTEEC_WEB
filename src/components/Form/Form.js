import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  TextField,
  CardContent,
  Card,
  Typography,
  Divider,
  InputAdornment
} from "@material-ui/core/";
import TitleIcon from "@material-ui/icons/Title";
import CategoryIcon from "@material-ui/icons/Category";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  form: {
    width: "100%",
    outlineStyle: "solid",
    outlineWidth: 1,
    outlineColor: theme.palette.divider
  }
}));

const GeneralDetailForm = props => {
  const classes = useStyles();
  const { handleFormChange, userInput, categories } = props;
  return (
    <div className={classes.form}>
      <Card square variant="outlined" style={{ maxHeight: 500 }}>
        <CardContent>
          <Typography
            align="center"
            color="secondary"
            variant="h6"
            component="h3"
          >
            General Details
          </Typography>
          <Divider />
          <br />

          <TextField
            name="title"
            value={userInput.title}
            error={!userInput.title ? true : false}
            helperText={!userInput.title ? "required" : null}
            margin="normal"
            id="outlined-multiline-static"
            label="Post title..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              )
            }}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            margin="normal"
            name="membershipCategory"
            select
            label="Select Category"
            value={userInput.membershipCategory}
            onChange={handleFormChange}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CategoryIcon />
                </InputAdornment>
              )
            }}
            fullWidth
          >
            {categories.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            name="mediaUrl"
            value={userInput.mediaUrl}
            // error={!userInput.youtubeUrl ? true : false}
            // helperText={!userInput.youtubeUrl ? "required" : null}
            margin="normal"
            id="outlined-multiline-static"
            label="Youtube or any other media url..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <YouTubeIcon />
                </InputAdornment>
              )
            }}
            onChange={handleFormChange}
            fullWidth
          />

          {/* <AlertMessage error={error} /> */}
        </CardContent>
      </Card>
    </div>
  );
};
export default GeneralDetailForm;
