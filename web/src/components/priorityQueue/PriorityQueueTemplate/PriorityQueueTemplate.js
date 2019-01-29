import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';

import './PriorityQueueTemplate.scss';

class PriorityQueueTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  /*setHideValue = value => {
    if(this.state.hideMsg===false) {
      this.setState({
        ...this.state,
        hideMsg: value
      })
    }
  };*/

  /*start = async () => {
    let newStack = new stl.PriorityQueue();
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
*/
  render() {
    let value = this.state;
    return(
      <div className="priorityQueue">
        <div className="pq-header">
          <HeaderTemplate/>
          {/*{this.sendMsg()}*/}
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg}/>
        </div>
        <div className="title">Priority Queue</div>
        <button className="start-btn" onClick={this.start}>Create Priority Queue</button>
        {/*<div className="test-code">*/}
          {/*<div className="result-area">*/}
            {/*<textarea*/}
              {/*name="resultArea"*/}
              {/*value={output}*/}
              {/*readOnly*/}
            {/*/>*/}
          {/*</div>*/}
          {/*<div className="user-input-section">*/}
            {/*<div className="push-form">*/}
              {/*<input*/}
                {/*type="text"*/}
                {/*name="pushInput"*/}
                {/*value={value.pushValue}*/}
                {/*onChange={this.handleChange}*/}
              {/*/>*/}
              {/*<button onClick={this.stackPush}>push</button>*/}
            {/*</div>*/}
            {/*<div className="pop-form">*/}
              {/*<button onClick={this.stackPop}>pop</button>*/}
            {/*</div>*/}
            {/*<div className="state-form">*/}
              {/*<button onClick={this.getState}>state</button>*/}
            {/*</div>*/}
            {/*<div className="size-form">*/}
              {/*<button onClick={this.getSize}>size</button>*/}
            {/*</div>*/}
            {/*<div className="empty-form">*/}
              {/*<button onClick={this.checkEmpty}>empty?</button>*/}
            {/*</div>*/}
            {/*<div className="peek-form">*/}
              {/*<button onClick={this.getPeek}>peek</button>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    )
  }
}


export default PriorityQueueTemplate;