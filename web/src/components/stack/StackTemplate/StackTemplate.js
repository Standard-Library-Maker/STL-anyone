import React, {Component} from 'react';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import './StackTemplate.scss';

class StackTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      stack: '',
      pushValue: '',
      textAreaValue: [],
      hidden: true,
      output: '',
      // layer: ''
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
    if(e.target.name === "pushInput") { // 새로운 입력 일어날 때마다 hidden: true
      this.setState({
        ...this.state,
        pushValue: e.target.value,
      });
    }
  };

  enterPress = async (e) => {
    if(e.keyCode === 13){
      await this.stackPush();
    }
  };
  /*must implement pop motion to erase the LIFO element*/
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
    let layer;
    layer = <div className={"value-layer"}> {this.state.output} </div>;
    return layer;
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
    let newStack = new stl.Stack();
    alert("New Stack Created!");
    await this.setState({
      index: 0,
      stack: newStack,
      pushValue: '',
      textAreaValue: [],
      hidden: true,
      output: '',
      layer: ''
    }, () => {
      console.log(newStack);
    });
    //this.forceUpdate();
  };

  stackPush = async () => {
    if (this.checkStack()) return false;
    if (this.state.pushValue === '') {
      alert("please input push value");
      return false;
    }

    let myStack = this.state.stack;
    let result = this.state.textAreaValue;
    myStack.push(this.state.pushValue);
    result.push(this.state.pushValue + ' ');
    //result.push(this.state.pushValue + ' -> ');

    await this.setState({
      ...this.state,
      stack: myStack,
      textAreaValue: result,
      hidden: !this.state.hidden
    });
    //this.forceUpdate()
  };

  stackPop = async () => {
    if (this.checkStack()) return false;

    let myStack = this.state.stack;
    let result = this.state.textAreaValue;
    let output='';

    alert(`pop : ${myStack.pop()}`);
    result.splice(myStack.length - 1, 1);
    result.forEach( (v) => {output += v;});

    await this.setState({
      ...this.state,
      stack: myStack,
      textAreaValue: result,
      output: output
    });
  };

  getState = () => {
    if (this.checkStack()) return false;

    else {
      let myStack = this.state.stack;
      //console.log(myStack.state());
      //console.log(this.state);
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

  peek = () => {
    if (this.checkStack()) return false;
    let myStack = this.state.stack;
    alert(`peek value : ${myStack.peek()}`);
  };

  render() {
    let value = this.state;
    /*let output = '';
    value.textAreaValue.forEach( (v) => {output += v;});*/

    return (
      <div className="stack">
        <div className="stack-header">
          <HeaderTemplate/>
        </div>
        <div className="title">Stack</div>
        <button className="start-btn" onClick={this.start}>Create Stack</button>
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
              <button onClick={this.stackPush} disabled={!value.hidden}>push</button>
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
              <button onClick={this.peek}>peek</button>
            </div>
          </div>

          <div className="result-area">
            <div className="value-layers">
              {/*<input
                className="queue-storage"
                name="resultArea"
                value={value.output}
                readOnly
              />*/}
              {this.makeLayer()}
            </div>
            <div className="stack-value-div">
              <input
                className="stack-value"
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

export default StackTemplate;