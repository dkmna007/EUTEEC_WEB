import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReplyIcon from "@material-ui/icons/Reply";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ProgressButton from "../Progress/ProgressButton";
import { formatDistanceToNow } from "date-fns";
import { setisLoginDialogOpen } from "@/actions";

const useStyles = makeStyles(theme => ({
  content: {
    // color: "green",
    // position: "relative",
    padding: theme.spacing(3, 2)
    // marginBottom: 30,
    // margin: theme.spacing(20, 40),
    // justifyContent: "center"
  },
  title: {
    // color: "#3C4858",
    marginTop: "30px",
    fontSize: "1.5625rem",
    lineHeight: "1.3em",
    textAlign: "center",
    minHeight: "20px",
    fontFamily: `Roboto Slab", Times New Roman, serif`,
    fontWeight: 800,
    marginBottom: "30px",
    textDecoration: "none"
  },

  avator: {
    width: 64,
    height: 64,
    float: `left !important`,
    // padding: "10px",
    margin: `0 auto`,
    overflow: `hidden`,
    boxShadow: `0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)`,
    marginRight: `15px`,
    borderRadius: `50%`
  },
  commentview: {
    flex: 1,
    overflow: "hidden",
    paddingRight: `10px`
  },
  commentHeader: {
    // color: "#3C4858",
    marginTop: "10px",
    minHeight: "32px",
    fontFamily: `Roboto Slab", "Times New Roman, serif`,
    fontWeight: 700,
    marginBottom: "10px",
    textDecoration: "none"
  },
  commentBody: {
    color: `#ffff !important`
  },
  button: { float: "right" },
  postComment: {
    // color: "#3C4858",
    marginTop: "60px",
    lineHeight: "1.4em",
    minHeight: "32px",
    textAlign: "center",
    fontSize: "1.5625rem",
    fontFamily: `Roboto Slab", Times New Roman, serif`,
    fontWeight: 700,
    marginBottom: "30px",
    textDecoration: "none"
  },
  texfield: {
    overflow: "hidden"
  },
  postButton: { textAlign: "right", marginTop: 10 }
}));

export const Comments = props => {
  const classes = useStyles();

  const {
    currentUser,
    comments,
    handleCommentsSave,
    handleFormChange,
    isCommentPostLoading
  } = props;

  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className={classes.content}>
      {/* comments view */}
      <h3 className={classes.title}>{`${
        comments && comments.length
      } Comments`}</h3>

      {comments &&
        comments.map((comment, key) => (
          <div>
            <img
              className={classes.avator}
              src={comment.user && comment.user.avator}
              alt="..."
            />

            <div className={classes.commentview}>
              <h5 className={classes.commentHeader}>
                <span>
                  {comment.user && comment.user.name}{" "}
                  <small>
                    ·{" "}
                    {comment &&
                      formatDistanceToNow(new Date(comment.date), {
                        addSuffix: true
                      })}
                  </small>
                </span>
              </h5>
              <p className={classes.commentBody}>{comment.body}</p>
              <div className={classes.button}>
                <div>
                  <Button
                    variant="text"
                    color="primary"
                    startIcon={<ReplyIcon />}
                  >
                    Reply
                  </Button>
                  <Button
                    variant="text"
                    color="primary"
                    startIcon={<FavoriteIcon />}
                  >
                    24
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* comment input */}

      <>
        <h3 className={classes.title}>Post your comment</h3>
        <div>
          <img
            className={classes.avator}
            src={currentUser && currentUser.photoURL}
            alt="Avator"
          />

          <div className={classes.texfield}>
            <TextField
              name="body"
              onChange={handleFormChange}
              multiline
              rows={5}
              fullWidth
              label="write some nice stuff or nothing..."
            />
          </div>
          <div className={classes.postButton}>
            <ProgressButton
              loading={isCommentPostLoading}
              lable="post comment"
              handleButtonClick={
                !user
                  ? dispatch(setisLoginDialogOpen(true))
                  : handleCommentsSave
              }
              color="primary"
              style={{ borderRadius: 20 }}
            />
          </div>
        </div>
      </>
    </div>
  );
};
