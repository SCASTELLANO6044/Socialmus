import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';

export default function EventDashBoard (){
    return(
        <Grid>
            <Grid.Column width={8}>
                <EventList/>
            </Grid.Column>
            <Grid.Column width={8}>
                <EventForm/>
            </Grid.Column>
        </Grid>
    )
}