import React, { createContext, useState } from 'react';

export const EditorasContext = createContext({});

export const EditorasProvider = ({ children }) => {
  const [editoras, setEditoras] = useState('');

  const saveEditoras = async (editoras) => {
    setEditoras(editoras)
  }

  return (
    <EditorasContext.Provider value={{
      editoras,
      saveEditoras
    }}>
      {children}
    </EditorasContext.Provider>
  );
};
