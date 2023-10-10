import { Resource } from '@/models/Resource'
import React, { Dispatch, SetStateAction } from 'react'

type ResourceVisualizerProps = {
  resource: Resource,
  setGeneric: (resourceName: string, resource: Resource) => void
}
export default function ResourceVisualizer({ resource, setGeneric }: ResourceVisualizerProps) {

  function increaseResource(amount: number) {
    resource.resourceAmount = resource.resourceAmount + amount
    setGeneric(resource.resourceName, resource)
  }
  function decreaseResource(amount: number) {
    if (resource.resourceAmount > 0) {
      if (amount <= resource.resourceAmount) {
        resource.resourceAmount = resource.resourceAmount - amount
        setGeneric(resource.resourceName, resource)
      }
      else {
        resource.resourceAmount = 0
        setGeneric(resource.resourceName, resource)
      }
    }
  }
  function increaseProduction(amount: number) {
    resource.resourceProduction = resource.resourceProduction + amount
    setGeneric(resource.resourceName, resource)
  }
  function decreaseProduction(amount: number) {
    if (resource.resourceProduction > resource.minProduction && (resource.resourceProduction - amount) >= resource.minProduction) {
      resource.resourceProduction = resource.resourceProduction - amount
      setGeneric(resource.resourceName, resource)
    }
  }
  return (
    <div className={`p-1 border border-2 rounded`}>
      <div className='flex items-center'>
        <h2 className='flex-auto'>{resource.resourceName}</h2>
        {
          resource.resourceImages.map((image, index) => (
            <img key={index} className='w-7 ms-1' src={`${image}`} alt={resource.resourceName} />
          ))
        }
      </div>
      {
        resource.valueEstimationMultiplier ?
          <>
            <p className='text-2xl'>{resource.resourceAmount} | {resource.valueEstimationMultiplier * resource.resourceAmount}
              <img className='w-5 mx-1 inline' src={'/gameResources/terraformingMars/resources/megacredit.png'} alt={"Megacredit Icon"} />
              :
              {
                resource.resourceName == 'Titanium' ? <img className='w-5 mx-1 inline' src={'/gameResources/terraformingMars/tags/space.png'} alt={"Space Icon"} /> :
                  resource.resourceName == 'Steel' ? <img className='w-5 mx-1 inline' src={'/gameResources/terraformingMars/tags/building.png'} alt={"Building Icon"} /> :
                    <></>
              }
            </p>
          </>
          :
          <p className='text-2xl'>{resource.resourceAmount}</p>
      }
      <div className='flex justify-end'>
        <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { decreaseResource(1) }}>-1</button>
        <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { decreaseResource(5) }}>-5</button>
        <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { increaseResource(1) }}>+1</button>
        <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold p-2 rounded m-1 w-auto' onClick={() => { increaseResource(5) }}>+5</button>
      </div>
      <div className='flex justify-end'>
        <div className='flex-auto'>
          <h2 className='text-sm'>Production</h2>
          <h1 className='text-2xl'>{resource.resourceProduction}</h1>
        </div>
        <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold py-2 px-3 rounded m-1 w-auto' onClick={() => { decreaseProduction(1) }}>-1</button>
        <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold py-2 px-3 rounded m-1 w-auto' onClick={() => { increaseProduction(1) }}>+1</button>
      </div>

    </div>
  )
}
