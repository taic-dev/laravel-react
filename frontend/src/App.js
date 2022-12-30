import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [value,setValue] = useState([]);

  // 先ほど作成したLaravelのAPIのURL
  const url = "http://localhost:8000/api/list";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
        setValue(res.data.post);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);

  return (
    <div className="App">
      {value.map((article)=>{
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;