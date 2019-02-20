import React, { Component } from 'react';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './QueueTemplate.scss';

class QueueTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: '',
      pushValue: '',
      textAreaValue: [],
      hidden: true,
      output: [],
      toastMsg: '',
      hideMsg: true,
      hideCode: true,
      showCode: ''
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
    if(e.target.name === "pushInput") { // 새로운 입력 일어날 때마다 hidden: true
      this.setState({
        ...this.state,
        pushValue: e.target.value,
      });
    }
  };

  enterPress = async (e) => {
    if(e.keyCode === 13){
      await this.queuePush();
    }
  };

  makeLayer = () => {
    let output = [];

    if (!this.state.queue) return null;
    (this.state.queue.data).map((o, index) => {
      output.push( <div className={"value-layer" + index} key={index}> { o } </div>);
    });
    return output;
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
    let newQueue = new stl.Queue.ArrQueue();
    await this.setState({
      queue: newQueue,
      pushValue: '',
      textAreaValue: [],
      hidden: true,
      output: [],
      toastMsg: 'New Queue Created!',
      hideMsg: false
    }, () => {
      console.log(newQueue);
    });
    //this.forceUpdate();
  };

  queuePush = async () => {
    if (this.checkQueue()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }

    await this.setState({
      ...this.state,
      hidden: !this.state.hidden,
    });

    let result = this.state.textAreaValue;
    let output = [];
    let code = this.state.showCode;
    let myQueue = this.state.queue;

    result.push(this.state.pushValue);
    result.forEach( (v) => {output.push(v);});
    code += myQueue.push(this.state.pushValue) + '\n';

    await setTimeout(async () => {
      await this.setState({
        ...this.state,
        hidden: true,
        queue: myQueue,
        output: output,
        showCode: code,
        pushValue: ''
      });
    }, 2500);
    return true;
  };

  queuePop = async () => {
    if (this.checkQueue()) return false;

    let myQueue = this.state.queue;
    let result = this.state.textAreaValue;
    let output = [...this.state.output.pop()];

    await this.setState({
      ...this.state,
      queue: myQueue,
      textAreaValue: result,
      output: output,
      toastMsg: `poped value : ${myQueue.pop()}`,
      hideMsg: false
    });
  };

  getState = async () => {
    if (this.checkQueue()) return false;
    else {
      let myQueue = this.state.queue;
      //this.forceUpdate();
      //return <ToastMessage msg={myQueue.toString()}/>
      // this.sendMsg(myQueue.toString());
      await this.setState({
        ...this.state,
        toastMsg: myQueue.toString(),
        hideMsg: false
      });
    }
  };

  getSize = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    this.setState({
      ...this.state,
      toastMsg: `size : ${myQueue.size()}`,
      hideMsg: false
    });
  };

  checkEmpty = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    this.setState({
      ...this.state,
      toastMsg: `isEmpty ? ${myQueue.isEmpty().toString()}`,
      hideMsg: false
    });
  };

  getFront = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    this.setState({
      ...this.state,
      toastMsg: `front value : ${myQueue.front()}`,
      hideMsg: false
    });
  };

  getBack = () => {
    if (this.checkQueue()) return false;
    let myQueue = this.state.queue;
    this.setState({
      ...this.state,
      toastMsg: `back value : ${myQueue.back()}`,
      hideMsg: false
    });
  };

  showCode = () => {
    if(this.state.hideCode) {
      this.setState({
        ...this.state,
        hideCode: false
      });
    } else {
      this.setState({
        ...this.state,
        hideCode: true
      });
    }
  };

  render() {
    let value = this.state;

    return (
      <div className="queue">
        <div className="queue-header">
          <HeaderTemplate/>
          {/*{this.sendMsg()}*/}
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg}/>
        </div>
        <div className="title">Queue</div>
        <button className="start-btn" onClick={this.start}>Create Queue</button>
        <div className="test-code">
          <div className="user-input-section">
            <div className="push-form">
              <input
                type="text"
                name="pushInput"
                value={value.pushValue}
                onChange={this.handleChange}
                onKeyDown={this.enterPress}
                disabled={!value.hidden}
              />
              <button onClick={this.queuePush} disabled={!value.hidden}>push</button>
            </div>
            <div className="pop-form">
              <button onClick={this.queuePop} disabled={!value.hideMsg}>pop</button>
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
            <div className="front-form">
              <button onClick={this.getFront} disabled={!value.hideMsg}>front</button>
            </div>
            <div className="back-form">
              <button onClick={this.getBack} disabled={!value.hideMsg}>back</button>
            </div>
          </div>

          <div className="result-area">
            <div id="queue-storage" className="value-layers" style={{display: value.queue ? 'flex' : 'none'}}>
              {this.makeLayer()}
            </div>
            <div className="queue-value-div">
              <input
                className="queue-value"
                name="resultArea"
                value={value.pushValue}
                disabled
                style={{display: this.state.hidden ? 'none' : 'block'}}
              />
            </div>
          </div>
          <div className="code-area">
            <button
              className="code-show-btn"
              onClick={this.showCode}> open / close </button>
            <textarea
              className="code-place"
              value={value.showCode}
              hidden={value.hideCode}
              readOnly
            />
          </div>
        </div>
      </div>
    )
  }
}

export default QueueTemplate;