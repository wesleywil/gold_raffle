import * as SQLite from "expo-sqlite";



export const DatabaseConnection = {
  getConnection:()=> SQLite.openDatabase("database.db")
}

var db:any = null

export default class DatabaseInit {
  constructor(){
    db = DatabaseConnection.getConnection()
    db.exec([{
      sql:'PRAGMA foreign_keys = ON;', args:[]
    }], false, ()=>
    console.log('Foreign keys turned on'));
    this.InitDb()
  }

  private InitDb(){
    var sql = [
      `DROP TABLE IF EXISTS raffles;`,
      `DROP TABLE IF EXISTS raffles_cells;`,

      `CREATE TABLE IF NOT EXISTS raffles(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        quantity INTEGER,
        description TEXT,
        date TEXT NOT NULL,
        price REAL NOT NULL
      );`,

      `CREATE TABLE IF NOT EXISTS raffles_cells(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        raffle_id INTEGER NOT NULL,
        cell_number INTEGER NOT NULL,
        selected INTEGER NOT NULL DEFAULT 0,
        client_name TEXT,
        price REAL NOT NULL,
        FOREIGN KEY(raffle_id) REFERENCES raffles(id)
      );`,
    ];

    db.transaction(
      (tx:any) => {
          for (var i = 0; i < sql.length; i++) {
              console.log("execute sql : " + sql[i]);
              tx.executeSql(sql[i]);
          }
      }, (error:any) => {
          console.log("error call back : " + JSON.stringify(error));
          console.log(error);
      }, () => {
          console.log("transaction complete call back ");
      }
  );
    
    
    
  }
}

    


  
  
  
  