import React, { useState, useContext, createContext } from 'react';

const ColoursContext = createContext();

export const ColoursProvider = ({ children }) => {
	const [colourContext, setColourContext] = useState([]);

	return (
		<ColoursContext.Provider value={{ colourContext, setColourContext }}>
			{children}
		</ColoursContext.Provider>
	);
};

export const useColours = () => useContext(ColoursContext);
