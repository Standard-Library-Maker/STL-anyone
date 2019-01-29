import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './StackTemplate.scss';

class StackTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: '',
      pushValue: '',
      toastMsg: '',
      hideMsg: true,
      textAreaValue: [],
    };
  }

  checkStack = () => {
    if (this.state.stack === '') {
      alert("Initialize Stack!! Please press start button");
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
    let newStack = new stl.Stack();
    // alert("New Stack Created!");
    await this.setState({
      ...this.state,
      stack: newStack,
      toastMsg: 'New Queue Created!',
      hideMsg: false,
      textAreaValue: [],
    }, () => {
      console.log(newStack);
    });
    //this.forceUpdate();
    // alert(newQueue.state());
  };

  stackPush = async () => {
    if (this.checkStack()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }

    let myStack = this.state.stack;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;
    //console.log(myQueue);
    myStack.push(pushedValue);
    result.push(pushedValue+' -> ');

    await this.setState({
      ...this.state,
      stack: myStack,
      textAreaValue: result
    });
    //this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  stackPop = async () => {
    if (this.checkStack()) return false;

    let myStack = this.state.stack;
    let result = this.state.textAreaValue;
    alert(`pop : ${myStack.pop()}`);
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      stack: myStack,
      textAreaValue: result
    });
    // alert(`pop : ${this.state.popValue}`);
  };

  getState = () => {
    if (this.checkStack()) return false;

    else {
      let myStack = this.state.stack;
      // console.log(this.state);
      //this.forceUpdate();
      alert(myStack.toString());
    }
  };

  getSize = () => {
    if (this.checkStack()) return false;
    let myStack = this.state.stack;
    alert(`size : ${myStack.size()}`);
  };

  checkEmpty = () => {
    if (this.checkStack()) return false;
    let myStack = this.state.stack;
    alert(myStack.isEmpty());
  };

  getPeek = () => {
    if (this.checkStack()) return false;
    let myStack = this.state.stack;
    alert(`peek value : ${myStack.peek()}`);
  };

  render() {
    let value = this.state;
    let output = '';
    value.textAreaValue.forEach( (v) => {output += v;});
    return (
      <div className="stack">
        <div className="stack-header">
          <HeaderTemplate/>
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg}/>
        </div>
        <div className="title">Stack</div>
        <button className="start-btn" onClick={this.start}>Create Stack</button>
        <div className="test-code">
          <div className="result-area">
            <textarea
              name="resultArea"
              value={output}
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
              <button onClick={this.stackPush}>push</button>
            </div>
            <div className="pop-form">
              <button onClick={this.stackPop}>pop</button>
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
            <div className="peek-form">
              <button onClick={this.getPeek}>peek</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StackTemplate;