import { useState, useEffect } from "react";

export const EffectChanllenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);

    useEffect(() => {
        console.log("useEffect called : " + (name));
    },[name]);
    return (
        <div className="container">
            <h2>useEffect Chanllenge</h2>
            <p>
                Count: <span>{count}</span>
            </p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                Name: <span>{name}</span>
            </p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}