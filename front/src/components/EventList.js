import React, { Component, Fragment } from 'react';
import { Card, Feed } from 'semantic-ui-react';
import openSocket from 'socket.io-client';
import PropTypes from 'prop-types';
import { clone } from 'lodash';
import uuid from 'uuid/v1';
import EventListItem from './EventListItem';

class EventList extends Component {

  componentWillMount() {
    this.socket = openSocket('http://localhost:9001');
    this.setState({ events: [] });
  }

  componentDidMount() {
    this.socket.on(this.props.queueId, this.onEventReceived);
  }

  onEventReceived = msg => {
    let newState = clone(this.state);
    newState.events.push(JSON.parse(msg));
    this.setState(newState);
  }

  items = () => this.state.events.map(event => <EventListItem key={uuid()} event={event}/>)

  render() {
    return (
      <Fragment>
        <Card>
          <Card.Content>
            <Card.Header>
              { this.props.title }
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <this.items />
            </Feed>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

EventList.propTypes = {
  title: PropTypes.string.isRequired,
  queueId: PropTypes.string.isRequired
}

export default EventList;
