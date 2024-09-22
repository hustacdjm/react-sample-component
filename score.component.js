import { fetchScore } from './score'
import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

const ScoreComponent = ({data, env, onUpdateData}) => {
  
    const [scoreResponse, setScoreResponse] = useState(null);

    const handleScoreComponent = ()=>{

      console.log('Start scoring...');

      fetchScore(data, env)
            .then(scoreResponse => {
                 console.log(scoreResponse);
                setScoreResponse(scoreResponse);
                data={
                  ...data,
                  ...scoreResponse
                }
                onUpdateData(data);
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
  
};

export default ScoreComponent;