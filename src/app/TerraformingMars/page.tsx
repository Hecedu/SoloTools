'use client'
import ResourceVisualizer from '@/components/tm/ResourceVisualizer';
import React, { useState } from 'react'
import TagManager from '@/components/tm/TagManager';
import { Tag, terraformingMarsTags } from '@/models/Tag';
import { Resource, terraformingMarsResources } from '@/models/Resource';


export default function Page() {
  const [generation, setGeneration] = useState<number>(1);
  const [terraformingRating, setTerraformingRating] = useState<number>(14);

  //resource
  const [resources, setResources] = useState<Resource[]>(terraformingMarsResources);

  //tags
  const [tags, setTags] = useState<Tag[]>(terraformingMarsTags);

  function advanceGeneration() {
    setGeneration(generation + 1);
    var newResources = [...resources];
    //add production to resources except heat and power
    newResources.forEach(resource => {
      if (resource.resourceName != 'Heat' && resource.resourceName != 'Power') {
        resource.resourceAmount = resource.resourceAmount + resource.resourceProduction;
      }
    });
    //add current amount of power and heat production to heat
    var powerIndex = newResources.findIndex((obj => obj.resourceName == 'Power'));
    var heatIndex = newResources.findIndex((obj => obj.resourceName == 'Heat'));
    newResources[heatIndex].resourceAmount = newResources[heatIndex].resourceAmount + newResources[heatIndex].resourceProduction + newResources[powerIndex].resourceAmount;
    //set power amount to current power production
    newResources[powerIndex].resourceAmount = newResources[powerIndex].resourceProduction;
    //set new resources
    setResources(newResources);

  }

  function resetTracker() {
    setGeneration(1);
    //reset resources
    var newResources = [...resources];
    newResources.forEach(resource => {
      resource.resourceAmount = 0;
      resource.resourceProduction = 0;
    });
    setResources(newResources);
    //reset tags
    var newTags = [...tags];
    newTags.forEach(tag => {
      tag.amount = 0;
    });
    setTags(newTags);
  }

  function setResource(resourceName: string, resource: Resource) {
    var index = resources.findIndex((obj => obj.resourceName == resourceName));
    setResources([...resources.slice(0, index), resource, ...resources.slice(index + 1)])
  }

  return (
    <div className="flex justify-center items-center min-h-full h-max select-none bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:bg-[url('https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
      <div className='container border border-2 rounded m-1 p-1 h-max bg-black/90 text-white'>
        <div className='flex items-center mb-1'>
          <div className='flex-auto '>
            <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold py-2 px-3 rounded' onClick={() => { resetTracker() }}>Reset</button>
          </div>
          <h2 className='flex-auto font-bold'>Generation {generation}</h2>
          <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold ms-1 py-2 px-3 rounded' onClick={() => { advanceGeneration() }}>Next Gen</button>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-1'>
          {
            resources.map((resource, index) => (
              <ResourceVisualizer key={index} resource={resource} setGeneric={setResource} />
            ))
          }
        </div>
        <TagManager tags={tags} setTags={setTags} />
        <div className='flex items-center'>
          <a className='flex-auto text-xs' href='/'>Solo Tools</a>
          <p className='flex-auto text-end text-xs' ><a href='https://hectormagana.art/'>2023 B-Llage </a>/ Icons by FryxGames</p>
        </div>
      </div>

    </div>
  )
}
