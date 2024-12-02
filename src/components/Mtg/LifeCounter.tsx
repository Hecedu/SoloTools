import React from 'react'

type AutomaCardDisplayProps = {
    life: number
    setLife: React.Dispatch<React.SetStateAction<number>>
    color: string
    flippedControls: boolean
}
export default function LifeCounter( { life, setLife, color, flippedControls }: AutomaCardDisplayProps) {
  return (
    <div className={`h-full text-${color}-500`}>
    <div className={`flex items-center justify-center text-xl border border-4 border-${color}-500 rounded-lg h-full`}>
        <div className='flex items-center justify-center w-1/4 h-full select-none' onClick={() => { setLife(flippedControls ? life + 1 : life - 1) }}>
            {flippedControls ? '+' : '-'}
        </div>
        <div className='flex items-center justify-center w-1/2 h-full select-none'>
            <div>
                <div className='text-6xl'>
                    {life}
                </div>
                <hr className={`border-${color}-500`}></hr>
                <div className='text-6xl rotate-180'>
                    {life}
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center w-1/4 h-full select-none' onClick={() => { setLife(flippedControls ? life - 1 : life + 1) }}>
            {flippedControls ? '-' : '+'}
        </div>
    </div>
</div>
  )
}
