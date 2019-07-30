import React from 'react';
import logo from './logo.svg';
import './App.css';

class Translater extends React.Component {
  constructor(){
    super();
    this.state = {
      inputText : '', 
      outrutText : ''
    };
    this.changeInputText = this.changeInputText.bind(this);

  }

  changeInputText(event){
    this.setState({
      inputText : event.target.value
    });
  }

  whatIsLang(){
    https://translate.yandex.net/api/v1.5/tr/detect
    ? [key=<trnsl.1.1.20190727T121220Z.f014cc5d6f7289e5.afd43c87f6ca913b425f7bca69ef1206e8c38e5b>]
    & text=<this.inputText>
    & [hint=<список вероятных языков текста>]
  }

  translateText(){
    https://translate.yandex.net/api/v1.5/tr/translate
    ? [key=<trnsl.1.1.20190727T121220Z.f014cc5d6f7289e5.afd43c87f6ca913b425f7bca69ef1206e8c38e5b>]
    & [text=<this.inputText>]
    & [lang=<направление перевода>]
    & [format=<формат текста>]
    & [options=<опции перевода>]
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input className="App-input" type="text" value={this.state.inputText} onChange={this.changeInputText} />
          <button className="App-buttons">Translate</button>
          <h1>This is translate</h1>
        </header>
      </div>
    )
  }
}

function App() {
  return (
    <Translater />
  );
}

export default App;
