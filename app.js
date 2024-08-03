import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = ({data, onUpdateData}) => {
  
   
    return (
      
        <div className="text-3xl mt-4 font-bold underline">
         Develop the React Component
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

    let dataJson = null;
    if(data==null){
      //Test Mode
      dataJson = {
        
      };
    }
    else{
      dataJson = JSON.parse(data);
    }

    console.log("react component input data");
    console.log(dataJson);

    ReactDOM.render(<App data={dataJson} onUpdateData={this.setDataState}/>, this);
  }


}

customElements.define('react-react660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493', Mfe5Element);