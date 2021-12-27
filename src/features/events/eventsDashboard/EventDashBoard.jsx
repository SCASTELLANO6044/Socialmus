import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function EventDashBoard(){
    return(
        <Grid>
            <Grid.Column width={8}>
                <h2>Left Column</h2>
            </Grid.Column>
            <Grid.Column width={8}>
                <h2>Right Column</h2>
            </Grid.Column>
        </Grid>
    )
}