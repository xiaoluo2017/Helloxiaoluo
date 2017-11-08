import React, { Component } from 'react';
import '../logic/logic_simon.js';
import FontAwesome from 'react-fontawesome';

class Simon extends Component {
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
          <div className="row">
            <div className="col-md-6 mx-auto simon">
              <div id="simon-board">
                <div className="col-md-12 mx-auto">
                  <div className="row">
                    <div className="col-md-6 simon">
                      <div id="green" className="pad"></div>
                    </div>
                    <div className="col-md-6 simon">
                      <div id="red" className="pad"></div>
                    </div>
                  </div>  
                  <div className="row">
                    <div className="col-md-6 simon">
                      <div id="yellow" className="pad"></div>
                    </div>
                    <div className="col-md-6 simon">
                      <div id="blue" className="pad"></div>
                    </div>
                  </div>
                </div>
                <div id="core">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h1 id="brand-simon">Simon</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-1"></div>
                      <div className="col-md-3 simon"><div id="display" className="text-center"><span id="count">--</span></div></div>
                      <div className="col-md-3 text-center simon">
                        <button id="start" className="btn btn-danger btn-danger-simon"></button>
                      </div>
                      <div className="col-md-3 text-center simon">
                        <button id="strict" className="btn btn-warning btn-warning-simon"></button>
                      </div>
                    </div>
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3 text-center simon">
                      <p className="label">COUNT</p>
                    </div>
                    <div className="col-md-3 text-center simon">
                      <p className="label">START</p>
                    </div>
                    <div className="col-md-3 text-center simon">
                      <p className="label">STRICT</p>
                    </div>
                  </div>
                  <div className="row">
                    <div id="result-simon" className="col-md-4 mx-auto">
                      <i className="fa fa-gamepad fa-3x" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {footer}
      </div>
    ); 
  }
}

export default Simon;
