import React from "react";
import * as SQlite from "expo-sqlite";

//Crea y abre la base de datos
const db = SQlite.openDatabase("accounstbook.db");


//Extraer la fecha actual
let getDate = new Date();
getDate = getDate.getDate()+"-"+(getDate.getMonth()+1)+"-"+getDate.getFullYear();
//Funcionalidades de la base de datos

//Obtener las cuentas del cliente
//Traer todas las tuplas que esten en una base y convertirlas en un arreglo
const getAccounts = (setAccountsFunc) => {
    //las peticiones se realizan mediante transacciones
    //se realizara mediante un callback(le pasamos una funcion como parametro de otra funcion)

    db.transaction(tx => {
        //Lo que vamos a ejecutar un sql
        tx.executeSql(
        "select * from accounts",
        [],
        (_, { rows: { _array } }) => {
            setAccountsFunc(_array);
          },
          (_t, error) => {
            console.log("Error al momento de obtener las Cuentas");
            console.log(error);
          },
          (_t, _success) => {
            console.log("Cuentas obtenidas");
          }
        );
    });
};

// Insertar Cuentas 
//si hubiesen mas campos podemos enviarlos aqui directamente
//o enviar un object y dentro del object escribirlo -- despues de value
const insertAccounts = (nombre, motivo, comentario, cantidad, fecha, estado, successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into accounts (nombre, motivo, comentario, cantidad, fecha, estado, status) values (?,?,?,?,?,?,?)", [
          nombre,
          motivo,
          comentario,
          cantidad,
          getDate,
          "Deben",
          "NUEVA"
        ]);
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
            "create table if not exists accounts (id integer primary key autoincrement, nombre text not null, motivo text not null, comentario text not null, cantidad integer, fecha text not null, estado text not null, status)"
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


  //Agregar una tabla por defecto
  const setupAccountsAsync = async() =>{
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("insert into accounts (id, nombre, motivo, comentario, cantidad, fecha, estado, status) values (?,?,?,?,?,?,?,?)", [
            1,
            "Juan",
            "venta",
            "Vendi celular",
            1000,
            "11-12-2020",
            "deben",
            "NUEVA",
          ]);
        },
        (_t, error) => {
          console.log("Error al insertar los valores por defecto");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };

  //Exportar las funciones
  export const database = {
    getAccounts,
    insertAccounts,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
    setupAccountsAsync,
    
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