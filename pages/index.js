import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { increment, decrement } from '../src/actions'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14
  }
})

const Index = (props) => {
  const {
    counter,
    increment,
    decrement
  } = props

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Dispatched from <b>{counter.from}</b>
        </Typography>
        <Typography variant='h3' component='h2'>
          {counter.value}
        </Typography>
        <Typography color='textSecondary'>{counter.action}</Typography>
      </CardContent>
      <CardActions>
        <Fab
          variant='round'
          color='primary'
          size='small'
          onClick={() => increment()}
        >
          <AddIcon />
        </Fab>
        <Fab
          variant='round'
          color='secondary'
          size='small'
          onClick={() => decrement()}
        >
          <RemoveIcon />
        </Fab>
      </CardActions>
    </Card>
  )
}

Index.getInitialProps = ({ store, isServer }) => {
  store.dispatch(increment(isServer))

  return { isServer }
}

const mapStateToProps = state => {
  return {
    counter: state
  }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
