import React, { useState } from 'react'

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(time)

  function updatetime() {
    let time = new Date().toLocaleTimeString();
    setctime(time)
  }
  setInterval(updatetime, 1000)


  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

export default App;
