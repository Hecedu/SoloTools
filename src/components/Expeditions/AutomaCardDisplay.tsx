import { ExpeditionsAutomaCard } from "@/models/Expeditions/ExpeditionsAutomaCard"

type AutomaCardDisplayProps = {
    card?: ExpeditionsAutomaCard
}
export default function AutomaCardDisplay({ card }: AutomaCardDisplayProps) {
    return (
        <>
            {
                card ?
                    <div className='flex flex-col h-80 w-64 p-2 m-1 border border-1 rounded bg-black'>
                        <div className=" flex-auto border border-1">

                            <h2 className="flex justify-center ">{card.advancesTrack ? "🟦➡️" : "-"}</h2>
                            <h2 className="flex justify-center ">{card.advancesTrack ? "Advance Track" : "-"}</h2>
                        </div>
                        <div className="flex-auto">
                            <div className="grid grid-cols-2 divide-x h-auto">
                                <div>{card.northMechRoutine.performsSwipe ? "🧹" : "-"}</div>
                                <div className="p-1">

                                    {
                                        card.northMechRoutine.action ?
                                            <>
                                                <div>⭐{card.northMechRoutine.action?.gloryRequirement} {card.northMechRoutine.action?.action.icon}{card.northMechRoutine.action?.amount}</div>
                                                <p className="text-xs">{card.northMechRoutine.action?.action.description}</p>
                                            </>
                                            :
                                            <p>-</p>
                                    }
                                    <h3>🤖➡️➡️ {card.northMechRoutine.roamAmount}</h3>
                                </div>
                            </div>

                            <hr className='m-1'></hr>
                            <div className="grid grid-cols-2 divide-x h-auto">
                                <div>{card.centralMechRoutine.performsSwipe ? "🧹" : "-"}</div>
                                <div className="p-1">

                                    {
                                        card.centralMechRoutine.action ?
                                            <>
                                                <div>⭐{card.centralMechRoutine.action?.gloryRequirement} {card.centralMechRoutine.action?.action.icon}{card.centralMechRoutine.action?.amount}</div>
                                                <p className="text-xs">{card.centralMechRoutine.action?.action.description}</p>
                                            </>
                                            : <p>-</p>
                                    }
                                    <h5>⬅️⬅️🤖 {card.centralMechRoutine.roamAmount}</h5>
                                </div>
                            </div>
                        </div>
                        <h1 className="flex-auto text-xs"> id: {card.id}</h1>
                    </div> :
                    <div className='flex h-80 w-64 p-3 m-1 border border-1 rounded bg-black items-center'>
                        <h1 className="text-sm">Click &quot;Next&quot; to draw your first card</h1>
                    </div>

            }
        </>

    )
}
