import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import StatusPolling from './StatusPolling';

export default function ShippingTracker() {
  const [disableSearch, setDisableSearch] = React.useState<boolean>(true);
  const [trackingNumber, setTrackingNumber] = React.useState<string>('');
  const [triggerPolling, setTriggerPolling] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (trackingNumber !== '' && trackingNumber.length > 6) { setDisableSearch(false); }
    else setDisableSearch(true);
  }, [trackingNumber])

  const clearHandle = () => {
    setTrackingNumber(''); setTriggerPolling(false);
  }
  const searchHandle = () => {
    setTriggerPolling(true);
  }

  return (
    <>
       <Container maxWidth={false} sx={{ display: 'flex', m: 4, justifyContent: 'center', alignItems: 'center', width: '100vw' }} >
          <Typography
            variant="h5"
            noWrap
            sx={{
              m: 4,
              display: 'flex',
              letterSpacing: '.3rem',
              color: 'primary',
              textDecoration: 'none',
            }}
          >
            Track order shipping:
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Required"
            placeholder="Tracking number"
            value={trackingNumber}
            onChange={(e: any) => { setTrackingNumber(e.target.value) } }
          />          
          <Button variant="contained" onClick={searchHandle} disabled={disableSearch} sx={{ mx: 4, color: 'white', width: 140, height: 46 }}>Search</Button>
          <Button variant="contained" onClick={clearHandle} sx={{ color: 'white', width: 140, height: 46 }}>Clear</Button>
       </Container>
       {triggerPolling && <StatusPolling trackingNumber={trackingNumber}/>}
    </>
  )
}