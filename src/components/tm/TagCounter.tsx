import React from 'react'
import { Tag } from "@/models/Tag";
type TagCounterProps = {
    Tag: Tag,

    setTag: (tagName: string, tagAmount: number) => void
}

export default function TagCounter({ Tag, setTag }: TagCounterProps) {
    return (
        <div className='flex-auto'>
            <div className='flex flex-col justify-center items-center w-full border border-2 rounded p-1'>
                <p>{Tag.emoji} {Tag.name}</p>
                <p>{Tag.amount}</p>
                <div className='flex'>
                    <button className='bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold py-2 px-3 m-1 rounded w-auto' onClick={() => { setTag(Tag.name, - 1) }}>-1</button>
                    <button className='bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold py-2 px-3 m-1 rounded w-auto' onClick={() => { setTag(Tag.name, 1) }}>+1</button>
                </div>
            </div>
        </div>
    )
}
