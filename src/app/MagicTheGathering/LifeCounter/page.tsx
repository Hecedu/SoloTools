'use client'
import LifeCounter from '@/components/Mtg/LifeCounter'
import React, { useState } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
export type PlayerState = {
    life: number
    poison: number
}
const defaultPlayerState: PlayerState = { life: 40, poison: 0 }
export default function Page() {

    const [player1State, setPlayer1State] = useState<PlayerState>({ life: 40, poison: 0 })
    const [player2State, setPlayer2State] = useState<PlayerState>({ life: 40, poison: 0 })
    const [player3State, setPlayer3State] = useState<PlayerState>({ life: 40, poison: 0 })
    const [player4State, setPlayer4State] = useState<PlayerState>({ life: 40, poison: 0 })
    const handle = useFullScreenHandle();

    return (
        <>
            <FullScreen handle={handle}>
                <dialog id="settings_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Settings are coming soon :)</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>
                <dialog id="about_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-1">About</h3>
                        <p className="py-1">This app is designed to be used on a cellphone or tablet.</p>
                        <p className="py-1">Lay down the device horizontally in the middle of the play area.</p>
                        <p className="py-1">Buttons are laid down to be consistent for opposite players.</p>
                        <h3 className="font-bold text-lg my-1">Features</h3>
                        <p className="py-1">Tap ↕️ to enter fullscreen (on supported devices).</p>
                        <p className="py-1">Tap any life to type in a life value (only numbers are allowed).</p>
                        <p className="py-1">Tap any poison icon 🧪 to set the current poison counter for each player.</p>
                        <p className="py-1">Tap reset ♻️ icon to reset the game.</p>

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-black rounded-lg text-sm select-none flex gap-3'>
                    <div className='border border-2 rounded-lg p-2 w-10 flex justify-center items-center m-0' onClick={() => {
                        const result = document.getElementById('settings_modal') as HTMLDialogElement
                        result ? result.showModal() : undefined
                    }}>
                        ⚙️
                    </div>
                    <div className='border border-2 rounded-lg p-2 w-10 flex justify-center items-center m-0' onClick={() => {
                        const result = document.getElementById('about_modal') as HTMLDialogElement
                        result ? result.showModal() : undefined
                    }}>
                        ❓
                    </div>
                    <div className='border border-2 rounded-lg p-2 w-10 flex justify-center items-center m-0' onClick={
                        handle.active ? handle.exit : handle.enter
                    }>
                        ↕️
                    </div>
                    <div className='border border-2 rounded-lg p-2 w-10 flex justify-center items-center m-0' onClick={
                        () => {
                            setPlayer1State(defaultPlayerState)
                            setPlayer2State(defaultPlayerState)
                            setPlayer3State(defaultPlayerState)
                            setPlayer4State(defaultPlayerState)
                        }
                    }>
                        ♻️
                    </div>
                </div>
                <a className='absolute  bg-black  p-1 top-1/2 transform -translate-y-1/2 text-xs select-none' href="/">Solo Tools</a>
                <a className='absolute bg-black p-1 top-1/2 right-0 transform -translate-y-1/2 text-xs select-none' href="https://hectormagana.art">B-Llage©2024</a>
                <div className='grid grid-cols-2 h-full vw-100 h-screen'>
                    <LifeCounter id={1} playerState={player1State} setPlayerState={setPlayer1State} color='pink' flippedControls={true} />
                    <LifeCounter id={2} playerState={player2State} setPlayerState={setPlayer2State} color='amber' flippedControls={true} />
                    <LifeCounter id={3} playerState={player3State} setPlayerState={setPlayer3State} color='emerald' flippedControls={false} />
                    <LifeCounter id={4} playerState={player4State} setPlayerState={setPlayer4State} color='blue' flippedControls={false} />
                </div>

            </FullScreen>
        </>
    )
}
