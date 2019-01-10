import React, {Component} from 'react';
import './ToastMessage.scss';


class ToastMessage extends Component{
  constructor(props){
    super(props);
    this.state = props;
  }

  setMsg = (msg) => {
    this.setState({
      msg: msg
    });
  };

  render() {
    let value = this.state;
    console.log(value.msg);
    return(
      <div className="toast-message">{value.msg}</div>
    )
  }
}

export default ToastMessage;