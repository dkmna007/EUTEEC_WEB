import React from "react";
import { useTheme, Card, Typography, CardContent } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import ReactMde from "react-mde";
import * as Showdown from "showdown";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  editor: {
    background: "#17141d",
    color: "white",
    width: "100%",
    outlineStyle: "solid",
    outlineWidth: 1,
    outlineColor: theme.palette.divider,
    minHeight: 400
  }
}));
export default function MarkDownEditor(props) {
  const theme = useTheme();
  const classes = useStyles();
  const { handleEditorChange, userInput } = props;
  const [selectedTab, setSelectedTab] = React.useState("write");
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

  return (
    <div>
      <Card square variant="outlined">
        <CardContent>
          <Typography
            align="center"
            color="secondary"
            variant="h6"
            component="h3"
          >
            Blog Content
          </Typography>
        </CardContent>
      </Card>

      <ReactMde
        classes={{
          textArea: classes.editor
        }}
        value={userInput.content}
        onChange={handleEditorChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
}
