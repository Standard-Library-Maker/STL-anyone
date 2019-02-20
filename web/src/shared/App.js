import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Test, Queue, Stack, PriorityQueue, HashMap, Deque, Heap, BinarySearchTree, BinaryTree } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/test" component={Test}/>
        <Route path="/queue" component={Queue}/>
        <Route path="/stack" component={Stack}/>
        <Route path="/priority_queue" component={PriorityQueue}/>
        <Route path="/hash_map" component={HashMap}/>
        <Route path="/deque" component={Deque}/>
        <Route path="/heap" component={Heap}/>
        <Route path="/binary_search_tree" component={BinarySearchTree}/>
        <Route path="/binary_tree" component={BinaryTree}/>
      </div>
    );
  }
}

export default App;