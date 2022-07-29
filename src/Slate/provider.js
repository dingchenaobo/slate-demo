import { createContext } from 'use-context-selector';

const context = createContext(null);

const Provider = ({ stores, children }) => (
  <context.Provider value={stores}>
    {children}
  </context.Provider>
);

export {
  context,
  Provider
};
