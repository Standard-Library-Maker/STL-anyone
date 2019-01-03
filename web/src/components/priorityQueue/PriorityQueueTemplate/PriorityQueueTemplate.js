import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import stl from 'lib/stl';
import HeaderTemplate from 'components/header/HeaderTemplate';
import './PriorityQueueTemplate.scss';

class PriorityQueueTemplate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        queue: '',
        pushValue: '',
        textAreaValue: [],
      };
    }
}

export default PriorityQueueTemplate;