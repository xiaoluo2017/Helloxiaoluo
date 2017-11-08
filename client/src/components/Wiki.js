import React, { Component } from 'react';
import '../logic/logic_wiki.js';
import FontAwesome from 'react-fontawesome';

class Wiki extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const footer = (
      <div className="copyright">
        <p><FontAwesome className='icon' name='copyright' /> Xiao Luo 2017</p>
      </div>
    );

    return (
      <div>
        <div className="container">
          <div className="blank"></div>
          <div className="row">
            <div className="col-md-3 mx-auto text-center">
              <input type="text" name="keyword" id="keyword" />
            </div>
          </div>
          <div id="result-0"></div>
          <div id="result-1"></div>
          <div id="result-2"></div>
          <div id="result-3"></div>
          <div id="result-4"></div>
          <div id="result-5"></div>
          <div id="result-6"></div>
          <div id="result-7"></div>
          <div id="result-8"></div>
          <div id="result-9"></div>
        </div>
        {footer}
      </div>
    ); 
  }
}

export default Wiki;
