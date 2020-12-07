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
//si hubiesen mas campos podemos enviarlos aqui directamente
//o enviar un object y dentro del object escribirlo -- despues de value
const insertAccount = (account, successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into accounts (account) values (?)", [account]);
      },
      (_t, error) => { //el guion bajo significa que son variables opcionales
        console.log("Error al insertar la cuenta");
        console.log(error);
      },
      (_t, _success) => {
        successFunc;
      }
    );
  };
  

  //Borrar de la base de datos la tabla
  //lo vamos hacer mediante una promesa
  const dropDatabaseTableAsync = async() => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table accounts");
        },
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.log("Error al eliminar la tabla de cuentas");
          reject(error);
        }
      );
    });
  };


  // Creacion de la tabla de cuentas
  const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists accounts (id_cuenta integer identity(1,1) primary key not null, nombre text, motivo text, comentario text, cantidad integer, fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP, estado integer)"
          );
        },
        (_t, Error) => {
          console.log("Error al momento de crear la tabla");
          console.log("error");
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };

  //Exportar las funciones
  export const databasele = {
    getAccount,
    insertAccount,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
  };

  /*
  //Ejemplo de como cargar informacion en un tabla al iniciar
  //aclarar que primero la crearia y despues la insertaria
  
  const setupNombreTablaAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
        tx.executeSql("insert into tabla (id, name) values (?,?)", [1, "Honduras"]) o con un arreglo , countriesList)
        })
        faltaria el tx error
         y el succes
    })
  }*/