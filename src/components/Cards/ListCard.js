import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
/*  */
export function ListCard(props) {
  const { Subtitle, Paragraph, Img, data } = props;

  return (
    <>
      <Grid item sm={6} md={5} xs={12}>
        <Box mb={3}>
          <Typography gutterBottom color="primary" variant="h6">
            {Subtitle}
          </Typography>
          <Typography gutterBottom variant="inherit">
            {Paragraph}
          </Typography>
        </Box>

        <Box>
          <ul>
            {data.map(list => {
              return <li key={list.Li}>{list.Li}</li>;
            })}
          </ul>
        </Box>
      </Grid>
      <Grid sm={6} md={5} xs={12}>
        <img src={Img} style={{ width: "100%", maxHeight: 300 }} />
      </Grid>
    </>
  );
}
