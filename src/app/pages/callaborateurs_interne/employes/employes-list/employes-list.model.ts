export interface Table {
  Matricule: string;
  Nom: string;
  Prenom: string;
  Contre_metre: string;
  Nom_groupe: string;
  PS: string;
  Numero_telephone: string;
  Centre_coûts: string;
  station: string;
  segment: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
