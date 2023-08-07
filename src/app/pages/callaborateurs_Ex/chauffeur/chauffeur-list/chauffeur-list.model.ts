// Table data
export interface Table {
  Prenom: string;
  Nom: string;
  Date_Naissance: string;
  Telephone: string;
  agence: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
