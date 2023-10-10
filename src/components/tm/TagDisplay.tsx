import React from 'react'
import { Tag } from "@/models/Tag";



export default function TagDisplay(Tag: Tag) {

    return (
        <div className='flex-auto m-1'>
            <div className='flex flex-col justify-center items-center w-full select-none'>
                <p></p>
                <img className='w-10' src={`${Tag.image}`} alt={Tag.name} />
                <p>{Tag.amount}</p>
            </div>
        </div>
    )
}
