import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashBoard ({formOpen, setFormOpen}){
    const [events, setEvents] = useState(sampleData);

    function handleCreateEvent(event){
        setEvents([...events, event])
    }

    return(
        <Grid>
            <Grid.Column width={8}>
                <EventList events={events}/>
            </Grid.Column>
            <Grid.Column width={8}>
                {formOpen &&
                    <EventForm 
                        setFormOpen={setFormOpen} 
                        setEvents={setEvents}
                        createEvent={handleCreateEvent}
                    />
                }
            </Grid.Column>
        </Grid>
    )
}