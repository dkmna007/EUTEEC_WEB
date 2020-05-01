import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SaveIcon from "@material-ui/icons/Save";
import {
  TextField,
  CardContent,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Grid,
  InputAdornment
} from "@material-ui/core/";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CategoryIcon from "@material-ui/icons/Category";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import ProgressButton from "../Progress/ProgressButton";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  form: {
    width: "100%"
  }
}));

export const MembershipForm = props => {
  const classes = useStyles();
  const {
    handleFormChange,
    userInput,
    handleSave,
    isLoading,
    action,
    categories,
    occupation
  } = props;

  const subheader =
    action === "join" &&
    "Complete the form below to sign up for our membership service.";
  const title = action === "join" && "Club Membership Registration";

  return (
    <Card style={{ background: "#17141d" }}>
      <CardHeader subheader={subheader} title={title} />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              name="name"
              value={userInput.name}
              error={!userInput.name ? true : false}
              helperText={!userInput.name ? "Name is required" : null}
              margin="dense"
              id="outlined-multiline-static"
              label="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PermIdentityIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleFormChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              name="email"
              value={userInput.email}
              error={!userInput.email ? true : false}
              helperText={!userInput.email ? "Email is required" : null}
              margin="dense"
              id="outlined-multiline-static"
              label="Email Address"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleFormChange}
              disabled
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              name="phoneNumber"
              value={userInput.phoneNumber}
              error={!userInput.phoneNumber ? true : false}
              helperText={
                !userInput.phoneNumber ? "phone number is required" : null
              }
              margin="dense"
              id="outlined-multiline-static"
              label="Phone Number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CallOutlinedIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleFormChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              margin="dense"
              name="membershipCategory"
              select
              label="Select Group"
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
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              margin="dense"
              name="profession"
              select
              label="Select Occupation"
              value={userInput.profession}
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
              {occupation.map(option => (
                <option key={option.value} value={option.value}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              name="hobbies"
              value={userInput.hobbies}
              // helperText={!userInput.bio ? "Email is required" : null}
              margin="dense"
              id="outlined-multiline-static"
              label="Hobbies"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AcUnitOutlinedIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleFormChange}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              name="bio"
              value={userInput.bio}
              error={!userInput.bio ? true : false}
              helperText={!userInput.bio ? "this field is required" : null}
              margin="dense"
              id="outlined-multiline-static"
              label="Bio"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MenuBookIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleFormChange}
              rows={5}
              multiline
              fullWidth
            />
          </Grid>
        </Grid>
        {/* <AlertMessage error={error} /> */}
      </CardContent>
      <Divider />
      <CardActions>
        <ProgressButton
          label="Register"
          handleButtonClick={handleSave}
          loading={isLoading}
          startIcon={<SaveIcon />}
          actionType={action}
        />
      </CardActions>
    </Card>
  );
};
