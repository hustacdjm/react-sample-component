import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { fetchScore } from './score';

const App = ({data, env, onUpdateData}) => {
  
    const [scoreResponse, setScoreResponse] = useState(null);

    const handleScoreComponent = ()=>{

      console.log('Start scoring...');

      fetchScore(data, env)
            .then(scoreResponse => {
                 console.log(scoreResponse);
                setScoreResponse(scoreResponse);
            })
            .catch(err => {
                console.log(err.message);
            });      
    }

    
    return (
      <>
        <div className="text-3xl mt-4 font-bold underline">
         Develop the React Component <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleScoreComponent}>Score</button>
        </div>

        <div>       
          {scoreResponse && (
            <div>
              <h3>Score Response:</h3>
              <pre>{JSON.stringify(scoreResponse.runtime.score, null, 2)}</pre>
            </div>
          )}
          In this approach:
      </div>
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
    let evn = this.getAttribute("env");

    let dataJson = null;
    let envJson = null;
    if(data==null){
      //Test Mode
      dataJson={
        "component" : {
          "componentTemplateId": "30a70399b4ed499f9eb8208993b7165c",
          "templateDeployId": null,
          "content" : {
            "question" : "This is the question?"
          },
          "ui" : { }
        },
        "runtime" : {
          "data" : {
            "answer" : "people"
          }
        },
        "constants" : { }
      };
    }
    else{
      dataJson = JSON.parse(data);
    }

    if(envJson==null){
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

    ReactDOM.render(<App data={dataJson} env={envJson} onUpdateData={this.setDataState}/>, this);
  }


}

customElements.define('react-react660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493', Elementreact660394d5be361e17e019bbb953b4d7602e2b45629777bc72f515f493);