import React, { createContext, useState, useEffect } from 'react';

export const StaffContext = createContext();

const WorkersProvider = ({ children }) => {
  const [workers, setStaff] = useState([]);
  const [favoriteWorkers, setFavoriteWorkers] = useState(() => {
    const savedFavorites = localStorage.getItem('favoriteWorkers');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteWorkers', JSON.stringify(favoriteWorkers));
  }, [favoriteWorkers]);

  const addToFavorite = (member) => {
    setFavoriteWorkers((prevFavorites) => [...prevFavorites, member]);
  };

  const removeFromFavorite = (email) => {
    setFavoriteWorkers((prevFavorites) =>
      prevFavorites.filter((mem) => mem.email !== email)
    );
  };

  return (
    <StaffContext.Provider value={{ workers, setStaff, favoriteWorkers, addToFavorite, removeFromFavorite }}>
      {children}
    </StaffContext.Provider>
  );
};

export default WorkersProvider;
