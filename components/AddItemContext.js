import React, { useContext, useState } from 'react';
const AddItemContext = React.createContext();
const TotalUpdateContext = React.createContext();
export function useAddItem() {
  return useContext(AddItemContext);
}
export function useAddItemUpdate() {
  return useContext(TotalUpdateContext);
}
export function AddItemProvider({ children }) {
  let [addItem, setAddItem] = useState();

  function addItemUpdate(value) {
    setAddItem(value);
  }
  return (
    <AddItemContext.Provider value={addItem}>
      <TotalUpdateContext.Provider value={addItemUpdate}>
        {children}
      </TotalUpdateContext.Provider>
    </AddItemContext.Provider>
  );
}
