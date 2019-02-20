import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './BinarySearchTreeTemplate.scss';

class BinarySearchTreeTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binarysearchtree: '',
      pushValue: '',
      popValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkBinarySearchTree = () => {
    if (this.state.binarysearchtree === '') {
      alert("Initialize Binary Search Tree!! Please press start button");
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
    if(this.state.hideMsg==false) {
      this.setState({
        ...this.state,
        hideMsg: value
      })
    }
  };

  start = async () => {
    let newBinarySearchTree = new stl.BinarySearchTree();
    //alert("New Binary Search Tree Created!");
    await this.setState({
      ...this.state,
      binarysearchtree: newBinarySearchTree,
      textAreaValue: [],
      toastMsg: 'New Heap Created!',
      hideMsg: false,
    }, () => {
      console.log(newBinarySearchTree);
    });
    //this.forceUpdate();
    // alert(newQueue.state());
  };

  binarySearchTreeInsert = async () => {
    if (this.checkBinarySearchTree()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }   

    let myBinarySearchTree = this.state.binarysearchtree;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;
    //console.log(myQueue);
    myBinarySearchTree.insert(pushedValue);
    
    //result = myHeap.toString();
    result.push(pushedValue+' -> ');

    await this.setState({
      ...this.state,
      binarysearchtree: myBinarySearchTree,
      textAreaValue: result
    });
    //this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  binarySearchTreeDelete = async () => {
    let target;
    if (this.checkBinarySearchTree()) return false;

    let myBinarySearchTree = this.state.binarysearchtree;
    let popValue = this.state.popValue;
    let result = this.state.textAreaValue;
    //alert(`pop : ${myHeap.popMax()}`);
    result.splice(result.length - 1, 1);
    myBinarySearchTree.delete(popValue);

    await this.setState({
      ...this.state,
      binarysearchtree: myBinarySearchTree,
      textAreaValue: result,
      toastMsg: `poped value : ${popValue}`,
      hideMsg: false
    });
    // alert(`pop : ${this.state.popValue}`);
  };

  getState = async () => {
    if (this.checkBinarySearchTree()) return false;
    else {
      let myBinarySearchTree = this.state.binarysearchtree;
      //console.log(myQueue.state());
      //console.log(this.state);
      //this.forceUpdate();
      //alert(myHeap.toString());
      await this.setState({
        ...this.state,
        toastMsg: JSON.stringify(myBinarySearchTree),
        hideMsg: false
      });
    }
  };
/*
  getSize = () => {
    if (this.checkHeap()) return false;
    let myHeap = this.state.heap;
    this.setState({
      ...this.state,
      toastMsg: `size : ${myHeap.size()}`,
      hideMsg: false
    });
    //alert(`size : ${myHeap.size()}`);
  };*/

  checkEmpty = () => {
    if (this.checkBinarySearchTree()) return false;
    let myBinarySearchTree = this.state.binarysearchtree;
    //alert(myHeap.isEmpty());
    this.setState({
      ...this.state,
      toastMsg: `isEmpty ? ${myBinarySearchTree.isEmpty().toString()}`,
      hideMsg: false
    });
  };
  
  findValue = (value) => {
    if (this.checkBinarySearchTree()) return false;
    let myBinarySearchTree = this.state.binarysearchtree;
    let isFind = myBinarySearchTree.find(value);
    this.setState({
      ...this.state,
      toastMsg: `find value : ${isFind}`,
      hideMsg: false
    });
  };

  clearTree = () => {
    if (this.checkBinarySearchTree()) return false;
    let myBinarySearchTree = this.state.binarysearchtree;
    myBinarySearchTree.clear();
    this.setState({
      ...this.setState,
      hideMsg: false
    });
  };

  render() {
    let value = this.state;
    let output = '';
    value.textAreaValue.forEach( (v) => {output += v;});
    return (
      <div className="binarysearchtree">
        <div className="bst-header">
          <HeaderTemplate/>
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg}/>
        </div>
        <div className="title">Binary Search Tree</div>
        <button className="start-btn" onClick={this.start}>Create Binary Search Tree</button>
        <div className="test-code">
          <div className="user-input-section">
            <div className="insert-form">
              <input
                type="text"
                name="pushInput"
                value={value.pushValue}
                onChange={this.handleChange}
              />
              <button onClick={this.binarySearchTreeInsert}>insert</button>
            </div>
            <div className="delete-form">
              <button onClick={this.binarySearchTreeDelete} disabled={!value.hideMsg}>delete</button>
            </div>
            <div className="state-form">
              <button onClick={this.getState} disabled={!value.hideMsg}>state</button>
            </div>
            <div className="find-form">
              <button onClick={this.findValue} disabled={!value.hideMsg}>find</button>
            </div>
            <div className="empty-form">
              <button onClick={this.checkEmpty} disabled={!value.hideMsg}>empty?</button>
            </div>
            <div className="clear-form">
              <button onClick={this.clearTree} disabled={!value.hideMsg}>clear</button>
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

export default BinarySearchTreeTemplate;