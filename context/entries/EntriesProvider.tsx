import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente: Id eu incididunt id incididunt magna.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En progreso: Consequat adipisicing excepteur incididunt eiusmod duis aliqua.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Finalizado: Voluptate sit occaecat dolor tempor non sunt laborum do irure non irure.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = ( description: string ) => {

    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending"
    }

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
  }

  const updateEntry = ( entry: Entry ) => {
    dispatch({ type: '[Entry] Entry-Updated', payload: entry });
  }

  return (
    <EntriesContext.Provider value={{
        ...state,

        //methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
