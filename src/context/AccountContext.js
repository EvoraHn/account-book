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


      const addNewAccount = async ( nombre, motivo, comentario, cantidad) => {
        await database.insertAccounts( nombre, motivo, comentario, cantidad, refreshAccounts);
        //Actualizar la base con el refresh para que actualize en pantalla
        return refreshAccounts();
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