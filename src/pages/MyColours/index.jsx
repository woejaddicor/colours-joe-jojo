import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useColours } from '../../contexts';

function MyColours() {
    const {colourContext, setColourContext} = useColours()

    console.log(colourContext)
    
}

export default MyColours;
