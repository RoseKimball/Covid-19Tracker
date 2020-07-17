import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import './Cards.css';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'loading...'
    }
    return (
        <div className='Container'>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className="Card Infected">
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="Card Recovered">
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recoveries</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="Card Dead">
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};

export default Cards;