import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Avatar
} from "@material-ui/core/";
import Link from "next/link";

export default function MemberCard({ profiler }) {
  return (
    <Card className={"PeaMemberCard-root"}>
      <Avatar
        className={"MuiAvatar-root"}
        src={profiler.userAvator}
        title="member"
      />
      <Link href={`/profile/${profiler.userId}`}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          className={"MuiButton--viewProfile"}
        >
          View Profile
        </Button>
      </Link>
      <CardContent className={"MuiCardContent-root"}>
        <Typography
          color="secondary"
          gutterBottom
          align="center"
          variant="h5"
          component="h2"
        >
          {profiler.name}
        </Typography>
        <Typography
          gutterBottom
          align="center"
          variant="subtitle2"
          component="h4"
        >
          {profiler.profession ? profiler.profession : profiler.education}
        </Typography>
        <Typography
          variant="inherit"
          color="textSecondary"
          align="center"
          component="p"
        >
          "{profiler.bio}"
        </Typography>
      </CardContent>
    </Card>
  );
}
