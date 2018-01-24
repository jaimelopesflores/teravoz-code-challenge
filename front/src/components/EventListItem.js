import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

const EventListItem = ({ event }) => (
  <Feed.Event>
    <Feed.Label>
      <Icon name="phone"/>
    </Feed.Label>
    <Feed.Content>
      <Feed.Date content={`Type: ${event.type}`} />
      <Feed.Summary>
        Their Number: { event.their_number }
      </Feed.Summary>
    </Feed.Content>
  </Feed.Event>
);

export default EventListItem;
