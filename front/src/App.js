import React, { Component } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';
import EventList from './components/EventList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header as="h2" block>
          <Image circular src="https://teravoz.com.br/assets/images/logotipo_teravoz.png"/>
          {' '} Teravoz Code Challenge
        </Header>
        <Grid columns="three">
          <Grid.Row>
            <Grid.Column>
              <EventList title="Main Queue" queueId="main"/>
            </Grid.Column>
            <Grid.Column>
              <EventList title="900 Queue" queueId="900"/>
            </Grid.Column>
            <Grid.Column>
              <EventList title="910 Queue" queueId="910"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
