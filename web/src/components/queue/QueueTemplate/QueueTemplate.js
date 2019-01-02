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
      textAreaValue: [],
    };
  }

  start = async () => {
    let newQueue = new stl.Queue.ArrQueue();
    alert("New Queue Created!");
    await this.setState({
      ...this.state,
      queue: newQueue,
      textAreaValue: [],
    }, () => {
      console.log(newQueue);
    });
    //this.forceUpdate();
    // alert(newQueue.state());
  };

  handleChange = (e) => {
    if(e.target.name === "pushInput") {
      this.setState({
        ...this.state,
        pushValue: e.target.value
      });
    } else if(e.target.name === "resultArea") {
      this.setState({
        ...this.state,
        textAreaValue: e.target.value
      });
    }
  };

  queuePush = async () => {
    if (this.state.queue === '') {
      alert("Initialize Queue!! Please press start button");
      return false;
    }
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }

    let myQueue = this.state.queue;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;
    //console.log(myQueue);
    myQueue.push(pushedValue);
    result.push(pushedValue+' -> ');

    await this.setState({
      ...this.state,
      queue: myQueue,
      textAreaValue: result
    });
    //this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  queuePop = async () => {
    if (this.state.queue === '') {
      alert("Initialize Queue!! Please press start button");
      return false;
    }
    let myQueue = this.state.queue;
    let result = this.state.textAreaValue;
    alert(`pop : ${myQueue.pop()}`);
    result.splice(0,1);

    await this.setState({
      ...this.state,
      queue: myQueue,
      textAreaValue: result
    });
    // alert(`pop : ${this.state.popValue}`);
  };

  getState = () => {
    if (this.state.queue === '') {
      alert("Initialize Queue!! Please press start button");
      return false;
    }
    else {
      let myQueue = this.state.queue;
      //console.log(myQueue.state());
      //console.log(this.state);
      //this.forceUpdate();
      alert(myQueue.toString());
    }
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
            <div className="push-form">
              <input
                type="text"
                name="pushInput"
                value={value.pushValue}
                onChange={this.handleChange}
              />
              <button onClick={this.queuePush}>push</button>
            </div>
            <div className="pop-form">
              <button onClick={this.queuePop}>pop</button>
            </div>
            <div className="state-form">
              <button onClick={this.getState}>state</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QueueTemplate;