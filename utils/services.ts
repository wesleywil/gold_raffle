import { Raffle, RaffleCell } from "./models/models";
import { DatabaseConnection } from "./database";


const db = DatabaseConnection.getConnection();

export const createRaffle = async (raffle: Raffle): Promise<Raffle> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `INSERT INTO raffles (name, quantity, description, date, price) VALUES ('${raffle.name}', ${raffle.quantity}, '${raffle.description}', '${raffle.date}', ${raffle.price})`,
        [],
        async (tx: any, result: any) => {
          const { insertId } = result;
          const raffleCells: RaffleCell[] = [];
          for (let i = 1; i <= raffle.quantity; i++) {
            const raffleCell: RaffleCell = {
              raffle_id: insertId,
              cell_number: i,
              selected: 0,
              client_name: "",
              price: raffle.price,
            };
            raffleCells.push(raffleCell);
          }
          const raffleCellsInsertQuery = `INSERT INTO raffles_cells (raffle_id, cell_number, selected, client_name, price) VALUES ${raffleCells
            .map(
              (cell) =>
                `(${cell.raffle_id}, ${cell.cell_number}, ${cell.selected}, ${
                  cell.client_name ? `'${cell.client_name}'` : 'NULL'
                }, ${cell.price})`
            )
            .join(',')}`;
          await tx.executeSql(raffleCellsInsertQuery);
          const createdRaffle = {
            ...raffle,
            id: insertId,
          };
          resolve(createdRaffle);
        },
        (error: any) => reject(error)
      );
    });
  });
};

export const getAllRaffles = (): Promise<unknown> => {
  return new Promise((resolve, reject) => db.transaction(tx => {
    tx.executeSql(`select * from raffles`, [], (_, { rows }) => {
        resolve(rows)
    }), (sqlError:any) => {
        console.log(sqlError);
    }}, (txError) => {
    console.log(txError);
}))
};

export const getAllRafflesCells = (raffle_id:number): Promise<unknown> => {
  return new Promise((resolve, reject) => db.transaction(tx => {
    tx.executeSql(`select * from raffles_cells WHERE raffle_id = ${raffle_id}`, [], (_, { rows }) => {
        resolve(rows)
    }), (sqlError:any) => {
        console.log(sqlError);
    }}, (txError) => {
    console.log(txError);
}))
};

export const updateRaffle = (data:Raffle):Promise<unknown>=>{
  const { name, date, price, id} = data;
  return new Promise((resolve, reject)=> db.transaction(tx=>{
    tx.executeSql(`UPDATE raffles SET name = ?, date = ?, price = ? WHERE id = ?`,[name, date, price, id!],(_, {rowsAffected })=>{
      resolve(rowsAffected )
    }),(sqlError:any)=>{
      console.log(sqlError);
    }
  }, (txError)=>{
    console.log(txError)
  }))
}

export const updateSelectedRaffleCell = (client_name:string, id:number):Promise<unknown>=>{
  return new Promise((resolve, reject)=> db.transaction(tx=>{
    tx.executeSql(`UPDATE raffles_cells SET selected = 1, client_name = ? WHERE id = ?`,[client_name,id],(_, {rowsAffected })=>{
      resolve(rowsAffected )
    }),(sqlError:any)=>{
      console.log(sqlError);
    }
  }, (txError)=>{
    console.log(txError)
  }))
}

export const deleteRaffle = (id:number):Promise<unknown>=>{
  return new Promise((resolve, reject)=> db.transaction(tx=>{
    tx.executeSql(`DELETE FROM raffles WHERE id=?`,[id],(_, {rowsAffected })=>{
      resolve(rowsAffected )
    }),(sqlError:any)=>{
      console.log(sqlError);
    }
  }, (txError)=>{
    console.log(txError)
  }))
}

export const deleteRaffle_cells = (id:number):Promise<unknown>=>{
  return new Promise((resolve, reject)=> db.transaction(tx=>{
    tx.executeSql(`DELETE FROM raffles_cells WHERE raffle_id=?`,[id],(_, {rowsAffected })=>{
      resolve(rowsAffected )
    }),(sqlError:any)=>{
      console.log(sqlError);
    }
  }, (txError)=>{
    console.log(txError)
  }))
}





// export const getAllRaffles = async(db:SQLiteDatabase):Promise<Raffle[]>=>{
//     try{
//         const raffles : Raffle[] = [];
//         const results = await db.executeSql("SELECT * FROM raffles");
//         results.forEach(result => {
//             for(let index = 0; index < result.rows.length; index++){
//                 raffles.push(result.rows.item(index))
//             }
//         });
//         return raffles;
//     }catch(error){
//         console.log(error);
//         throw Error('Failed to get raffles!!!');
//     }
//   }

//   export const getAllRafflesCells = async(db:SQLiteDatabase, raffle_id:number):Promise<RaffleCell[]>=>{
//     try{
//         const raffle_cells : RaffleCell[] = [];
//         const results = await db.executeSql(`SELECT * FROM raffles_cells WHERE raffle_id=${raffle_id}`);
//         results.forEach(result => {
//             for(let index = 0; index < result.rows.length; index++){
//                 raffle_cells.push(result.rows.item(index))
//             }
//         });
//         return raffle_cells;
//     }catch(error){
//         console.log(error);
//         throw Error('Failed to get raffle_cells!!!');
//     }
//   }

//   export const createRaffle = async(db: SQLiteDatabase, raffle: Raffle): Promise<Raffle> => {
//     try {
//       // Insert raffle record
//       const insertQuery = `INSERT INTO raffles VALUES (${raffle.id}, '${raffle.name}', ${raffle.quantity}, '${raffle.description}', '${raffle.date}', ${raffle.price})`;
//       await db.executeSql(insertQuery);
  
//       // Insert raffle_cells records
//       const raffleCells: RaffleCell[] = [];
//       for (let i = 1; i <= raffle.quantity; i++) {
//         const raffleCell: RaffleCell = {
//           raffle_id: raffle.id!,
//           cell_number: i,
//           selected: 0,
//           client_name: "",
//           price: raffle.price,
//         };
//         raffleCells.push(raffleCell);
//       }
//       const raffleCellsInsertQuery = `INSERT INTO raffles_cells (raffle_id, cell_number, selected, client_name, price) VALUES ${raffleCells.map(cell => `(${cell.raffle_id}, ${cell.cell_number}, ${cell.selected}, ${cell.client_name ? `'${cell.client_name}'` : 'NULL'}, ${cell.price})`).join(',')}`;
//       await db.executeSql(raffleCellsInsertQuery);
  
//       return raffle;
//     } catch (error) {
//       console.log(error);
//       throw new Error('Failed to create raffle!');
//     }
//   };

//   export const updateRaffleCell = async (db: SQLiteDatabase, cell: RaffleCell): Promise<void> => {
//     try {
//       const updateQuery = `UPDATE raffles_cells SET selected = ${1}, client_name = '${cell.client_name}' WHERE id = ${cell.id}`;
//       await db.executeSql(updateQuery);
//     } catch (error) {
//       console.log(error);
//       throw new Error('Failed to update raffle cell!');
//     }
//   };