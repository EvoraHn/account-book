import React from "react";
import * as SQlite from "expo-sqlite";

//Crea y abre la base de datos
const db = SQlite.openDatabase("accountbook.db");


//Funcionalidades de la base de datos

//Obtener las cuentas del cliente
//Traer todas las tuplas que esten en una base y convertirlas en un arreglo
const getAccount = () => {
    //las peticiones se realizan mediante transacciones
    //se realizara mediante un callback(le pasamos una funcion como parametro de otra funcion)

    db.transaction(tx => {
        //Lo que vamos a ejecutar un sql
        tx.executeSql(
        "select * from accounts",
        [],
        (_, { rows: { _array } }) => {
            setNotesFunc(_array);
          },
          (_t, error) => {
            console.log("Error al momento de obtener las notas");
            console.log(error);
          },
          (_t, _success) => {
            console.log("Notas obtenidas");
          }
        );
    });
};

// Insertar Cuentas
const insertAccount = (account, successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into accounts (account) values (?)", [account]);
      },
      (_t, error) => {
        console.log("Error al insertar la cuenta");
        console.log(error);
      },
      (_t, _success) => {
        successFunc;
      }
    );
  };
  