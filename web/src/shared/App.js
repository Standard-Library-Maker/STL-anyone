import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Test, Queue, Stack, PriorityQueue } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/test" component={Test}/>
        <Route path="/queue" component={Queue}/>
        <Route path="/stack" component={Stack}/>
        <Route path="/priorityqueue" component={PriorityQueue}/>
      </div>
    );
  }
}

export default App;
