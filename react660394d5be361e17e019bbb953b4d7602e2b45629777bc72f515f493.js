import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ScoreComponent from './score.component'

const App = ({data, env, onUpdateData}) => {
    
   console.log("React version:", React.version);

    return (
      <>
        <ScoreComponent 
        data={data} 
        env={env} 
        onUpdateData={onUpdateData}         
        ></ScoreComponent>
      </>
    )
  
}

class Elementreact660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493 extends HTMLElement {
  
  constructor(){
    super();
    this.dataState = null;
      // Bind the setDataState method to ensure `this` refers to the component instance.
      this.setDataState = this.setDataState.bind(this);
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
    let env = this.getAttribute("env");

    let dataJson = null;
    let envJson = null;
    if(data==null){
      //Test Mode
      dataJson={
        "component" : {
          "componentTemplateId": "a057a9eeb46843258285818c26a75ea8",
          "templateDeployId": "66ef735fc6f87915fcb69eef",
          "content" : {            
          },
          "ui" : { }
        },
        "runtime" : {
          "data" : {
            "word" : "people"
          }
        },
        "constants" : { }
      };
    }
    else{
      dataJson = JSON.parse(data);
    }

    if(env==null){
      envJson={
        'Authorized': 'X-Asynmous-User-ID',
        'ScoreUrl': 'http://localhost:8081/v3/edu/ReactiveComponentRuntime/score'
      }
    }
    else{
      envJson=JSON.parse(env);
    }



    console.log("react component input data");
    console.log(dataJson);
    const root = ReactDOM.createRoot(this);
    root.render(<App data={dataJson} env={envJson} onUpdateData={this.setDataState}/>);

    // Expose getReactVersion function to the custom element
    this.getReactVersion = () => React.version;
  }


}

customElements.define('react-react660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493', Elementreact660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493);