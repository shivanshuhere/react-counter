import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(7)

    function inc () {
        if (count < 20) 
        {
            setCount(count=> count + 1);
    }}
    function dec () {
       if (count > 0) {
        setCount(count=> count - 1);
    }}
    return (
        <div className="text-center ">
        <h1 className="text-5xl mb-3 textShadow font-semibold">Counter App</h1>
        <p className="mb-8">Min: 0 | Default: 7 | Max: 20</p>
        <h3 className="mb-6">Counter is : {count}</h3>
        <button className="border-2 py-2 px-6 rounded-md  font-mono text-sm mr-1
        bg-slate-800 text-white border-slate-800 scale-95
        transition ease delay-70
        "  onClick={inc}>Increment</button>
        <button className="  text-slate-800 bg-white py-2 px-6 rounded-md font-mono text-sm ml-1  transition ease delay-70 active:outline-cyan-400
         hover:bg-slate-800 hover:text-white hover:scale-95
        " onClick={dec}>Decrement</button>
        </div>
    );
}

export default Counter