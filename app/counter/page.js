'use client';

import { useState } from "react";



export default function Counter()
{
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className="text-7xl font-bold mb-4">{count}</h1>
            <div className="flex gap-5">
                <button className="btn btn-primary" onClick = { () => setCount(count+1)}>Increase</button>
                <button className="btn btn-primary" onClick = { () => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}