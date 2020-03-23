import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    maxHeight: 80,
    // backgroundColor: "lightcoral"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 15,
    color: green
  },
  pos: {
    marginBottom: 1000,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  let {os, version , clamav, label} = props
  const bull = <span className={classes.bullet}>•</span>;

  if(os != undefined && os.toString().length > 0) {
    return (
        <div>
            <hr />
            <Card className={classes.card}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {label}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    {os != undefined ? os : ''} {version != undefined ? version : ''}&nbsp;&nbsp;{clamav != undefined ? clamav : ''}
            </Typography>
            </CardContent>
            </Card>
        </div>
      );
  } else {
      return null;
  }
}