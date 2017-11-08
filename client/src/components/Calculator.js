import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../logic/logic_cal.js';

class Calculator extends Component {
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
        <div className="container container-cal">
          <div className="row">
            <div className="col-md-4 mx-auto cal">
              <div id="equation" className="text-right"><span className="span-cal"></span></div>
              <div className=""><h1 className="text-right h1-cal">0</h1>
              </div>
              <div className="row">
                <div className="col-md-3 text-center col-cal"><button id="CE" type="button" className="btn btn-light btn-cal">CE</button></div>
                <div className="col-md-3 text-center col-cal"><button id="C" type="button" className="btn btn-light btn-cal">C</button></div>
                <div className="col-md-3 text-center col-cal"><button id="backout" type="button" className="btn btn-light btn-cal"><i className="fa fa-arrow-left" aria-hidden="true"></i></button></div>
                <div className="col-md-3 text-center col-cal"><button id="divide" type="button" className="btn btn-light btn-cal">÷</button></div>
              </div>
              <div className="row">
                <div className="col-md-3 text-center col-cal"><button id="seven" type="button" className="btn btn-light btn-cal number">7</button></div>
                <div className="col-md-3 text-center col-cal"><button id="eight" type="button" className="btn btn-light btn-cal number">8</button></div>
                <div className="col-md-3 text-center col-cal"><button id="nine" type="button" className="btn btn-light btn-cal number">9</button></div>
                <div className="col-md-3 text-center col-cal"><button id="multiple" type="button" className="btn btn-light btn-cal">×</button></div>
              </div>
              <div className="row">
                <div className="col-md-3 text-center col-cal"><button id="four" type="button" className="btn btn-light btn-cal number">4</button></div>
                <div className="col-md-3 text-center col-cal"><button id="five" type="button" className="btn btn-light btn-cal number">5</button></div>
                <div className="col-md-3 text-center col-cal"><button id="six" type="button" className="btn btn-light btn-cal number">6</button></div>
                <div className="col-md-3 text-center col-cal"><button id="minus" type="button" className="btn btn-light btn-cal">-</button></div>
              </div>
              <div className="row">
                <div className="col-md-3 text-center col-cal"><button id="one" type="button" className="btn btn-light btn-cal number">1</button></div>
                <div className="col-md-3 text-center col-cal"><button id="two" type="button" className="btn btn-light btn-cal number">2</button></div>
                <div className="col-md-3 text-center col-cal"><button id="three" type="button" className="btn btn-light btn-cal number">3</button></div>
                <div className="col-md-3 text-center col-cal"><button id="plus" type="button" className="btn btn-light btn-cal">+</button></div>
              </div>
              <div className="row">
                <div className="col-md-3 text-center col-cal"><button id="negative" type="button" class="btn btn-light btn-cal">±</button></div>
                <div className="col-md-3 text-center col-cal"><button id="zero" type="button" class="btn btn-light number btn-cal">0</button></div>
                <div className="col-md-3 text-center col-cal"><button id="dot" type="button" class="btn btn-light number btn-cal">.</button></div>
                <div className="col-md-3 text-center col-cal"><button id="equal" type="button" class="btn btn-light btn-cal">=</button></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-cal">
          {footer}
        </div>
      </div>
    ); 
  }
}

export default Calculator;
