import { ExpeditionsAutomaCard } from "@/models/Expeditions/ExpeditionsAutomaCard"

type AutomaCardDisplayProps = {
    card?: ExpeditionsAutomaCard
}
export default function AutomaCardDisplay({ card }: AutomaCardDisplayProps) {
    return (
        <>
            {
                card ?
                    <div className='w-96 p-2 m-1 border border-1 h-96 rounded bg-black h-full'>
                        <div className="border border-1">

                        <h2 className="flex justify-center ">{card.advancesTrack ? "🟦➡️" : "-"}</h2>
                        <h2 className="flex justify-center ">{card.advancesTrack ? "Advance Track" : "-"}</h2>
                        </div>
                        <div className="h-max">
                            <div className="grid grid-cols-2 divide-x h-auto">
                                <div>{card.northMechRoutine.performsSwipe ? "🧹" : "-"}</div>
                                <div className="p-1">
                                    <div>North</div>
                                    {
                                        card.northMechRoutine.action ? <h3>{card.northMechRoutine.action?.action}</h3> : <p>-</p>
                                    }
                                    <h3>🤖➡️➡️ {card.centralMechRoutine.roamAmount}</h3>
                                </div>
                            </div>

                            <hr className='mx-2'></hr>
                            <div className="grid grid-cols-2 divide-x h-auto">
                                <div>{card.centralMechRoutine.performsSwipe ? "🧹" : "-"}</div>
                                <div className="p-1">
                                    <div>Central</div>
                                    {
                                        card.centralMechRoutine.action ? <h3>{card.centralMechRoutine.action?.action}</h3> : <p>-</p>
                                    }
                                    <h5>⬅️⬅️🤖 {card.northMechRoutine.roamAmount}</h5>
                                </div>
                            </div>
                        </div>
                        <h1 className="h-1/6"> Card ID: {card.id}</h1>
                    </div> :
                    <div className='w-96 p-2 m-1 border border-1 h-96 rounded bg-black'>
                        <h1>Click "Next" to draw your first card</h1>
                    </div>

            }
        </>

    )
}
