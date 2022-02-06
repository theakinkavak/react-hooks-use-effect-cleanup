import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  // }, []);

  useEffect(() => {
    
    const timerID = setInterval(() => {
      console.log("useEffect called")
      setTime(new Date())
      }, 1000);
    
    return function cleanup() {
      clearInterval(timerID);
    }
    
  }, [])

  console.log("Component rendering")

  return <div>{time.toString()}</div>;
}

export default Clock;
