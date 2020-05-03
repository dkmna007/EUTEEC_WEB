import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import {
  makeStyles,
  CardContent,
  Card,
  Typography,
  Divider
} from "@material-ui/core/";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxHeight: 251,
    width: "100%",
    outlineStyle: "solid",
    outlineWidth: 1,
    outlineColor: theme.palette.divider
  },
  dropzone: {},
  dropzoneText: {
    color: "#17141d",
    fontSize: 12
  }
}));
export default function DropZone(props) {
  const classes = useStyles();
  const {
    handleFileChange,
    maxFileSize,
    filesLimit,
    lable,
    acceptedFiles,
    initialFiles,
    dropzoneText
  } = props;

  const [state, setstate] = React.useState(false);
  React.useEffect(() => {
    initialFiles ? setstate(true) : null;
  }, [initialFiles]);

  return (
    <Card square variant="outlined" className={classes.card}>
      <CardContent>
        <Typography
          color="secondary"
          align="center"
          variant="h6"
          component="h3"
        >
          {lable}
        </Typography>

        <Divider />
        <br />
        {state ? (
          <DropzoneArea
            dropzoneClass={classes.dropzone}
            dropzoneParagraphClass={classes.dropzoneText}
            maxFileSize={maxFileSize}
            filesLimit={filesLimit}
            showPreviewsInDropzone={false}
            showPreviews={true}
            acceptedFiles={acceptedFiles}
            dropzoneText={dropzoneText}
            initialFiles={[initialFiles]}
            onChange={handleFileChange}
          />
        ) : null}
        {!state ? (
          <DropzoneArea
            maxFileSize={maxFileSize}
            dropzoneParagraphClass={classes.dropzoneText}
            filesLimit={filesLimit}
            showFileNamesInPreview={true}
            acceptedFiles={acceptedFiles}
            dropzoneText={dropzoneText ? dropzoneText : "Add Files"}
            onChange={handleFileChange}
          />
        ) : null}
      </CardContent>
    </Card>
  );
}
