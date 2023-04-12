export type Raffle ={
    id?: number;
    name: string;
    quantity:number;
    description?: string;
    date: string;
    price: number;
  }
  
  export type RaffleCell ={
    id?: number;
    raffle_id: number;
    cell_number: number;
    selected: number;
    client_name?: string;
    price: number;
  }