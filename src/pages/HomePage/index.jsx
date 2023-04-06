import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useColours } from '../../contexts';

function Home() {
    const {colourContext, setColourContext} = useColours()

    useEffect(() => {
        setColourContext(colourContext)
    }, [])

    return(
        colourContext.map((colour) => {
            return(
                <div style={{backgroundColor: '#' + colour}} key={colour}>
                    <Link to={`/colours/${colour}`}>
                        <h1 className='colour-link'>{colour}</h1>
                    </Link>
                </div>
            )
        }
    )
)}

export default Home;
