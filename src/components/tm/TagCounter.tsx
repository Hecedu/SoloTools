import React from 'react'
import { Tag } from "@/models/Tag";
type TagCounterProps = {
    Tag: Tag,

    setTag: (tagName: string, tagAmount: number) => void
}

export default function TagCounter({ Tag, setTag }: TagCounterProps) {
    return (
        <div className='flex-auto min-w-0 m-px'>
            <div className='flex flex-col justify-center items-center w-full border border-2 rounded p-1 select-none'>
                <p>{Tag.name}</p>
                <img className='w-10' src={`${Tag.image}`} alt={Tag.name} />
                <p>{Tag.amount}</p>
                <div className='flex w-full'>
                    <button className='flex-auto bg-red-600 md:hover:bg-red-700 active:bg-red-700 text-white font-bold p-1 me-px rounded' onClick={() => { setTag(Tag.name, - 1) }}>-1</button>
                    <button className='flex-auto bg-green-600 md:hover:bg-green-700 active:bg-green-700 text-white font-bold p-1 ms-px rounded' onClick={() => { setTag(Tag.name, 1) }}>+1</button>
                </div>
            </div>
        </div>
    )
}
