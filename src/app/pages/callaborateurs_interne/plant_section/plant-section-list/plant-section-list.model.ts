export interface Table {
  nom: string;
  Description: string;
  Emplacement: string;
  PS_manager: string;
  responsable_RH: string;
  Organisation: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
