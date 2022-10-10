import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InProgress from './InProgress';
import DeliveryTimeline from './DeliveryTimeline';

export default function ShippingTracker() {
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
            
          />          
          <Button variant="contained" sx={{ mx: 4, color: 'white', width: 140, height: 46 }}>Search</Button>
          <Button variant="contained" sx={{ color: 'white', width: 140, height: 46 }}>Clear</Button>
       </Container>
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
    </>
  )
}