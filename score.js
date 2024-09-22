export const fetchScore = (data, env) => {

    console.log(env);

    let headers = {
        'Content-Type': 'application/json',  // Example header
        'Authorization':`Bearer ${env.Authorized}`
      };
  
      if(!env.Authorized || env.Authorized==='X-Asynmous-User-ID' ){            
        headers = {
            'Content-Type': 'application/json',  // Example header
            'X-Asynmous-User-ID':'X-Asynmous-API-ID'
          };            
      }
        

    return fetch(env.ScoreUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
        return response.json();
    })
    .catch(error => {
        console.error("Error fetching score:", error);
        throw error;
    });
};