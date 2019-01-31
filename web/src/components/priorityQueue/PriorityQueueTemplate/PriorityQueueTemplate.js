import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './PriorityQueueTemplate.scss';

class PriorityQueueTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priorityQueue: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkPriorityQueue = () => {
    if (this.state.priorityQueue === '') {
      alert("Initialize Priority Queue!! Please press start button");
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

  setHideValue = value => {
    if(this.state.hideMsg===false) {
      this.setState({
        ...this.state,
        hideMsg: value
      })
    }
  };

  start = async () => {
    let newPriorityQueue= new stl.PriorityQueue();
    // alert("New Stack Created!");
    await this.setState({
      ...this.state,
      priorityQueue: newPriorityQueue,
      textAreaValue: [],
      toastMsg: 'New Priority Queue Created!',
      hideMsg: false,
    }, () => {
      console.log(newPriorityQueue);
    });
    //this.forceUpdate();
    // alert(newQueue.state());
  };

  priorityQueuePush = async () => {
    if (this.checkPriorityQueue()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }

    let myPriorityQueue = this.state.priorityQueue;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;
    //console.log(myQueue);
    myPriorityQueue.push(pushedValue);
    result.push(pushedValue+' -> ');

    await this.setState({
      ...this.state,
      stack: myPriorityQueue,
      textAreaValue: result
    });
    //this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  priorityQueuePop = async () => {
    if (this.checkPriorityQueue()) return false;

    let myPriorityQueue = this.state.priorityQueue;
    let result = this.state.textAreaValue;
    //alert(`pop : ${myPriorityQueue.pop()}`);
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      stack: myPriorityQueue,
      textAreaValue: result,
      toastMsg: `poped value : ${myPriorityQueue.pop()}`,
      hideMsg: false
    });
    // alert(`pop : ${this.state.popValue}`);
  };

  getState = async () => {
    if (this.checkPriorityQueue()) return false;
    else {
      let myPriorityQueue = this.state.priorityQueue;
      //console.log(this.state);
      //console.log(myPriorityQueue);
      //this.forceUpdate();
      //alert(JSON.stringify(myPriorityQueue));
      await this.setState({
        ...this.state,
        toastMsg: JSON.stringify(myPriorityQueue),
        hideMsg: false
      });
    }
  };

  getSize = () => {
    if (this.checkPriorityQueue()) return false;
    let myPriorityQueue = this.state.priorityQueue;
    this.setState({
      ...this.state,
      toastMsg: `size : ${myPriorityQueue.size()}`,
      hideMsg: false
    });
  };

  checkEmpty = () => {
    if (this.checkPriorityQueue()) return false;
    let myPriorityQueue = this.state.priorityQueue;
    this.setState({
      ...this.state,
      toastMsg: `isEmpty ? ${myPriorityQueue.isEmpty().toString()}`,
      hideMsg: false
    });
  };

  getTop = () => {
    if (this.checkPriorityQueue()) return false;
    let myPriorityQueue = this.state.priorityQueue;
    this.setState({
      ...this.state,
      toastMsg: `front value : ${myPriorityQueue.top()}`,
      hideMsg: false
    });
  };

  render() {
    let value = this.state;
    let output = '';
    value.textAreaValue.forEach( (v) => {output += v;});
    return(
      <div className="priorityQueue">
        <div className="pq-header">
          <HeaderTemplate/>
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg}/>
        </div>
        <div className="title">Priority Queue</div>
        <button className="start-btn" onClick={this.start}>Create Priority Queue</button>
        <div className="test-code">
          <div className="user-input-section">
            <div className="push-form">
              <input
                type="text"
                name="pushInput"
                value={value.pushValue}
                onChange={this.handleChange}
              />
              <button onClick={this.priorityQueuePush}>push</button>
            </div>
            <div className="pop-form">
              <button onClick={this.priorityQueuePop} disabled={!value.hideMsg}>pop</button>
            </div>
            <div className="state-form">
              <button onClick={this.getState} disabled={!value.hideMsg}>state</button>
            </div>
            <div className="size-form">
              <button onClick={this.getSize} disabled={!value.hideMsg}>size</button>
            </div>
            <div className="empty-form">
              <button onClick={this.checkEmpty} disabled={!value.hideMsg}>empty?</button>
            </div>
            <div className="top-form">
              <button onClick={this.getTop} disabled={!value.hideMsg}>top</button>
            </div>
          </div>
          <div className="result-area">
            <textarea
              name="resultArea"
              value={output}
              readOnly
            />
          </div>
        </div>
      </div>
    )
  }
}


export default PriorityQueueTemplate;