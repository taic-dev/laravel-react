import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  // 先ほど作成したLaravelのAPIのURL
  const url = "http://localhost:8000/api/list";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
	console.log(res);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);
  
  return (
    <div className="App"></div>
  );
}

export default App;