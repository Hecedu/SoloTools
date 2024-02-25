import { ExpeditionsAutoma } from "@/models/Expeditions/ExpeditionsAutoma"
import { ExpeditionsAutomaCard } from "@/models/Expeditions/ExpeditionsAutomaCard"

type AutomaCardDisplayProps = {
    card?: ExpeditionsAutomaCard
    automa?: ExpeditionsAutoma
}
export default function AutomaCardDisplay({ card, automa }: AutomaCardDisplayProps) {
    return (
        <>
            {
                card && automa ?
                    <div className='flex flex-col h-80 w-64 p-1 m-1 border border-1 rounded bg-zinc-900'>
                        <div className="flex flex-col justify-center flex-auto border border-1">

                            <h2 className="flex justify-center">{card.advancesTrack ? "🟦➡️" : "-"}</h2>
                            <h2 className="flex justify-center text-xs italic">{card.advancesTrack ? "Advance Track" : "-"}</h2>
                        </div>
                        <div className="flex-auto">
                            <div className="grid grid-cols-3 divide-x h-auto text-xl">
                                <div className="pe-1">
                                    <p>
                                        {card.northMechRoutine.performsSwipe ? "🧹" : "-"}
                                    </p>
                                    <p className="text-xs italic">
                                        {card.northMechRoutine.performsSwipe ? "Swipe adjacent cards" : ""}
                                    </p>
                                </div>
                                <div className="p-1 col-span-2">

                                    {
                                        card.northMechRoutine.action ?
                                        <div className="m-1" style={{opacity:
                                            `${
                                                automa.currentGloryLevel >= card.northMechRoutine.action?.gloryRequirement ?
                                                 "100%" : "20%"
                                            }`
                                        }}>
                                                <div>⭐{card.northMechRoutine.action?.gloryRequirement} : {card.northMechRoutine.action?.action.icon}{card.northMechRoutine.action?.amount}</div>
                                                <p className="text-xs italic">{card.northMechRoutine.action?.action.description}</p>
                                            </div>
                                            :
                                            <p>-</p>
                                    }
                                    <hr></hr>
                                    <h3>🤖{[...Array(card.northMechRoutine.roamAmount)].map((e, i) =>
                                        <span className="flex-col" key={i}>
                                            ➡️
                                        </span>)} </h3>
                                </div>
                            </div>

                            <hr className='m-1'></hr>
                            <div className="grid grid-cols-3 divide-x h-auto text-xl">
                                <div className="pe-1">
                                    <p>
                                        {card.centralMechRoutine.performsSwipe ? "🧹" : "-"}
                                    </p>
                                    <p className="text-xs italic">
                                        {card.centralMechRoutine.performsSwipe ? "Swipe adjacent cards" : ""}
                                    </p>
                                </div>
                                <div className="p-1 col-span-2">

                                    {
                                        card.centralMechRoutine.action ?
                                            <div className="m-1" style={{opacity:
                                                `${
                                                    automa.currentGloryLevel >= card.centralMechRoutine.action?.gloryRequirement ?
                                                     "100%" : "30%"
                                                }`
                                            }}>
                                                
                                                <div>⭐{card.centralMechRoutine.action?.gloryRequirement} : {card.centralMechRoutine.action?.action.icon}{card.centralMechRoutine.action?.amount}</div>
                                                <p className="text-xs italic">{card.centralMechRoutine.action?.action.description}</p>
                                            </div>
                                            : <p>-</p>
                                    }
                                    <hr></hr>
                                    <h5>{[...Array(card.centralMechRoutine.roamAmount)].map((e, i) =>
                                        <span className="flex-col" key={i}>
                                            ⬅️
                                        </span>)} 🤖</h5>
                                </div>
                            </div>
                        </div>
                        <h1 className="flex-auto flex items-end text-xs"> id: {card.id}</h1>
                    </div> :
                    <div className='flex h-80 w-64 p-3 m-1 border border-1 rounded bg-black items-center'>
                        <h1 className="text-sm">Click &quot;Next&quot; to draw your first card</h1>
                    </div>

            }
        </>

    )
}
