'use client'
import AutomaCardDisplay from '@/components/Expeditions/AutomaCardDisplay'
import { Automaszyna, ExpeditionsAutoma, Maszyna, Maszynette } from '@/models/Expeditions/ExpeditionsAutoma'
import { ExpeditionsAutomaCard, expeditionsAutomaDeck } from '@/models/Expeditions/ExpeditionsAutomaCard'
import { ExpeditionsGameState } from '@/models/Expeditions/ExpeditionsGame'
import React, { useEffect } from 'react'

export default function Page() {
  const [shuffledAutomaDeck, setShuffledAutomaDeck] = React.useState<ExpeditionsAutomaCard[]>([])
  const [currentShuffledAutomaDeckIndex, setCurrentShuffledAutomaDeckIndex] = React.useState<number | undefined>(undefined)
  const [selectedAutomaLevel, setSelectedAutomaLevel] = React.useState<ExpeditionsAutoma>(Maszynette)
  const [automa, setAutoma] = React.useState<ExpeditionsAutoma>(JSON.parse(JSON.stringify(Maszynette)))
  const [gameState, setGameState] = React.useState<ExpeditionsGameState>(ExpeditionsGameState.MAIN)



  useEffect(() => {
    if (currentShuffledAutomaDeckIndex != undefined) {
      handleAdvanceTrack()
    }
    if (gameState == ExpeditionsGameState.FINAL_TURN) {
      setGameState(ExpeditionsGameState.END)
    }
  }, [currentShuffledAutomaDeckIndex, shuffledAutomaDeck])

  useEffect(() => {
    handleGloryIncrease()
    ensureTrackPosition()
  }, [automa.trackPosition])

  useEffect(() => {
    handleFinalTurn()
  }, [automa.currentGloryLevel])

  const shuffle = () => {
    const automaDeck = expeditionsAutomaDeck
    const shuffled = automaDeck.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, automaDeck.length - 2);
    setShuffledAutomaDeck(selected)
  }

  const handleAdvanceTrack = () => {
    if (currentShuffledAutomaDeckIndex != undefined) {
      if (shuffledAutomaDeck[currentShuffledAutomaDeckIndex] && gameState !== ExpeditionsGameState.END) {
        if (shuffledAutomaDeck[currentShuffledAutomaDeckIndex].advancesTrack) {
          setAutoma({ ...automa, trackPosition: automa.trackPosition + 1 })
        }
      }
    }
  }
  const handleFinalTurn = () => {
    if (automa.currentGloryLevel >= 8 && gameState == ExpeditionsGameState.MAIN) {
      setGameState(ExpeditionsGameState.FINAL_TURN)
    }
  }
  const handleGloryIncrease = () => {
    var currentTrackSlot = automa.trackMilestones[automa.trackPosition]
    if (currentTrackSlot && currentTrackSlot.hasGlory && gameState == ExpeditionsGameState.MAIN) {
      var updatedTrackMilestones = automa.trackMilestones
      updatedTrackMilestones[automa.trackPosition].hasGlory = false
      setAutoma({ ...automa, currentGloryLevel: automa.currentGloryLevel + 1, trackMilestones: updatedTrackMilestones })
    }
  }
  const ensureTrackPosition = () => {
    if (automa.trackPosition >= automa.trackLength - 1) {
      setAutoma({ ...automa, trackPosition: automa.trackLength - 1 })
    }
  }
  const handleDrawFromDeck = () => {
    if (gameState == ExpeditionsGameState.MAIN || gameState == ExpeditionsGameState.FINAL_TURN) {
      if (currentShuffledAutomaDeckIndex != undefined) {
        if (currentShuffledAutomaDeckIndex >= shuffledAutomaDeck.length - 1) {
          setCurrentShuffledAutomaDeckIndex(0)
          shuffle()
        }
        else {
          setCurrentShuffledAutomaDeckIndex(currentShuffledAutomaDeckIndex + 1)
        }
      }
      else {
        setCurrentShuffledAutomaDeckIndex(0)
        shuffle()
      }
    }

    if (gameState == ExpeditionsGameState.END) {
      return
    }
  }

  useEffect(() => {
    handleReset()
  }, [selectedAutomaLevel])

  const handleReset = () => {
    setAutoma(JSON.parse(JSON.stringify(selectedAutomaLevel)))
    setGameState(ExpeditionsGameState.MAIN)
    setCurrentShuffledAutomaDeckIndex(undefined)
    shuffle()
  }

  const handleAutomaLevelChange = (e: any) => {
    switch (e.target.value) {
      case '1':
        setSelectedAutomaLevel(JSON.parse(JSON.stringify(Maszynette)))
        break;
      case '2':
        setSelectedAutomaLevel(JSON.parse(JSON.stringify(Maszyna)))
        break;
      case '3':
        setSelectedAutomaLevel(JSON.parse(JSON.stringify(Automaszyna)))
        break;
      default:
        break;
    }
  }


  return (
    <>
      <div className="flex justify-center items-center min-h-full h-max select-none bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] md:bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
        <div className='container border border-2 rounded m-1 p-1 h-max bg-black/90'>
          <div className='flex justify-center items-center'>
            <h1 className='text-2xl mb-1'>Expeditions Automa Helper</h1>
          </div>
          <hr></hr>
          <div className='flex justify-center'>
            <select className="select bg-black border border-white text-white select-lg w-full max-w-xs m-1" onChange={handleAutomaLevelChange}>
              <option disabled selected>Automa Level</option>
              <option value={1}>Maszynette</option>
              <option value={2}>Maszyna</option>
              <option value={3}>Automaszyna</option>
            </select>
          </div>
          <hr></hr>
          <h1 className='text-center'>{automa.automaName} Automa Track</h1>
          <div className='flex w-full justify-center items-center'>
            <div className='flex-col justify-center'>

              <h1 className='text-center text-xl'>⭐</h1>
              <h1 className='text-center text-xl'>{automa.currentGloryLevel}</h1>
            </div>
            <div>
              <div className='flex flex-wrap border border-1 rounded w-auto mb-1 p-1'>
                {
                  //draw a table that has a length of track lenght

                  [...Array(automa.trackLength)].map((e, i) =>
                    <div className="flex-col" key={i}>
                      <p className='text-sm'>{automa.trackPosition === i ? <span>🤖</span> : <span>&nbsp;&nbsp;</span>} </p>
                      <p className='text-sm'>{(automa.trackMilestones[i] && automa.trackMilestones[i].hasGlory) ? '⭐' : '🟦'}</p>
                    </div>)
                }
              </div>
            </div>


          </div>
          <hr></hr>
          <h1 className='text-center text-xl'>Current Card</h1>
          <div className='flex justify-center'>

            <AutomaCardDisplay card={currentShuffledAutomaDeckIndex != undefined ? shuffledAutomaDeck[currentShuffledAutomaDeckIndex] : undefined} />
          </div>
          <div className='flex justify-center my-3'>
            <button disabled={gameState == ExpeditionsGameState.END} className='btn btn-wide btn-accent m-1'
              onClick={() => handleDrawFromDeck()}>Next</button>
            <button className='btn btn-error m-1'
              onClick={() => handleReset()}>Reset</button>
          </div>
          <div className='flex items-center mx-1'>
            <a className='flex-auto text-xs' href='/'>Solo Tools</a>
            <p className='flex-auto text-end text-xs' ><a href='https://hectormagana.art/'>2023 B-Llage </a></p>
          </div>
        </div>
      </div>
        <div className="my-1 collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Peek shuffled deck (spoils game)
          </div>
          <div className="collapse-content p-0">
            <div className='flex flex-wrap'>
              {shuffledAutomaDeck.map((card, idx) => (
                <div key={idx}>
                  <p>{idx === currentShuffledAutomaDeckIndex ? "📍" : "-"}</p>
                  <AutomaCardDisplay card={card} key={idx} />
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}
