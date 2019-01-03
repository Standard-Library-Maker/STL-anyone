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
      //hidden: true,
    };
  }

  checkQueue = () => {
    if (this.state.queue === '') {
      alert("Initialize Queue!! Please press start button");
      return true;
    }
    return false;
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

  queuePush = async () => {
    if (this.checkQueue()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }

    let myQueue = this.state.queue;
    let result = this.state.textAreaValue;
    //console.log(myQueue);
    myQueue.push(this.state.pushValue);
    //result.push(this.state.pushValue);
    result.push(this.state.pushValue + ' -> ');

    await this.setState({
      ...this.state,
      queue: myQueue,
      textAreaValue: result,
      //hidden: !this.state.hidden
    });
    //this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  queuePop = async () => {
    if (this.checkQueue()) return false;

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
    if (this.checkQueue()) return false;

    else {
      let myQueue = this.state.queue;
      //console.log(myQueue.state());
      //console.log(this.state);
      //this.forceUpdate();
      alert(myQueue.toString());
    }
  };

  getSize = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    alert(`size : ${myQueue.size()}`);
  };

  checkEmpty = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    alert(myQueue.isEmpty());
  };

  getFront = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    alert(`front value : ${myQueue.front()}`);
  };

  getBack = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    alert(`front value : ${myQueue.back()}`);
  };

  render() {
    let value = this.state;
    let output = '';
    value.textAreaValue.forEach( (v) => {output += v;});

    return (
      <div className="queue">
        <div className="queue-header">
          <HeaderTemplate/>
        </div>
        <div className="title">Queue</div>
        <button className="start-btn" onClick={this.start}>Create Queue</button>
        <div className="test-code">
          <div className="result-area">
            <textarea
              name="resultArea"
              value={output}
              readOnly
            />
            {/*<input
              name="resultArea"
              value={output}
              disabled
              style={{display: this.state.hidden ? 'none' : 'block'}}
            />*/}
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
            <div className="size-form">
              <button onClick={this.getSize}>size</button>
            </div>
            <div className="empty-form">
              <button onClick={this.checkEmpty}>empty?</button>
            </div>
            <div className="front-form">
              <button onClick={this.getFront}>front</button>
            </div>
            <div className="back-form">
              <button onClick={this.getBack}>back</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QueueTemplate;