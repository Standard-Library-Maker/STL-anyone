import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './HeapTemplate.scss';

class HeapTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heap: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
      isMax: "max heap",
    };
  }

  checkHeap = () => {
    if (this.state.heap === '') {
      alert("Initialize Heap!! Please press start button");
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
    } else if(e.target.name === "selectBox") {
      this.setState({
        ...this.state,
        isMax: e.target.value
      })
    }
  };

  setHideValue = value => {
    if(this.state.hideMsg==false) {
      this.setState({
        ...this.state,
        hideMsg: value
      })
    }
  };

  start = async () => {
    let newHeap = new stl.Heap();
    //alert("New Heap Created!");
    await this.setState({
      ...this.state,
      heap: newHeap,
      textAreaValue: [],
      toastMsg: 'New Heap Created!',
      hideMsg: false,
    }, () => {
      console.log(newHeap);
    });
    //this.forceUpdate();
    // alert(newQueue.state());
  };

  heapPush = async () => {
    if (this.checkHeap()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }   

    let myHeap = this.state.heap;
    let pushedValue = this.state.pushValue;
    //console.log(myQueue);
    if(this.state.isMax === "min heap"){
      myHeap.pushMin(pushedValue);
    } else{
      myHeap.pushMax(pushedValue);
    }
    let result = myHeap.getResult();
    //result = myHeap.toString();

    await this.setState({
      ...this.state,
      heap: myHeap,
      pushValue: '',
      textAreaValue: result
    });
    //this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  heapPop = async () => {
    let target;
    if (this.checkHeap()) return false;

    let myHeap = this.state.heap;
    
    //alert(`pop : ${myHeap.popMax()}`);
    //myHeap.splice(myHeap.length - 1, 1);
    if(this.state.isMax === "min heap"){
      myHeap.makeMinHeap(this.state.heap.data);
      target = myHeap.popMin();
    } else{
      myHeap.makeMaxHeap(this.state.heap.data);
      target = myHeap.popMax();
    }
    let result = myHeap.getResult();
    await this.setState({
      ...this.state,
      heap: myHeap,
      textAreaValue: result,
      toastMsg: `poped value : ${target}`,
      hideMsg: false
    });
    // alert(`pop : ${this.state.popValue}`);
  };

  getState = async () => {
    if (this.checkHeap()) return false;
    else {
      let myHeap = this.state.heap;
      //console.log(myQueue.state());
      //console.log(this.state);
      //this.forceUpdate();
      //alert(myHeap.toString());
      if(this.state.isMax === "min heap"){
        myHeap.makeMinHeap(this.state.heap.data);
      } else{
        myHeap.makeMaxHeap(this.state.heap.data);
      }
      let result = myHeap.getResult();
      await this.setState({
        ...this.state,
        textAreaValue: result,
        toastMsg: JSON.stringify(myHeap) + ", heap is "+ this.state.isMax,
        hideMsg: false
      });
    }
  };

  getSize = () => {
    if (this.checkHeap()) return false;
    let myHeap = this.state.heap;
    this.setState({
      ...this.state,
      toastMsg: `size : ${myHeap.size()}`,
      hideMsg: false
    });
    //alert(`size : ${myHeap.size()}`);
  };

  checkEmpty = () => {
    if (this.checkHeap()) return false;
    let myHeap = this.state.heap;
    //alert(myHeap.isEmpty());
    this.setState({
      ...this.state,
      toastMsg: `isEmpty ? ${myHeap.isEmpty().toString()}`,
      hideMsg: false
    });
  };
  /*
  getPeek = () => {
    if (this.checkHeap()) return false;
    let myHeap = this.state.heap;
    this.setState({
      ...this.state,
      toastMsg: `front value : ${myHeap.getPeek()}`,
      hideMsg: false
    });
  };
  */

  changeMax = () => {
    if (this.checkHeap()) return false;
    let myHeap = this.state.heap;
    if(this.state.isMax === "min heap"){
      myHeap.makeMinHeap(myHeap);
    } else{
      myHeap.makeMaxHeap(myHeap);
    }
    this.setState({
      ...this.setState,
      toastMsg: '123',
      hideMsg: false
    });
  };

  changeMin = async () => {
    if (this.checkHeap()) return false;
    let myHeap = this.state.heap;
    
    this.setState({
      ...this.setState,
      toastMsg: 'changed to min heap',
      hideMsg: false
    });
    alert("change2");
  };

  render() {
    let value = this.state;
    let output = value.textAreaValue;
    return (
      <div className="heap">
        <div className="heap-header">
          <HeaderTemplate/>
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg}/>
        </div>
        <div className="title">Heap</div>
        <button className="start-btn" onClick={this.start}>Create Heap</button>
        <div className="test-code">
          <div className="user-input-section">
            <div className="push-form">
              <input
                type="text"
                name="pushInput"
                value={value.pushValue}
                onChange={this.handleChange}
              />
              <button onClick={this.heapPush}>push</button>
            </div>
            <div className="pop-form">
              <button onClick={this.heapPop} disabled={!value.hideMsg}>pop</button>
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
            <div className="selectBox">
              <select
                value = {this.state.isMax}
                name="selectBox"
                onChange={this.handleChange}>
              <option value={Boolean.true} onClick={this.changeMax} selected="selected">max heap</option>
              <option value={Boolean.false} onClick={this.changeMax}>min heap</option>
              </select>
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

export default HeapTemplate;