
import React, { useEffect, useState } from "react";
import { database } from "../components/db";


const useDatabase = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  
    const loadDatabase = async () => {
      try {

         await database.setupDatabaseTableAsync(); // Creacion de la tabla de cuentas
        // await database.setupAccountsAsync(); // Tabla por defecto
        // await database.dropDatabaseTableAsync(); //Borrar de la base de datos la tabla
              
  
        // Finaliza la carga de la DB
        setIsLoadingComplete(true);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      loadDatabase();
    }, []);
  
    return isLoadingComplete;
  };
  
  export default useDatabase;