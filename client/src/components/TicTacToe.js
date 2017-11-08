import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../logic/logic_tic.js';

class TicTacToe extends Component {
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
      <div className="body-tic">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="row">
                <div className="col-md-6 text-center"><button id="X" type="button" className="btn btn-dark btn-block">X</button></div>
                <div className="col-md-6 text-center ml-auto"><button id="O" type="button" className="btn btn-dark btn-block">O</button></div>
              </div>
              <div>
                <p id="result" className="text-center">Start the game or select the player</p>
                <p id="explain" className="text-center"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 tic mx-auto">
              <div className="row">
                <div className="col-md-4 tic"><button id="row0col0" type="button" class="btn btn-light btn-block btn-tic"></button></div>
                <div className="col-md-4 tic"><button id="row0col1" type="button" class="btn btn-light btn-block btn-tic"></button></div>
                <div className="col-md-4 tic"><button id="row0col2" type="button" class="btn btn-light btn-block btn-tic"></button></div>
              </div>
              <div className="row">
                <div className="col-md-4 tic"><button id="row1col0" type="button" className="btn btn-light btn-block btn-tic"></button></div>
                <div className="col-md-4 tic"><button id="row1col1" type="button" className="btn btn-light btn-block btn-tic"></button></div>
                <div className="col-md-4 tic"><button id="row1col2" type="button" className="btn btn-light btn-block btn-tic"></button></div>
              </div>
              <div class="row">
                <div className="col-md-4 tic"><button id="row2col0" type="button" className="btn btn-light btn-block btn-tic"></button></div>
                <div className="col-md-4 tic"><button id="row2col1" type="button" className="btn btn-light btn-block btn-tic"></button></div>
                <div className="col-md-4 tic"><button id="row2col2" type="button" className="btn btn-light btn-block btn-tic"></button></div>
              </div>
            </div>
          </div>
        </div>
        {footer}
      </div>
    ); 
  }
}

export default TicTacToe;
