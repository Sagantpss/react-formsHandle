import { useEffect, useState } from "react"

export const CleanUp = () => {
    const [count,setCount] = useState(0);

   useEffect (() => {
    const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
    },1000);

    return () => {
        clearInterval(timer);
    }
   },[])

    return (
        <div className="container">
            <div className="card">
                <p>My Subscribers</p>
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h2>
                    Subscribers Realtime Counter
                </h2>
            </div>
        </div>
    )
}