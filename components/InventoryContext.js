import React, { useState, useContext } from 'react';

const InventoryContext = React.createContext();
const UpdateInventoryContext = React.createContext();

export function useInventory() {
  return useContext(InventoryContext);
}

export function useUpdateInventory() {
  return useContext(UpdateInventoryContext);
}

export function InventoryProvider({ children }) {
  let [inventory, setInventory] = useState();

  function updateInventory(prod) {
    console.log(prod);
    return setInventory(prod);
  }
  return (
    <InventoryContext.Provider value={inventory}>
      <UpdateInventoryContext.Provider value={updateInventory}>
        {children}
      </UpdateInventoryContext.Provider>
    </InventoryContext.Provider>
  );
}
