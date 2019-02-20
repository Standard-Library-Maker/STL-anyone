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
    alert("Initialize HashMap!! Please press start button");
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
  let newHashMap;
  await this.setState({
    ...this.state,
    hashMap: newHashMap,
    textAreaValue: [],
    toastMsg: 'New HashMap Created!',
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
    toastMsg: `size : ${newHashMap.size()}`,
    hideMsg: false
  });
};

checkEmpty = () => {
  if (this.checkHashMap()) return false;
  let newHashMap = this.state.hashMap;
  this.setState({
    ...this.state,
    toastMsg: `isEmpty ? ${newHashMap.isEmpty().toString()}`,
    hideMsg: false
  });
};

hashMapPut = async () => {
  if (this.checkHashMap()) return false;
  if (this.state.pushValue === '' || this.state.pushKey === '') {
    alert("please input key, value");
    return false;
  }

  let myHashMap = this.state.hashMap;
  let pushedKey = this.state.pushKey;
  let pushedValue = this.state.pushValue;
  let result = this.state.textAreaValue;

  myHashMap.put(pushedKey, pushedValue);
  //result.push('{'+pushedkey+','+pushedValue+'}');
  await this.setState({
    ...this.state,
    hashMap: myHashMap,
    textAreaValue: result
  });
};

hashMapContainsKey = async () => {
  if (this.checkHashMap()) return false;
  if (this.state.pushKey=== '') {
    alert("please input key");
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
  if (this.state.pushValue=== '') {
    alert("please input value");
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
  if (this.state.pushKey=== '') {
    alert("please input key");
    return false;
  }

  let myHashMap = this.state.hashMap;
  let pushedKey = this.state.pushKey;

  await this.setState({
    ...this.state,
    hashMap: myHashMap,
    toastMsg: ` key (${pushedKey}) : ${myHashMap.get(pushedKey)}`,
    hideMsg: false
  });
};

hashMapKeySet = async () => {
  if (this.checkHashMap()) return false;

  let myHashMap = this.state.hashMap;

  await this.setState({
    ...this.state,
    hashMap: myHashMap,
    toastMsg: ` Key Set : ${myHashMap.keySet()}`,
    hideMsg: false
  });
};

hashMapEntrySet = async () => {
  if (this.checkHashMap()) return false;

  let myHashMap = this.state.hashMap;

  await this.setState({
    ...this.state,
    hashMap: myHashMap,
    toastMsg: ` Key Set : ${myHashMap.EntrySet()}`,
    hideMsg: false
  });
};

hashMapRemove = async () => {
  if (this.checkHashMap()) return false;
  if (this.state.pushKey=== '') {
    alert("please input Key");
    return false;
  }

  let myHashMap = this.state.hashMap;
  let pushedKey = this.state.pushKey;
  
  await this.setState({
    ...this.state,
    hashMap: myHashMap,
    toastMsg: ` remove key (${pushedKey}) : (${myHashMap.remove(pushedKey)}`,
    hideMsg: false
  });
};


hashMapClear = async () => {
  if (this.checkHashMap()) return false;

  let myHashMap = this.state.hashMap;
  myHashMap.clear();

  await this.setState({
    ...this.state,
    hashMap: myHashMap,
    toastMsg: ` clear hashMap`,
    hideMsg: false
  });
};


  render() {
    let value = this.state;
    let output = '';
    value.textAreaValue.forEach((v) => { output += v; });
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
                <input
                  type="text"
                  name="pushKey"
                  value={value.pushKey}
                  onChange={this.handleChange}
                />
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


export default HashMapTemplate;