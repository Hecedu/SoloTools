'use client'
import LifeCounter from '@/components/Mtg/LifeCounter'
import React, { useState } from 'react'
export default function Page() {
    const [player1Health, setPlayer1Health] = useState(40)
    const [player2Health, setPlayer2Health] = useState(40)
    const [player3Health, setPlayer3Health] = useState(40)
    const [player4Health, setPlayer4Health] = useState(40)
    return (
        <>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Settings are comming soon :)</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 border border-2 bg-black rounded-lg text-sm select-none' onClick={() => document.getElementById('my_modal_2').showModal()}>⚙️</div>
            <a className='absolute border border-2 bg-black rounded-sm p-1 top-1/2 transform -translate-y-1/2 text-xs select-none' href="/">Solo Tools</a>
            <a className='absolute border border-2 bg-black rounded-sm p-1 top-1/2 right-0 transform -translate-y-1/2 text-xs select-none' href="https://hectormagana.art">B-Llage © 2024</a>
            <div className='grid grid-cols-2 h-full vw-100'>
                <LifeCounter life={player1Health} setLife={setPlayer1Health} color='pink' />
                <LifeCounter life={player2Health} setLife={setPlayer2Health} color='amber' />
                <LifeCounter life={player3Health} setLife={setPlayer3Health} color='emerald' />
                <LifeCounter life={player4Health} setLife={setPlayer4Health} color='blue' />
            </div>
        </>
    )
}
