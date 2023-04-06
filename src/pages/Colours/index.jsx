import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Colours() {
    useEffect(() => {
        fetchColours()
    }, [])

    const [colours, setColours] = useState([])
    const [myColours, setMyColours] = useState([]);

    const fetchColours = async () => {
        try {
            const response = await fetch('https://x-colors.yurace.pro/api/random?number=10')
            const colourData = await response.json()
            setColours(colourData)
        } catch (error) {
            console.log(error)
        }
    }

    const addToMyColours = (element) => {
        const colourToAdd = element
        setMyColours([...myColours, colourToAdd]);
      };

    return (
        <div>
                {
                    colours.map(colour => {
                        return (
                            <div key={colour.hex} className="colour-div" style={{backgroundColor: colour.hex}}>
                                <Link to={`/colours/${colour.hex.slice(1)}`}>
                                    <h2 className='colour-link'>{colour.hex}</h2>
                                </Link>
                                <button onClick={() => addToMyColours(colour.hex.slice(1))}>Add Colour</button>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Colours
