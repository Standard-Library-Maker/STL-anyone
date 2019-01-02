import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import './QueueTemplate.scss';

class QueueTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: '',
      pushValue: '',
      popValue: '',
      textAreaValue: '',
    };
  }

  start = async () => {
    let newQueue = new stl.Queue.ArrQueue();
    await this.setState({
      queue: newQueue
    }, () => {
      console.log(newQueue);
    });
    this.forceUpdate();
    // alert(newQueue.state());
  };

  handleChange = (e) => {
    if(e.target.name === "pushInput") {
      this.setState({
        pushValue: e.target.value
      });
    } else if(e.target.name === "popInput") {
      this.setState({
        popValue: e.target.value
      });
    } else if(e.target.name === "resultArea") {
      this.setState({
        textAreaValue: e.target.value
      });
    }
  };

  queuePush = () => {
    let myQueue = this.state.queue;
    let pushedValue = this.state.pushValue;
    console.log(myQueue);
    myQueue.push(pushedValue);

    this.setState({
      queue: myQueue,
      textAreaValue: `${pushedValue} ->`
    }, () => {
      console.log(myQueue);
    });
    this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  queuePop = async () => {
    let myQueue = this.state.queue;
    alert(`pop : ${myQueue.pop(this.state.popValue)}`);

    await this.setState({
      queue: myQueue
    }, () => {
      console.log(myQueue);
    });
    // alert(`pop : ${this.state.popValue}`);
  };

  getState = () => {
    let myQueue = this.state.queue;
    console.log(myQueue.state());
    console.log(this.state);
    this.forceUpdate();
    alert(myQueue.state());
  };

  render() {
    let value = this.state;
    return (
      <div className="queue">
        <div className="queue-header">
          <HeaderTemplate/>
        </div>
        <button className="start-btn" onClick={this.start}>Start</button>
        <div className="test-code">
          <div className="result-area">
            <textarea
              name="resultArea"
              value={value.textAreaValue}
              readOnly
            />
          </div>
          <div className="user-input-section">
            <form className="push-form">
              <input
                type="text"
                name="pushInput"
                value={value.pushValue}
                onChange={this.handleChange}
              />
              <button onClick={this.queuePush}>push</button>
            </form>
            <form className="pop-form">
              <input
                type="text"
                name="popInput"
                value={value.popValue}
                onChange={this.handleChange}
              />
              <button onClick={this.queuePop}>pop</button>
            </form>
            <form className="state-form">
              <button onClick={this.getState}>state</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default QueueTemplate;