import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './DequeTemplate.scss';

class DequeTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deque: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkDeque = () => {
    if (this.state.deque === '') {
      alert("Initialize Deque. Please press START button.");
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
    let newDeque = new stl.Deque();
    await this.setState({
      ...this.state,
      deque: newDeque,
      textAreaValue: [],
      toastMsg: 'New Deque Created.',
      hideMsg: false,
    }, () => {
      console.log(newDeque);
    });
  };

  getState = async () => {
    if (this.checkDeque()) return false;
    else {
      let myDeque = this.state.deque;
      await this.setState({
        ...this.state,
        toastMsg: `(${myDeque.state()})`,
        hideMsg: false
      });
    }
  };

  getSize = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `Deque Size : ${myDeque.size()}`,
      hideMsg: false
    });
  };

  checkEmpty = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `is Deque Empty? : ${myDeque.isEmpty().toString()}`,
      hideMsg: false
    });
  };

  dequePushFront = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("Please input value at textbox.");
      return false;
    }

    let myDeque = this.state.deque;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;

    myDeque.push_front(pushedValue);
    result.push(pushedValue + ' -> ');

    await this.setState({
      ...this.state,
      deque: myDeque,
      textAreaValue: result,
      toastMsg: `Success to push value (${pushedValue}) at front.`,
    });
  };

  dequePushBack = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("Please input value at textbox.");
      return false;
    }

    let myDeque = this.state.deque;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;

    myDeque.push_back(pushedValue);
    result.push(pushedValue + ' -> ');

    await this.setState({
      ...this.state,
      deque: myDeque,
      textAreaValue: result,
      toastMsg: `Success to push value (${pushedValue}) at back.`,
    });
  };

  dequePopFront = async () => {
    if (this.checkDeque()) return false;

    let myDeque = this.state.deque;
    let result = this.state.textAreaValue;
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      deque: myDeque,
      toastMsg: `Success to pop value (${myDeque.pop_front()}) from front.`,
      hideMsg: false
    });
  };

  dequePopBack = async () => {
    if (this.checkDeque()) return false;

    let myDeque = this.state.deque;
    let result = this.state.textAreaValue;
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      deque: myDeque,
      toastMsg: `Success to pop value (${myDeque.pop_back()}) from back.`,
      hideMsg: false
    });
  };

  getFront = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `Front value of Deque : ${myDeque.front()}`,
      hideMsg: false
    });
  };

  getBack = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `Back value of Deque : ${myDeque.back()}`,
      hideMsg: false
    });
  };

  dequeBegin = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `Begin iterator of Deque : ${myDeque.begin()}`,
      hideMsg: false
    });
  };

  dequeEnd = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `End iterator of Deque : ${myDeque.end()}`,
      hideMsg: false
    });
  };

  dequeErase = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("Please input position to be removed from deque.");
      return false;
    }

    let myDeque = this.state.deque;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      deque: myDeque,
      toastMsg: `Success to erase value (${myDeque.erase(pushedValue)}) at position (${pushedValue}).`,
      hideMsg: false
    });
  };

  dequeClear = async () => {
    if (this.checkDeque()) return false;

    let myDeque = this.state.deque;
    let result = this.state.textAreaValue;

    myDeque.clear();
    await this.setState({
      ...this.state,
      deque: myDeque,
      textAreaValue: result,
      toastMsg: `Success to Clear Deque.`,
    });
  };

  dequeAt = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("Please input position to find value from deque.");
      return false;
    }

    let myDeque = this.state.deque;
    let pushedValue = this.state.pushValue;

    await this.setState({
      ...this.state,
      deque: myDeque,
      toastMsg: `Position (${pushedValue}) value of deque : ${myDeque.at(pushedValue)}`,
      hideMsg: false
    });
  };

  render() {
    let value = this.state;
    let output = '';
    value.textAreaValue.forEach((v) => { output += v; });
    return (
      <div className="deque">
        <div className="deque-header">
          <HeaderTemplate />
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg} />
        </div>

        <div className="title">Deque</div>
        <button className="start-btn" onClick={this.start}>START</button>

        <div className="test-code">
          <div className="user-input-section">

              <div className="push-form">
                <input
                  type="text"
                  name="pushInput"
                  value={value.pushValue}
                  onChange={this.handleChange}
                />
                  <button onClick={this.dequePushFront}>push_front</button>
                  <button onClick={this.dequePushBack}>push_back</button>
                </div>
              <div className="pop-form">
                  <button onClick={this.dequePopFront} disabled={!value.hideMsg}>pop_front</button>
                  <button onClick={this.dequePopBack} disabled={!value.hideMsg}>pop_back</button>
              </div>  
             <div className="remove-form">
                <button onClick={this.dequeErase} disabled={!value.hideMsg}>erase</button>
                <button onClick={this.dequeClear} disabled={!value.hideMsg}>clear</button>
              </div>
              <div className="value-form">
                <button onClick={this.getFront} disabled={!value.hideMsg}>front</button>
                <button onClick={this.getBack} disabled={!value.hideMsg}>back</button>
                <button onClick={this.dequeBegin} disabled={!value.hideMsg}>begin</button>
                <button onClick={this.dequeEnd} disabled={!value.hideMsg}>end</button>
                <button onClick={this.dequeAt} disabled={!value.hideMsg}>at</button>
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

export default DequeTemplate;