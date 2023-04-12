import {enablePromise, openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';
import { Raffle, RaffleCell } from './models/models';

enablePromise(true);

export const getDBConnection = async()=>{
    return openDatabase({name:'gold_raffle.db', location:'default'});
}

export const createTables = async (db: SQLiteDatabase) => {
    // create tables if not exists
    const query = `
    CREATE TABLE raffles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        quantity:INTEGER,
        description TEXT,
        date TEXT NOT NULL,
        price REAL NOT NULL
      );
  
      CREATE TABLE raffles_cells (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        raffle_id INTEGER NOT NULL,
        cell_number INTEGER NOT NULL,
        selected INTEGER NOT NULL DEFAULT 0,
        client_name TEXT,
        price REAL NOT NULL,
        FOREIGN KEY(raffle_id) REFERENCES raffles(id)
      );
    `;
  
    await db.executeSql(query);
  };

  export const getAllRaffles = async(db:SQLiteDatabase):Promise<Raffle[]>=>{
    try{
        const raffles : Raffle[] = [];
        const results = await db.executeSql("SELECT * FROM raffles");
        results.forEach(result => {
            for(let index = 0; index < result.rows.length; index++){
                raffles.push(result.rows.item(index))
            }
        });
        return raffles;
    }catch(error){
        console.log(error);
        throw Error('Failed to get raffles!!!');
    }
  }

  export const getAllRafflesCells = async(db:SQLiteDatabase, raffle_id:number):Promise<RaffleCell[]>=>{
    try{
        const raffle_cells : RaffleCell[] = [];
        const results = await db.executeSql(`SELECT * FROM raffles_cells WHERE raffle_id=${raffle_id}`);
        results.forEach(result => {
            for(let index = 0; index < result.rows.length; index++){
                raffle_cells.push(result.rows.item(index))
            }
        });
        return raffle_cells;
    }catch(error){
        console.log(error);
        throw Error('Failed to get raffle_cells!!!');
    }
  }

  export const createRaffle = async(db: SQLiteDatabase, raffle: Raffle): Promise<Raffle> => {
    try {
      // Insert raffle record
      const insertQuery = `INSERT INTO raffles VALUES (${raffle.id}, '${raffle.name}', ${raffle.quantity}, '${raffle.description}', '${raffle.date}', ${raffle.price})`;
      await db.executeSql(insertQuery);
  
      // Insert raffle_cells records
      const raffleCells: RaffleCell[] = [];
      for (let i = 1; i <= raffle.quantity; i++) {
        const raffleCell: RaffleCell = {
          raffle_id: raffle.id!,
          cell_number: i,
          selected: 0,
          client_name: "",
          price: raffle.price,
        };
        raffleCells.push(raffleCell);
      }
      const raffleCellsInsertQuery = `INSERT INTO raffles_cells (raffle_id, cell_number, selected, client_name, price) VALUES ${raffleCells.map(cell => `(${cell.raffle_id}, ${cell.cell_number}, ${cell.selected}, ${cell.client_name ? `'${cell.client_name}'` : 'NULL'}, ${cell.price})`).join(',')}`;
      await db.executeSql(raffleCellsInsertQuery);
  
      return raffle;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to create raffle!');
    }
  };

  export const updateRaffleCell = async (db: SQLiteDatabase, cell: RaffleCell): Promise<void> => {
    try {
      const updateQuery = `UPDATE raffles_cells SET selected = ${1}, client_name = '${cell.client_name}' WHERE id = ${cell.id}`;
      await db.executeSql(updateQuery);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to update raffle cell!');
    }
  };
  
  
  