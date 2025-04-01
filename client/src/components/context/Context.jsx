import { createContext, useContext, useEffect, useState } from 'react';
const MyContext = createContext();
export const UseData = () => {
  return useContext(MyContext);
}
export const MyProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [connected, setConnected] = useState(false);
  useEffect(() => {
    // Connect to the Socket.io server
  
    
  }, []);
  const test = "pokemon"
  const value = {
    test
  };
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};