import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './PriorityQueueTemplate.scss';

class PriorityQueueTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priorityQueue: [],
      option: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkPriorityQueue = () => {
    if (this.state.priorityQueue === '') {
      alert("Initialize Priority Queue with Option!! Please press start button");
      return true;
    }
    return false;
  };

  handleChange = (e) => {
    if (e.target.name === "pushInput") {
      this.setState({
        ...this.state,
        pushValue: e.target.value
      });
    } else if (e.target.name === "resultArea") {
      this.setState({
        ...this.state,
        textAreaValue: e.target.value
      });
    } else if (e.target.name === "option") {
      this.setState({
        ...this.state,
        option: e.target.value
      });  
    }
  };

  setHideValue = value => {
    if (this.state.hideMsg === false) {
      this.setState({
        ...this.state,
        hideMsg: value
      })
    }
  };

  start = async () => {
    let newPriorityQueue;
    if (this.state.option === "greater") {
     newPriorityQueue = new stl.PriorityQueue("greater");
    }
    else {
      newPriorityQueue = new stl.PriorityQueue();
    }
    await this.setState({
      ...this.state,
      priorityQueue: newPriorityQueue,
      textAreaValue: [],
      toastMsg: 'New Priority Queue Created!',
      hideMsg: false,
    }, () => {
      console.log(newPriorityQueue);
    });
  };

  getState = async () => {
    if (this.checkPriorityQueue()) return false;
    else {
      let myPriorityQueue = this.state.priorityQueue;
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

  priorityQueuePush = async () => {
    if (this.checkPriorityQueue()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }
 
    let myPriorityQueue = this.state.priorityQueue;
    let pushedValue = this.state.pushValue;
    myPriorityQueue.push(pushedValue);

    await this.setState({
      ...this.state,
      priorityQueue: myPriorityQueue,
    });
  };

  priorityQueuePop = async () => {
    if (this.checkPriorityQueue()) return false;

    let myPriorityQueue = this.state.priorityQueue;
    
    await this.setState({
      ...this.state,
      priorityQueue: myPriorityQueue,
      toastMsg: `poped value : ${myPriorityQueue.pop()}`,
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
    value.textAreaValue.forEach((v) => { output += v; });
    return (
      <div className="priorityQueue">
        <div className="pq-header">
          <HeaderTemplate />
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg} />
        </div>

        <div className="title">Priority Queue</div>
        <div className="create">
        <input 
          type="radio" 
          name="option" 
          value='greater' 
          onChange={this.handleChange}/>
          greater
         <input 
          type="radio" 
          name="option" 
          value='less' 
          onChange={this.handleChange}/>
          less
        <button onClick={this.start} disabled={!value.hideMsg}>Create Priority Queue</button>
        </div>

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
            <div className="top-form">
              <button onClick={this.getTop} disabled={!value.hideMsg}>top</button>
            </div>
            <div className="size-form">
              <button onClick={this.getSize} disabled={!value.hideMsg}>size</button>
            </div>
            <div className="empty-form">
              <button onClick={this.checkEmpty} disabled={!value.hideMsg}>empty?</button>
            </div>
            <div className="state-form">
              <button onClick={this.getState} disabled={!value.hideMsg}>state</button>
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