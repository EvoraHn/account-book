import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const AccountsContext = createContext({});

export const AccountsContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { accounts: initialAccounts, children } = props;

  // Almacenar los valores en el estado
  const [accounts, setAccounts] = useState(initialAccounts);

    // Cargar u obtener las cuentas
    useEffect(() => {
        refreshAccounts();
      }, []);
    
      const refreshAccounts = () => {
        return database.getAccounts(setAccounts);
      };


      const addNewAccount = (id, nombre, motivo, comentario, cantidad, fecha, estado, successFunc) => {
        return database.insertAccounts(id, nombre, motivo, comentario, cantidad, fecha, estado, refreshAccounts);
      };

      const dropAccount = () => {
        return database.dropDatabaseTableAsync();
      }
    
      // Crear el objeto de contexto
      const accountsContext = {
        accounts,
        addNewAccount,
        dropAccount
      };

      // Pasar los valores al proveedor y retornarlo
    return (
    <AccountsContext.Provider value={accountsContext}>
      {children}
    </AccountsContext.Provider>
    );
};