import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function typewriter() {
    const [text, count] = useTypewriter({
        words:[
            "👋 Hi, Learn How To Use The Typewriter Effect!!",
            "Save And Like The Reel, If You Found It Useful!!"
        ],
        loop: true,
        delaySpeed: 1000,
    })
  return (
    <div className="bg-black py-20 flex justify-center">
        <p className="text-3xl font-bold text-white">
            <span>{text}</span>
            <Cursor cursorColor='#0ea5e9' />
        </p>
    </div>
  )
}

export default typewriter