import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profolio from './profolio';
import TicTacToe from './TicTacToe';
import Gameoflife from './Gameoflife';
import Wiki from './Wiki';
import Markdown from './Markdown';
import Calculator from './Calculator';
import Simon from './Simon';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Profolio} />
          <Route exact path='/tictactoe' component={TicTacToe} />
          <Route exact path='/gameoflife' component={Gameoflife} />
          <Route exact path='/wiki' component={Wiki} />
          <Route exact path='/markdown' component={Markdown} />
          <Route exact path='/calculator' component={Calculator} />
          <Route exact path='/simon' component={Simon} />
        </Switch>
      </main>
    );
  }
}

export default Main;
