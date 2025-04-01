import { createContext, useState, useContext } from "react";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
    const [listings, setListings] = useState([]);

    // Function to add a new listing
    const addListing = (newListing) => {
        setListings((prevListings) => [...prevListings, newListing]);
    };

    return (
        <ListingsContext.Provider value={{ listings, addListing }}>
            {children}
        </ListingsContext.Provider>
    );
};

// Custom hook to use the ListingsContext
export const useListings = () => {
    return useContext(ListingsContext);
};








// import { createContext, useContext, useEffect, useState } from 'react';
// const MyContext = createContext();
// export const UseData = () => {
//   return useContext(MyContext);
// }
// export const MyProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [connected, setConnected] = useState(false);
//   useEffect(() => {
//     // Connect to the Socket.io server
  
    
//   }, []);
//   const test = "pokemon"
//   const value = {
//     test
//   };
//   return (
//     <MyContext.Provider value={value}>
//       {children}
//     </MyContext.Provider>
//   );
// };