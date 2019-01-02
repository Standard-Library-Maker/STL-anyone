import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import './QueueTemplate.scss';

class QueueTemplate extends Component {

  testcode = () => {
    /* Queue Test Code */
    console.log('\nqueue test start');
    let s1 = new stl.Queue.ArrQueue();
    s1.push("hello world");
    s1.push("hello javascript");
    s1.push("this is queue");
    s1.state();
    console.log(`front : ${s1.front()}`);
    console.log(`back : ${s1.back()}`);
    console.log(`size : ${s1.size()}`);

    console.log(`pop : ${s1.pop()}`);
    console.log(`front : ${s1.front()}`);
    console.log(`back : ${s1.back()}`);
    console.log(`size : ${s1.size()}`);
    s1.state();
    s1.clear();
    console.log('=== after clear ===')
    s1.state();
  };

  render() {
    return (
      <div className="queue">
        <div className="queue-header">
          <HeaderTemplate/>
        </div>
        <div className="test-code">
          <button onClick={this.testcode}>Test</button>
        </div>
      </div>
    )
  }
}

export default QueueTemplate;