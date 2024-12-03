import { PlayerState } from '@/app/MagicTheGathering/LifeCounter/page'
import React from 'react'

type AutomaCardDisplayProps = {
    id: number,
    playerState: PlayerState
    setPlayerState: React.Dispatch<React.SetStateAction<PlayerState>>
    color: string
    flippedControls: boolean
}
export default function LifeCounter({ id, playerState, setPlayerState, color, flippedControls }: AutomaCardDisplayProps) {
    function clampMax(num: number, max: number) {
        return num >= max
            ? max
            : num
    }
    
    function handleLifeChange(prevState: PlayerState, flippedControls: boolean, left: boolean) {
        if (flippedControls) {
            if (left) {
                if (playerState.life < 999)
                    return { ...prevState, life: prevState.life + 1 }
            }
            else {
                if (playerState.life > 0)
                    return { ...prevState, life: prevState.life - 1 }
            }
        }
        else {
            if (left) {
                if (playerState.life > 0)
                    return { ...prevState, life: prevState.life - 1 }
            }
            else {
                if (playerState.life < 999)
                    return { ...prevState, life: prevState.life + 1 }
            }
        }
        return prevState
    }

    function handlePoisonChange(prevState: PlayerState, flippedControls: boolean, left: boolean) {
        if (flippedControls) {
            if (left) {
                if (playerState.poison < 10)
                    return { ...prevState, poison: prevState.poison + 1 }
            }
            else {
                if (playerState.poison > 0)
                    return { ...prevState, poison: prevState.poison - 1 }
            }
        }
        else {
            if (left) {
                if (playerState.poison > 0)
                    return { ...prevState, poison: prevState.poison - 1 }
            }
            else {
                if (playerState.poison < 10)
                    return { ...prevState, poison: prevState.poison + 1 }
            }
        }
        return prevState
    }

    return (
        <>
            <dialog id={`poison_modal_${id}`} className="modal">
                <div className={`modal-box border border-${color}-500`}>
                    <div className={`flex items-center justify-center text-xl h-full`}>
                        <div className='flex items-center justify-center w-1/4 h-full select-none' onClick={() => {
                            setPlayerState(
                                (prevState) => {
                                    return handlePoisonChange(prevState, flippedControls, true)
                                }
                            )
                        }}>
                            {flippedControls ? '+' : '-'}
                        </div>
                        <div className='flex items-center justify-center w-1/2 h-full select-none text-center'>
                            <div>
                                <div className={`text-6xl ${flippedControls ? 'rotate-180' : ''}`}>
                                    🧪 : {playerState.poison}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-1/4 h-full select-none' onClick={() => {
                            setPlayerState(
                                (prevState) => {
                                    return handlePoisonChange(prevState, flippedControls, false)
                                }
                            )
                        }}>
                            {flippedControls ? '-' : '+'}
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>

            <dialog id={`life_modal_${id}`} className="modal">
                <div className={`modal-box border border-${color}-500`}>
                    <div className={`flex items-center justify-center text-xl h-full`}>
                        <div className='flex items-center justify-center gap-5 w-1/2 h-full select-none text-center'>
                            <div className="h-full">
                                <div className="text-3xl mb-2">
                                    Life
                                </div>
                                <input
                                    className='shadow h-max text-center'
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    value={playerState.life}
                                    onChange={(e) => {
                                        setPlayerState((prevState) => { return { ...prevState, life: clampMax(e.target.value as unknown as number, 99) } })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>

            <div className={`h-full text-${color}-500`}>
                <div className={`flex items-center justify-center text-xl border border-4 border-${color}-500 rounded-lg h-full`}>
                    <div className='flex items-center justify-center w-1/4 h-full select-none' onClick={() => {
                        setPlayerState((prevState) => {
                            return (handleLifeChange(prevState, flippedControls, true))
                        })
                    }}>
                        {flippedControls ? '+' : '-'}
                    </div>
                    <div className='flex items-center justify-center w-1/2 h-full select-none text-center'>
                        <div className='w-full'>
                            <div className={`p-1 my-2 border border-2 border-${color}-500 rounded-xl`} onClick={() => {
                                const result = document.getElementById(`poison_modal_${id}`) as HTMLDialogElement
                                result ? result.showModal() : undefined
                            }}>
                                🧪 : {playerState.poison}
                            </div>
                            <div className={`border border-2 border-${color}-500 rounded-xl py-2`} onClick={() => {
                                const result = document.getElementById(`life_modal_${id}`) as HTMLDialogElement
                                result ? result.showModal() : undefined
                            }}>
                                <div className='text-6xl'>
                                    {playerState.life > 0 && playerState.poison < 10 ? playerState.life : '💀'}
                                </div>
                                <hr className={`border border-${color}-500 border-1  my-2`}></hr>
                                <div className='text-6xl rotate-180'>
                                    {playerState.life > 0 && playerState.poison < 10 ? playerState.life : '💀'}
                                </div>
                            </div>
                            <div className={`p-1 my-2 border border-2 border-${color}-500 rounded-xl rotate-180`} onClick={() => {
                                const result = document.getElementById(`poison_modal_${id}`) as HTMLDialogElement
                                result ? result.showModal() : undefined
                            }}>
                                🧪 : {playerState.poison}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-1/4 h-full select-none' onClick={() => {
                        setPlayerState((prevState) => {
                            return handleLifeChange(prevState, flippedControls, false)
                        })
                    }}>
                        {flippedControls ? '-' : '+'}
                    </div>
                </div>
            </div>
        </>
    )
}
