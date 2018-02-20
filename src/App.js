import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CoolStyledButton, IntroText, TitleWithParameter } from './styled';

function returnAfterTimeout() {
  return new Promise(res => {
    setTimeout(res, 1000);
  });
}

class App extends Component {
  state = {
    title: 'Waiting for a click',
    fetched: false,
    clicked: false,
  };

  handleAsyncClick = async () => {
    this.setState(() => ({ clicked: true }));
    await returnAfterTimeout();
    this.setState(() => ({ title: 'Welcome to React', fetched: true }));
  };

  render() {
    console.log('linter warning: (no-console)');
    const { clicked, fetched } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TitleWithParameter danger={fetched}>
            {this.state.title}
          </TitleWithParameter>
        </header>
        <CoolStyledButton onClick={this.handleAsyncClick} disabled={clicked}>
          {clicked ? 'You already clicked' : 'Click me for async action :)'}
        </CoolStyledButton>
        <IntroText className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </IntroText>
      </div>
    );
  }
}

export default App;
