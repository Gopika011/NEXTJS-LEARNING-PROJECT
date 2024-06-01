'use client'

import React from 'react'

export default function Error({error,reset}) {
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={reset} className='btn btn-error'>TRY AGAIN</button>
    </div>
  )
}

