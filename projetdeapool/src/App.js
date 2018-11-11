import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    data : [],
    count : 20
  }

  getPoolImg = (e) => {
    e.preventDefault()
    fetch('http://localhost:9090/api')
    .then(res => res.json())
    .then(resJson => 
      this.setState({
        data : resJson,
        count : this.state.count - 1
      }))
      if (this.state.count <= 0){
        this.setState({
          count : 20
        })
      }
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.data.map((e,i) => {
            return(
              <div key={i}>
            <h1 className="siize">{e.titles[this.state.count]}</h1>
            <img src={e.images[this.state.count]} alt="truc pour les aveugles" />
            </div>
            )
          })}
        </div>
        <button onClick={(i) => this.getPoolImg(i)}> <h1>Next One</h1> </button>
      </div>
    );
  }
}

export default App;
