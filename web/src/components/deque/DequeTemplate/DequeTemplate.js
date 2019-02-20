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
      option: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkDeque = () => {
    if (this.state.deque === '') {
      alert("Initialize Deque!! Please press start button");
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
    let newDeque;
    if (this.state.option === "greater") {
      newDeque = new stl.Deque("greater");
    }
    else {
      newDeque = new stl.Deque();
    }
    await this.setState({
      ...this.state,
      deque: newDeque,
      textAreaValue: [],
      toastMsg: 'New Priority Queue Created!',
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
        toastMsg: JSON.stringify(myDeque),
        hideMsg: false
      });
    }
  };

  getSize = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `size : ${myDeque.size()}`,
      hideMsg: false
    });
  };

  checkEmpty = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `isEmpty ? ${myDeque.isEmpty().toString()}`,
      hideMsg: false
    });
  };

  dequePushFront = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
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
      textAreaValue: result
    });
  };

  dequePushBack = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
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
      textAreaValue: result
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
      toastMsg: `poped value : ${myDeque.pop_front()}`,
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
      toastMsg: `poped value : ${myDeque.pop_back()}`,
      hideMsg: false
    });
  };

  getFront = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `front value : ${myDeque.front()}`,
      hideMsg: false
    });
  };

  getBack = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `back value : ${myDeque.back()}`,
      hideMsg: false
    });
  };

  dequeBegin = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `Begin iterator : ${myDeque.begin()}`,
      hideMsg: false
    });
  };

  dequeEnd = () => {
    if (this.checkDeque()) return false;
    let myDeque = this.state.deque;
    this.setState({
      ...this.state,
      toastMsg: `End iterator : ${myDeque.end()}`,
      hideMsg: false
    });
  };

  dequeErase = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("please input position to be removed from this deque");
      return false;
    }

    let myDeque = this.state.deque;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      deque: myDeque,
      toastMsg: `erased value : ${myDeque.erase(pushedValue)}`,
      hideMsg: false
    });
  };

  dequeClear = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("please input position to be removed from this deque");
      return false;
    }
    let myDeque = this.state.deque;
    let result = this.state.textAreaValue;

    myDeque.clear();
    await this.setState({
      ...this.state,
      deque: myDeque,
      textAreaValue: result
    });
  };

  dequeAt = async () => {
    if (this.checkDeque()) return false;
    if (this.state.pushValue === '') {
      alert("please input position to be removed from this deque");
      return false;
    }

    let myDeque = this.state.deque;
    let pushedValue = this.state.pushValue;

    await this.setState({
      ...this.state,
      deque: myDeque,
      toastMsg: `position (${pushedValue}) value : ${myDeque.at(pushedValue)}`,
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
        <button className="start-btn" onClick={this.start}>Create deque</button>

        <div className="test-code">
          <div className="user-input-section">

              <div className="push-form">
                <input
                  type="text"
                  name="pushInput"
                  value={value.pushValue}
                  onChange={this.handleChange}
                />
                push  :
                <button onClick={this.dequePushFront}>front</button>
                <button onClick={this.dequePushBack}>back</button>
              </div>

              <div className="pop-form">
                pop  :
               <button onClick={this.dequePopFront} disabled={!value.hideMsg}>front</button>
                <button onClick={this.dequePopBack} disabled={!value.hideMsg}>back</button>
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

export default DequeTemplate;