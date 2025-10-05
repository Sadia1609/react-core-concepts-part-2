import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)

    const handlesingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }

    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updateRuns);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>You scored: 50</p>
            }

            <h1>Score: {runs}</h1>

            <button onClick={handlesingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button  onClick={handleSix}>six</button>
        </div>
    )
}