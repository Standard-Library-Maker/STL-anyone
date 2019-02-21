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
      priorityQueue: '',
      option: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkPriorityQueue = () => {
    if (this.state.priorityQueue === '') {
      alert("Initialize Priority Queue with sort criteria. Please press START button.");
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
    let option;
    if (this.state.option === "") {
      alert("Initialize Priority Queue with sort criteria. Please press START button.");
      return true;
    }
    if (this.state.option === "greater") {
      option = "greater";
      newPriorityQueue = new stl.PriorityQueue("greater");
    }
    else if (this.state.option === "less") {
      option = "less"
      newPriorityQueue = new stl.PriorityQueue();
    }
    await this.setState({
      ...this.state,
      priorityQueue: newPriorityQueue,
      textAreaValue: [],
      toastMsg: `New Priority Queue with option (${option}) Created.`,
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
      toastMsg: `Priority Queue Size : ${myPriorityQueue.size()}`,
      hideMsg: false
    });
  };

  checkEmpty = () => {
    if (this.checkPriorityQueue()) return false;
    let myPriorityQueue = this.state.priorityQueue;
    this.setState({
      ...this.state,
      toastMsg: `is Priority Queue Empty? : ${myPriorityQueue.isEmpty().toString()}`,
      hideMsg: false
    });
  };

  priorityQueuePush = async () => {
    if (this.checkPriorityQueue()) return false;
    if (this.state.pushValue === '') {
      alert("Please input value at textbox.");
      return false;
    }

    let myPriorityQueue = this.state.priorityQueue;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;

    myPriorityQueue.push(pushedValue);
    result.push(pushedValue + ' -> ');

    await this.setState({
      ...this.state,
      priorityQueue: myPriorityQueue,
      textAreaValue: result,
      toastMsg: `Success to push value (${pushedValue})`,
    });
  };

  priorityQueuePop = async () => {
    if (this.checkPriorityQueue()) return false;

    let myPriorityQueue = this.state.priorityQueue;
    let result = this.state.textAreaValue;
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      priorityQueue: myPriorityQueue,
      toastMsg: `Success to pop value (${myPriorityQueue.pop()})`,
      hideMsg: false
    });
  };

  getTop = () => {
    if (this.checkPriorityQueue()) return false;
    let myPriorityQueue = this.state.priorityQueue;
    this.setState({
      ...this.state,
      toastMsg: `Top Value of Priority Queue : ${myPriorityQueue.top()}`,
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
<<<<<<< HEAD
          <input
            type="radio"
            name="option"
            value='greater'
            onChange={this.handleChange} />
          <span> greater </span>
          <input
            type="radio"
            name="option"
            value='less'
            onChange={this.handleChange} />
          <span>less(defualt)</span>
          <button className="start-btn" onClick={this.start}>START</button>
=======
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
>>>>>>> a3a871f24aeed191734dd1168114e34a338d847a
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
              <button onClick={this.checkEmpty} disabled={!value.hideMsg}>isEmpty</button>
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