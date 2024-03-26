import React from 'react'
import ReactDOM from 'react-dom'
import YouTube from 'react-youtube';

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];
    
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return ([
        
        <h1>
          React
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,

        <p>
          React Version: {reactVersion}
        </p>,        
        
        <YouTube videoId="2g811Eo7K8U" opts={opts}  />        
    ])
  }
}

class Mfe5Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-component6601e239be361e17e019bbb5', Mfe5Element);