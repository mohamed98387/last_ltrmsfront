// Table data
export interface Table {
  prenom: string;
  nom: string;
  dateNaissance: string;
  telephone: number;
  agence: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
