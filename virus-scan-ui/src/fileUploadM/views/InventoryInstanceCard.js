import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    maxHeight: 700,
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

export default function InventoryInstanceCard(props) {
  const classes = useStyles();
  let {instanceDetails} = props
  console.log(instanceDetails)

  if(instanceDetails.instanceId !== undefined && instanceDetails.instanceId.toString().length > 0) {
    return (
        <div>
            <hr />
            <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" component="h6">
                Instance Name : {instanceDetails.instanceId}
              </Typography>
              <Typography variant="h6" component="h6">
                Customer Name : {instanceDetails.customerName}
                </Typography>
              <Typography variant="h6" component="h6">
                Environment : {instanceDetails.environment}
              </Typography>
              <Typography variant="h6" component="h6">
                Instance Types : {instanceDetails.instanceTypes}
              </Typography>
              <Typography variant="h6" component="h6">
                IMS Org Id : {instanceDetails.imsOrgId}
                </Typography>
              <Typography variant="h6" component="h6">
                Tenant Id : {instanceDetails.tenantId}
                </Typography>
              <Typography variant="h6" component="h6">
                Build Number : {instanceDetails.buildNumber}
                </Typography>
              <Typography variant="h6" component="h6">
                Cloud : {instanceDetails.deployType}
              </Typography>
              <Typography variant="h6" component="h6">
                Hosted : {instanceDetails.hostedType}
              </Typography>
            </CardContent>
            </Card>
        </div>
      );
  } else if(instanceDetails.error.code !== undefined) {
    return (
      <div>
          <hr />
          <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" component="h6">
              Error Code : {instanceDetails.error.code}
            </Typography>
            <Typography variant="h6" component="h6">
              Error Message : {instanceDetails.error.message}
              </Typography>
          </CardContent>
          </Card>
      </div>
    );
  } else {
    return null;
  }
}