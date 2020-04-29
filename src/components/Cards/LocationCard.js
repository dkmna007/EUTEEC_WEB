import React from "react";
import { Typography, Paper } from "@material-ui/core/";

export default function LocationCard(props) {
  const { title } = props;

  return (
    <>
      <Paper
        style={{
          overflow: "hidden"
        }}
      >
        <iframe
          title="EuteecClubLocation"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1994.8668830338465!2d35.93328408588554!3d-0.37301785754001915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182987e88ed4a835%3A0xd17ab41538bef8f6!2sEgerton+University+Njoro%2C+Nakuru!3m2!1d-0.3728083!2d35.9339297!5e0!3m2!1sen!2ske!4v1562607281399!5m2!1sen!2ske"
          style={{ borderBlockStyle: 0, width: "100%", minHeight: 360 }}
          allowfullscreen
        ></iframe>
      </Paper>
      <br />
      <Typography color="primary" gutterBottom variant="h6" component="h2">
        {title}
      </Typography>
    </>
  );
}
