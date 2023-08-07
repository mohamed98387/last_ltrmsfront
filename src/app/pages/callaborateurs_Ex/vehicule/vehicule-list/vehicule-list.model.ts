// Table data
export interface Table {
  type_vehicule: string;
  Num_serie: string;
  Date_mise_route: string;
  nom_reference: string;
  capacite: string;
  agence: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
