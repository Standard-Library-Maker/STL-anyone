import React, {Component, Fragment} from 'react';
import './ToastMessage.scss';

class ToastMessage extends Component{

  sendData = (hidden) => {
    setTimeout( () => {
      if(hidden === false)
        this.props.sendValue(true);
    }, 3000);
  };

  render() {
    let value = this.props;
    //console.log(value.hidden);
    return(
      <Fragment>
        <div className={"toast-" + value.msg}
             style={{display : value.hidden ? 'none' : 'block'}}
             onAnimationEnd={this.sendData(value.hidden)}
        >{value.msg}</div>
      </Fragment>
    )
  }
}

export default ToastMessage;
