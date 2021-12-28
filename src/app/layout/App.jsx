import React from 'react';
import { Container } from 'semantic-ui-react';
import EventDashBoard from '../../features/events/eventsDashboard/EventDashBoard';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  return (
    <div>
      <NavBar/>
      <Container>
        <EventDashBoard/>
      </Container>
    </div>
  );
}
