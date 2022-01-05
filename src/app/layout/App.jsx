import React, {Fragment, useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashBoard from '../../features/events/eventsDashboard/EventDashBoard';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashBoard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </Fragment>
  );
}
