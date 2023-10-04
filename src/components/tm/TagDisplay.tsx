import React from 'react'
import { Tag } from "@/models/Tag";



export default function TagDisplay(Tag: Tag) {

    return (
        <div className='flex-auto'>
            <div className='flex flex-col justify-center items-center w-full'>
                <p>{Tag.emoji}</p>
                <p>{Tag.amount}</p>

            </div>
        </div>
    )
}
