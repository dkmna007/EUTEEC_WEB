import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { increment, decrement } from "../src/actions";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  title: {
    fontSize: 14
  }
});

const Index = props => {
  const { counter, increment, decrement } = props;

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Euteec Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Head>

      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Dispatched from <b>{counter.from}</b>
          </Typography>
          <Typography variant="h3" component="h2">
            {counter.value}
          </Typography>
          <Typography color="textSecondary">{counter.action}</Typography>
        </CardContent>
        <CardActions>
          <Fab
            variant="round"
            color="primary"
            size="small"
            onClick={() => increment()}
          >
            <AddIcon />
          </Fab>
          <Fab
            variant="round"
            color="secondary"
            size="small"
            onClick={() => decrement()}
          >
            <RemoveIcon />
          </Fab>
        </CardActions>
      </Card>
    </>
  );
};

Index.getInitialProps = ({ store, isServer }) => {
  store.dispatch(increment(isServer));

  return { isServer };
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
