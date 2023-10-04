import React, { Dispatch, SetStateAction } from 'react'

type ResourceVisualizerProps = {
  resourceName: string,
  resourceEmoji: string,
  resourceAmount: number,
  resourceProduction: number,
  minProduction: number,
  valueEstimationMultiplier?: number,
  setResource: Dispatch<SetStateAction<number>>
  setResourceProduction: Dispatch<SetStateAction<number>>
}
export default function ResourceVisualizer({ resourceName, resourceEmoji, resourceAmount, resourceProduction, minProduction, valueEstimationMultiplier, setResource, setResourceProduction }: ResourceVisualizerProps) {

  function increaseResource(amount: number) {
    setResource(resourceAmount + amount)
  }
  function decreaseResource(amount: number) {
    if (resourceAmount > 0 && amount <= resourceAmount) {
      setResource(resourceAmount - amount)
    }
  }
  function increaseProduction(amount: number) {
    setResourceProduction(resourceProduction + amount)
  }
  function decreaseProduction(amount: number) {
    if (resourceProduction > minProduction && amount <= resourceProduction) {
      setResourceProduction(resourceProduction - amount)
    }
  }
  return (
    <div className={`p-1 border border-2 rounded`}>
      <div className='flex items-center'>
        <h2 className='flex-auto'>{resourceName}</h2>
        <h2 className='flex-auto text-end text-2xl select-none'>{resourceEmoji}</h2>
      </div>
      <h1 className='text-2xl'>{resourceAmount} {valueEstimationMultiplier ? `/ ${resourceAmount*valueEstimationMultiplier}💵` : ''}</h1>
      <div className='flex justify-end'>
        <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { decreaseResource(1) }}>-1</button>
        <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { decreaseResource(5) }}>-5</button>
        <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { increaseResource(1) }}>+1</button>
        <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { increaseResource(5) }}>+5</button>
      </div>
      <div className='flex justify-end'>
        <div className='flex-auto'>
          <h2 className='text-sm'>Production</h2>
          <h1 className='text-2xl'>{resourceProduction}</h1>
        </div> 
        <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold py-2 px-3 rounded m-1 w-auto' onClick={() => { decreaseProduction(1) }}>-1</button>
        <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold py-2 px-3 rounded m-1 w-auto' onClick={() => { increaseProduction(1) }}>+1</button>
      </div>

    </div>
  )
}
