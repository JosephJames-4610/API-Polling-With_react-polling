import React from 'react';
import axios from 'axios';
import ReactPolling from 'react-polling';
import InProgress from './InProgress';
import DeliveryTimeline from './DeliveryTimeline';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const fetchShippingStatusWrapper = (url) => {
  return async () => {
    axios.get(url)
    .then((res) => {
      console.log(res);
      return res;
    })
  }
};

const renderDuringPolling = () => {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', m: 4, justifyContent: 'center', alignItems: 'center', width: '100vw' }} >
      <Paper elevation={6} sx={{ display: 'flex', flexDirection: 'column', my: 2, justifyContent: 'center', alignItems: 'center', width: 800 }}>
        <Typography
            variant="h5"
            noWrap
            sx={{
              m: 4,
              mt: 8,
              display: 'flex',
              letterSpacing: '.3rem',
              color: 'primary',
              textDecoration: 'none',
            }}
          >
            Getting shipping status from Fedex...
          </Typography>
          <InProgress />
        </Paper>
    </Container>
  )
}

const renderAfterPolling = () => {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', m: 4, justifyContent: 'center', alignItems: 'center', width: '100vw' }} >
    <Paper elevation={6} sx={{ display: 'flex', flexDirection: 'column', my: 2, justifyContent: 'center', alignItems: 'center', width: 800 }}>
      <Typography
          variant="h5"
          noWrap
          sx={{
            m: 4,
            mt: 8,
            display: 'flex',
            letterSpacing: '.3rem',
            color: 'primary',
            textDecoration: 'none',
          }}
        >
          Shipping Status
        </Typography>
        <DeliveryTimeline />
      </Paper>
  </Container>
  )
}

const pollingRenderHandler = ({ isPolling }) => {
  return isPolling ? renderDuringPolling() : renderAfterPolling();

};

export default function StatusPolling({ trackingNumber }) {
  return(
    <ReactPolling
      url={`http://localhost:4000/shop-now-order/shipping-status?trackingnumber=${trackingNumber}`}
      interval={2000}
      retryCount={2}
      promise={fetchShippingStatusWrapper(`http://localhost:4000/shop-now-order/shipping-status?trackingnumber=${trackingNumber}`)}
      onFailure={()=>{}}
      onSuccess={({ data: { status } }) => {
        return status === 'Pending'
      }}
      render={pollingRenderHandler}
    />    
  )
}