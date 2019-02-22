import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import ToastMessage from 'components/popup/ToastMessage';
import './HashMapTemplate.scss';

class HashMapTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashMap: '',
      pushKey: '',
      pushValue: '',
      textAreaValue: [],
      toastMsg: '',
      hideMsg: true,
    };
  }

  checkHashMap = () => {
    if (this.state.hashMap === '') {
      alert("Initialize HashMap. Please press START button.");
      return true;
    }
    return false;
  };

  handleChange = (e) => {
    if (e.target.name === "pushKey") {
      this.setState({
        ...this.state,
        pushKey: e.target.value
      });
    } else if (e.target.name === "pushValue") {
      this.setState({
        ...this.state,
        pushValue: e.target.value
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
    let newHashMap = new stl.HashMap();

    await this.setState({
      ...this.state,
      hashMap: newHashMap,
      textAreaValue: [],
      toastMsg: 'New HashMap Created.',
      hideMsg: false,
    }, () => {
      console.log(newHashMap);
    });
  };

  getState = async () => {
    if (this.checkHashMap()) return false;
    else {
      let newHashMap = this.state.hashMap;
      await this.setState({
        ...this.state,
        toastMsg: JSON.stringify(newHashMap),
        hideMsg: false
      });
    }
  };

  getSize = () => {
    if (this.checkHashMap()) return false;
    let newHashMap = this.state.hashMap;
    this.setState({
      ...this.state,
      toastMsg: `HashMap Size : ${newHashMap.size()}`,
      hideMsg: false
    });
  };

  checkEmpty = () => {
    if (this.checkHashMap()) return false;
    let newHashMap = this.state.hashMap;
    this.setState({
      ...this.state,
      toastMsg: `is HashMap Empty? : ${newHashMap.isEmpty().toString()}`,
      hideMsg: false
    });
  };

  hashMapPut = async () => {
    if (this.checkHashMap()) return false;
    if (this.state.pushValue === '' || this.state.pushKey === '') {
      alert("Please input key, value");
      return false;
    }

    let myHashMap = this.state.hashMap;
    let pushedKey = this.state.pushKey;
    let pushedValue = this.state.pushValue;
    
    myHashMap.put(pushedKey, pushedValue);
    let result = myHashMap.getResult();

    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      textAreaValue: result
    });
  };

  hashMapContainsKey = async () => {
    if (this.checkHashMap()) return false;
    if (this.state.pushKey === '') {
      alert("Please input key at textbox.");
      return false;
    }

    let myHashMap = this.state.hashMap;
    let pushedKey = this.state.pushKey;

    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      toastMsg: ` key (${pushedKey}) : ${myHashMap.containsKey(pushedKey)}`,
      hideMsg: false
    });
  };

  hashMapContainsValue = async () => {
    if (this.checkHashMap()) return false;
    if (this.state.pushValue === '') {
      alert("Please input value at textbox.");
      return false;
    }

    let myHashMap = this.state.hashMap;
    let pushedValue = this.state.pushValue;

    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      toastMsg: ` value (${pushedValue}) : ${myHashMap.containsValue(pushedValue)}`,
      hideMsg: false
    });
  };

  hashMapGet = async () => {
    if (this.checkHashMap()) return false;
    if (this.state.pushKey === '') {
      alert("Please input key at textbox.");
      return false;
    }

    let myHashMap = this.state.hashMap;
    let pushedKey = this.state.pushKey;

    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      toastMsg: ` Value of key (${pushedKey}) : ${myHashMap.get(pushedKey)}`,
      hideMsg: false
    });
  };

  hashMapKeySet = async () => {
    if (this.checkHashMap()) return false;

    let myHashMap = this.state.hashMap;
    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      toastMsg: myHashMap.keySet(),
      hideMsg: false
    });
  };

  hashMapEntrySet = async () => {
    if (this.checkHashMap()) return false;

    let myHashMap = this.state.hashMap;
    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      toastMsg: myHashMap.entrySet(),
      hideMsg: false
    });
  };

  hashMapRemove = async () => {
    if (this.checkHashMap()) return false;
    if (this.state.pushKey === '') {
      alert("Please input key at textbox.");
      return false;
    }

    let myHashMap = this.state.hashMap;
    let pushedKey = this.state.pushKey;

    let removedValue = myHashMap.remove(pushedKey);    
    let result = myHashMap.getResult();

    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      textAreaValue: result,
      toastMsg: `Result of remove key (${pushedKey}) : ${removedValue}`,
      hideMsg: false
    });
  };


  hashMapClear = async () => {
    if (this.checkHashMap()) return false;

    let myHashMap = this.state.hashMap;
    myHashMap.clear();
    let result = myHashMap.getResult();

    await this.setState({
      ...this.state,
      hashMap: myHashMap,
      textAreaValue: result,
      toastMsg: `Success to Clear HashMap.`,
      hideMsg: false
    });
  };


  render() {
    let value = this.state;
    let output = value.textAreaValue;
    return (
      <div className="hashMap">
        <div className="hashMap-header">
          <HeaderTemplate />
          <ToastMessage msg={value.toastMsg} sendValue={this.setHideValue} hidden={value.hideMsg} />
        </div>

        <div className="title">HashMap</div>
        <button className="start-btn" onClick={this.start}>Create hashMap</button>

        <div className="test-code">
          <div className="user-input-section">

            <div className="push-form">
              key :
                <input
                type="text"
                name="pushKey"
                value={value.pushKey}
                onChange={this.handleChange}
              />
              value :
                <input
                type="text"
                name="pushValue"
                value={value.pushValue}
                onChange={this.handleChange}
              />
              <button onClick={this.hashMapPut}>put</button>
            </div>
            <div className="remove-form">
              <button onClick={this.hashMapRemove} disabled={!value.hideMsg}>remove</button>
              <button onClick={this.hashMapClear} disabled={!value.hideMsg}>clear</button>
            </div>
            <div className="value-form">
              <button onClick={this.hashMapContainsKey} disabled={!value.hideMsg}>containsKey</button>
              <button onClick={this.hashMapContainsValue} disabled={!value.hideMsg}>containsValue</button>
              <button onClick={this.hashMapGet} disabled={!value.hideMsg}>get</button>
              <button onClick={this.hashMapEntrySet} disabled={!value.hideMsg}>entrySet</button>
              <button onClick={this.hashMapKeySet} disabled={!value.hideMsg}>keySet</button>
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

export default HashMapTemplate;