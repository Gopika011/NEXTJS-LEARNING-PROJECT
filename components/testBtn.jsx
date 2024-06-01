'use client';

import { useState } from "react";



export default function TestBtn()
{
    const [count, setCount] = useState(0);
    return (
        <div>
            <button className="btn btn-primary" onClick = { () => setCount(count+1)}>Count: {count}</button>
        </div>
    );
}

//client components refresh on refreshing webpage