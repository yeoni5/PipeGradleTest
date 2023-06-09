import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [message, setMessage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("/hello")
          .then((response) => {
              console.log("hello");
              return response.json();
          })
          .then(function (data) {
              setMessage(data);
          });

      axios.get("/list")
          .then(res=>{
              console.log("list");
              setData(res.data);
              console.log(res.data.length);
            })
  }, []);

  return (
    <div className="App">
        <header>  
               
            <h1>Test-3</h1>          
            <ul style={{ listStyle: 'none' }}>
              {
                message.map((text, index) => <li key={ index }>
                    { text }
                  </li>)
              }
            </ul>
        </header>
        <hr/>
        <section>
            <h2 style={{ listStyle: 'none' }}>SpringBoot /list 로부터 받은 데이타 출력</h2>
            {
              data.map((obj, index) => <li key={ index }>
                { obj.name } : { obj.addr } 거주({ obj.age }세)
              </li>)
            }
        </section>
    </div>
  );
};

export default App;