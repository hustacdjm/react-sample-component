import React from 'react'
import ReactDOM from 'react-dom'

const App = ({data, onUpdateData}) => {
  
    const reactVersion = require('./package.json').dependencies['react'];
    
    return ([
        
        <h1 key='h1key'>
          React
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,

        <p key='pkey'>
          React Version: {reactVersion}
        </p>      
         
    ])
  
}

class Mfe5Element extends HTMLElement {
  
  constructor(){
    super();
    this.dataState = null;
  }

  getDataState(){
    return this.dataState;
  }

  setDataState(dataState){
    this.dataState = dataState;
    console.log("react component set DataState:");
    console.log(this.dataState);
  }
  
  connectedCallback() {

    let data = this.getAttribute("data");
    console.log("react component input data");
    console.log(data);

    ReactDOM.render(<App data={data} onUpdateData={this.setDataState}/>, this);
  }


}

customElements.define('react-component6601e239be361e17e019bbb5', Mfe5Element);