import React, { Component } from 'react';
import VoteCounter from './components/voteCounter';
import './App.css';

class App extends Component {
  state = {
    langs: [
      {
        id: 0,
        langName: 'PHP',
        votes: 0,
      },
      {
        id: 1,
        langName: 'PYTHON',
        votes: 0,
      },
      {
        id: 2,
        langName: 'GO',
        votes: 0,
      },
      {
        id: 3,
        langName: 'JAVA',
        votes: 0,
      },
    ],
  };

  // Vote Up Handler
  vouteUp = lang => {
    lang.votes += 1;
    const langs = [...this.state.langs];
    const langIndex = langs.indexOf(lang);
    langs[langIndex] = { ...lang };

    this.setState({ langs });
  };

  // Handle Taking new language from user
  addLang = e => {
    const newLang = e.currentTarget.firstElementChild.value.trim()
    if(newLang && isNaN(newLang) ) { const langs = [...this.state.langs];
      e.preventDefault();
      const lang = {
        id: langs.length,
        langName: newLang,
        votes: 0,
      };
      langs.push(lang);
      this.setState({ langs });
      e.target.reset();}else{
        alert('enter a valid langName')
        e.target.reset();
      }

  };

  render() {
    return (
      <>
       
        <div className="App">
        <form onSubmit={this.addLang} action="#">
          <input type="text" /> <input type="submit" value="Add Lang" />
        </form>
          {this.state.langs.map(lang => (
            <VoteCounter
              key={lang.id}
              votes={lang.votes}
              langName={lang.langName}
              voteUp={() => this.vouteUp(lang)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
