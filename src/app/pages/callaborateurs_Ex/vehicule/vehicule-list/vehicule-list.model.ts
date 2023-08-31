// Table data
export interface Table {
  typeVehicule: string;
  numSerie: string;
  date: string;
  reference: string;
  capacite: string;
  agence: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
