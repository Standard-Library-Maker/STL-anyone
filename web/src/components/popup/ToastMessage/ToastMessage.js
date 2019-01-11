import React, {Component} from 'react';
import './ToastMessage.scss';

/*class ToastMessage extends Component{
  constructor(props){
    super(props);
    //this.state = props;
    this.state = props;
  }

  setMsg = (msg) => {
    this.setState({
      msg: msg,
    });
  };

  render() {
    //let value = this.state;
    console.log(this.state.msg);
    return(
      <div className="toast-message" >{this.state.msg}</div>
    )
  }
}*/
const ToastMessage = ({ msg }) => {
  //console.log(`${msg}, ${show}`);
  return (
    <div className="toast-message">{msg.toString()}</div>
  )
};

export default ToastMessage;