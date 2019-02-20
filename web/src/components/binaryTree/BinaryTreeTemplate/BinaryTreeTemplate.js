import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './BinaryTreeTemplate.scss';

class BinaryTreeTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binarytree: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkBinaryTree = () => {
    if (this.state.binarytree === '') {
      alert("Initialize Binary Tree!! Please press start button");
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
    let newBinaryTree = new stl.BinaryTree();
    //alert("New Binary Tree Created!");
    await this.setState({
      ...this.state,
      binarytree: newBinaryTree,
      textAreaValue: [],
      toastMsg: 'New Binary Tree Created!',
      hideMsg: false,
    }, () => {
      console.log(newBinaryTree);
    });
    //this.forceUpdate();
    // alert(newQueue.state());
  };

  binaryTreePush = async () => {
    if (this.checkBinaryTree()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }   

    let myBinaryTree = this.state.binarytree;
    let pushedValue = this.state.pushValue;
    let result = this.state.textAreaValue;
    //console.log(myQueue);
    myBinaryTree.push(pushedValue);
    
    //result = myHeap.toString();
    result.push(pushedValue+' -> ');

    await this.setState({
      ...this.state,
      binarytree: myBinaryTree,
      textAreaValue: result
    });
    //this.forceUpdate()
    //alert(`push : ${this.state.queue.state()}`);
  };

  binaryTreePop = async () => {
    if (this.checkBinaryTree()) return false;

    let myBinaryTree = this.state.binarytree;
    let result = this.state.textAreaValue;
    //alert(`pop : ${myHeap.popMax()}`);
    result.splice(result.length - 1, 1);

    await this.setState({
      ...this.state,
      binarytree: myBinaryTree,
      textAreaValue: result,
      toastMsg: `poped value : ${myBinaryTree.pop()}`,
      hideMsg: false
    });
    // alert(`pop : ${this.state.popValue}`);
  };

  getState = async () => {
    if (this.checkBinaryTree()) return false;
    else {
      let myBinaryTree = this.state.binarytree;
      //console.log(myQueue.state());
      //console.log(this.state);
      //this.forceUpdate();
      //alert(myHeap.toString());
      await this.setState({
        ...this.state,
        toastMsg: JSON.stringify(myBinaryTree),
        hideMsg: false
      });
    }
  };

  getSize = () => {
    if (this.checkBinaryTree()) return false;
    let myBinaryTree = this.state.binarytree;
    this.setState({
      ...this.state,
      toastMsg: `size : ${myBinaryTree.size()}`,
      hideMsg: false
    });
    //alert(`size : ${myHeap.size()}`);
  };

  checkEmpty = () => {
    if (this.checkBinaryTree()) return false;
    let myBinaryTree = this.state.binarytree;
    //alert(myHeap.isEmpty());
    this.setState({
      ...this.state,
      toastMsg: `isEmpty ? ${myBinaryTree.isEmpty().toString()}`,
      hideMsg: false
    });
  };

  clearTree = () => {
    if (this.checkBinaryTree()) return false;
    let myBinaryTree = this.state.binarytree;
    myBinaryTree.clear();
    this.setState({
      ...this.setState,
      toastMsg: 'Tree is now clear',
      hideMsg: false
    });
  };

  render() {
    let value = this.state;
    let output = '';
    value.textAreaValue.forEach( (v) => {output += v;});
    return (
      <div className="binarytree">
        <div className="pq-header">
          <HeaderTemplate/>
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg}/>
        </div>
        <div className="title">Binary Tree</div>
        <button className="start-btn" onClick={this.start}>Create Binary Tree</button>
        <div className="test-code">
          <div className="user-input-section">
            <div className="push-form">
              <input
                type="text"
                name="pushInput"
                value={value.pushValue}
                onChange={this.handleChange}
              />
              <button onClick={this.binaryTreePush}>push</button>
            </div>
            <div className="pop-form">
              <button onClick={this.binaryTreePop} disabled={!value.hideMsg}>pop</button>
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

export default BinaryTreeTemplate;