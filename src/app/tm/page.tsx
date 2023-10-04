'use client'
import Modaltest from '@/components/tm/TagManager';
import ResourceVisualizer from '@/components/tm/ResourceVisualizer';
import React, { useEffect, useState } from 'react'
import TagManager from '@/components/tm/TagManager';
import { Tag, terraformingMarsTags } from '@/models/Tag';


export default function page() {
  const [generation, setGeneration] = useState<number>(1);
  const [terraformingRating, setTerraformingRating] = useState<number>(14);

  //resources
  const [megaCredits, setMegaCredits] = useState<number>(0);
  const [steel, setSteel] = useState<number>(0);
  const [titanium, setTitanium] = useState<number>(0);
  const [plants, setPlants] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(0);
  const [heat, setHeat] = useState<number>(0);

  //production
  const [megaCreditsProduction, setMegaCreditsProduction] = useState<number>(0);
  const [steelProduction, setSteelProduction] = useState<number>(0);
  const [titaniumProduction, setTitaniumProduction] = useState<number>(0);
  const [plantsProduction, setPlantsProduction] = useState<number>(0);
  const [energyProduction, setEnergyProduction] = useState<number>(0);
  const [heatProduction, setHeatProduction] = useState<number>(0);

  //tags
  const [tags, setTags] = useState<Tag[]>(terraformingMarsTags);

  useEffect(() => {
    if (megaCredits < 0) {
      setMegaCredits(0);
    }
  }), [megaCredits];

  function advanceGeneration() {
    setGeneration(generation + 1);
    setMegaCredits(megaCredits + megaCreditsProduction);
    setSteel(steel + steelProduction);
    setTitanium(titanium + titaniumProduction);
    setPlants(plants + plantsProduction);
    setHeat(heat + heatProduction + energy);
    setEnergy(energyProduction);
  }

  function resetTracker() {
    setGeneration(1);
    setMegaCredits(0);
    setSteel(0);
    setTitanium(0);
    setPlants(0);
    setHeat(0);
    setEnergy(0);
    setMegaCreditsProduction(0);
    setSteelProduction(0);
    setTitaniumProduction(0);
    setPlantsProduction(0);
    setHeatProduction(0);
    setEnergyProduction(0);
    setTags(terraformingMarsTags);
  }

  return (
    <div className='flex justify-center items-center min-h-screen h-max'>
      <div className='container md:border md:border-2 md:rounded p-1 h-max'>
        <div className='flex items-center mb-1'>
          <div className='flex-auto '>
            <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold py-2 px-3 rounded' onClick={()=>{resetTracker()}}>Reset</button>
          </div>
          <h2 className='flex-auto'>Gen: {generation}</h2>
          <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold ms-1 py-2 px-3 rounded' onClick={() => { advanceGeneration() }}>Next Gen</button>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-1'>
          <ResourceVisualizer resourceName='Credits'
            resourceEmoji='💵'
            resourceAmount={megaCredits}
            resourceProduction={megaCreditsProduction}
            minProduction={-5}
            setResource={setMegaCredits}
            setResourceProduction={setMegaCreditsProduction} />
          <ResourceVisualizer resourceName='Steel'
            resourceEmoji='⚒️'
            resourceAmount={steel}
            resourceProduction={steelProduction}
            minProduction={0}
            valueEstimationMultiplier={2}
            setResource={setSteel}
            setResourceProduction={setSteelProduction} />
          <ResourceVisualizer resourceName='Titanium'
            resourceEmoji='🛰️'
            resourceAmount={titanium}
            resourceProduction={titaniumProduction}
            minProduction={0}
            setResource={setTitanium}
            valueEstimationMultiplier={3}
            setResourceProduction={setTitaniumProduction} />
          <ResourceVisualizer resourceName='Plants'
            resourceEmoji='🍃'
            resourceAmount={plants}
            resourceProduction={plantsProduction}
            minProduction={0}
            setResource={setPlants}
            setResourceProduction={setPlantsProduction} />
          <ResourceVisualizer resourceName='Energy'
            resourceEmoji='⚡➡️'
            resourceAmount={energy}
            resourceProduction={energyProduction}
            minProduction={0}
            setResource={setEnergy}
            setResourceProduction={setEnergyProduction} />
          <ResourceVisualizer resourceName='Heat'
            resourceEmoji='🔥'
            resourceAmount={heat}
            resourceProduction={heatProduction}
            minProduction={0}
            setResource={setHeat}
            setResourceProduction={setHeatProduction} />

        </div>
        <TagManager tags={tags} setTags={setTags} />
        <div className='flex items-center'>
          <a className='flex-auto text-xs' href='/'>TM Solo Tracker</a>
          <a className='flex-auto text-end text-xs' href='https://hectormagana.art/'>©️2023 B-Llage</a>
        </div>
      </div>

    </div>
  )
}
