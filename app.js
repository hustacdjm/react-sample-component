import React from 'react'
import ReactDOM from 'react-dom'
import { MathJax, MathJaxContext } from "better-react-mathjax";

const App = ({data, onUpdateData}) => {
  
    const reactVersion = require('./package.json').dependencies['react'];
    
    console.log(data);
    const config = {
      loader: { load: ["input/asciimath"] }
    };

    return (
      <div>
        <MathJaxContext config={config}>
        <h2>Basic MathJax example with Latex</h2>
        <MathJax>{data.component.content.equation}</MathJax>
      </MathJaxContext>
          
      </div>

    )
  
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
    let dataJson = JSON.parse(data);
    console.log("react component input data");
    console.log(dataJson);

    ReactDOM.render(<App data={dataJson} onUpdateData={this.setDataState}/>, this);
  }


}

customElements.define('react-component660394d5be361e17e019bbb986a28ec220424d43b271f47a3f5a801d', Mfe5Element);