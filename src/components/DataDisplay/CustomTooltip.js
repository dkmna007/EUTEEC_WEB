import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

export const CustomTooltip = ({ children, open }) => {
  return (
    <div>
      <HtmlTooltip
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        arrow
        PopperProps={{
          disablePortal: true
        }}
        title={
          <React.Fragment>
            <Typography variant="caption" color="inherit">
              💡 register for club's membership to create a blog{" "}
            </Typography>
          </React.Fragment>
        }
      >
        {children}
      </HtmlTooltip>
    </div>
  );
};
