import React, {Component} from 'react';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './QueueTemplate.scss';

class QueueTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      queue: '',
      pushValue: '',
      textAreaValue: [],
      hidden: true,
      output: '',
      // layer: ''
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

  makeOutput = async () => {
    let output = '';
    let result = this.state.textAreaValue;
    // let layer = this.state.layer;
    result.forEach( (v) => {output += v;});
    // layer += <div className={"value-layer" + this.state.index}> {this.state.output} </div>;

    await setTimeout(() => {
      this.setState({
        ...this.state,
        index: this.state.index + 1,
        hidden: true,
        output: output,
        // layer: layer
      });
    }, 300);
    return true;
  };

  makeLayer = () => {
    let layer = null;
    layer = <div className={"value-layer"+this.state.index}> {this.state.output} </div>;
    return layer;
  };

  sendMsg = msg => {
    return <ToastMessage msg={msg}/>
  };

  /*makeLayer2 = () => {
    let layer = <div><div className={"value-layer0"}> {this.state.output} </div>
      <div className={"value-layer1"}> {this.state.output} </div></div>;
    console.log(typeof layer +", " + layer.toString());

    /!*for(let i = 1; i < this.state.index; i++) {
     layer += <div className={"value-layer" + i}> {this.state.pushValue} </div>;
    }*!/
    return layer
};*/

  start = async () => {
    let newQueue = new stl.Queue.ArrQueue();
    alert("New Queue Created!");
    await this.setState({
      index: 0,
      queue: newQueue,
      pushValue: '',
      textAreaValue: [],
      hidden: true,
      output: '',
      //layer: ''
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

    let myQueue = this.state.queue;
    let result = this.state.textAreaValue;
    myQueue.push(this.state.pushValue);
    result.push(this.state.pushValue + ' ');
    //result.push(this.state.pushValue + ' -> ');

    await this.setState({
      ...this.state,
      queue: myQueue,
      textAreaValue: result,
      hidden: !this.state.hidden
    });
    //this.forceUpdate()
  };

  queuePop = async () => {
    if (this.checkQueue()) return false;

    let myQueue = this.state.queue;
    let result = this.state.textAreaValue;
    let output='';

    alert(`pop : ${myQueue.pop()}`);
    result.splice(0,1);
    result.forEach( (v) => {output += v;});

    await this.setState({
      ...this.state,
      queue: myQueue,
      textAreaValue: result,
      output: output
    });
  };

  getState = () => {
    if (this.checkQueue()) return false;

    else {
      let myQueue = this.state.queue;
      //console.log(myQueue.state());
      //console.log(this.state);
      //this.forceUpdate();
      //alert(myQueue.toString());
      //return <ToastMessage msg={myQueue.toString()}/>
      this.sendMsg(myQueue.toString());
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
    /*let output = '';
    value.textAreaValue.forEach( (v) => {output += v;});*/

    return (
      <div className="queue">
        <div className="queue-header">
          <HeaderTemplate/>
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

          <div className="result-area">
            <div className="value-layers" style={{display: value.queue ? 'flex' : 'none'}}>
              {/*<input
                className="queue-storage"
                name="resultArea"
                value={value.output}
                readOnly
              />*/}
              {this.makeLayer()}
            </div>
            <div className="queue-value-div">
              <input
                className="queue-value"
                name="resultArea"
                value={value.pushValue}
                disabled
                style={{display: this.state.hidden ? 'none' : 'block'}}
                onAnimationEnd={this.makeOutput}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QueueTemplate;