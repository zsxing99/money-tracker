import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, AddIcon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bottomRight: {
    backgroundColor: '#00acc1 !important',
    border: '0px !important',
    position: 'fixed',
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  }
}));

export default function TestMenu(props) {
  const classes = useStyles();

  return (
    <Fab
      variant="extended"
      className={classes.bottomRight}
      onClick={props.onClick}
    >
      Finish Task
    </Fab>
  );
}
