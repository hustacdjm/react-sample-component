import React from 'react'
import ReactDOM from 'react-dom'
import { MathJax, MathJaxContext } from "better-react-mathjax";

const App = ({data, onUpdateData}) => {
  
    const reactVersion = require('./package.json').dependencies['react'];
    
    console.log(data);
    const config = {
      loader: { load: ["input/asciimath"] },
      asciimath: {
        displaystyle: true,
        delimiters: [
          ["$", "$"],
          ["`", "`"]
        ]
      }
    };

    return (
      <div>

        {data.component.ui.showDescription?( <div dangerouslySetInnerHTML={{ __html: data.component.content.description }} />):<div/>}
        <MathJaxContext config={config}>        
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

customElements.define('react-component660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493', Mfe5Element);