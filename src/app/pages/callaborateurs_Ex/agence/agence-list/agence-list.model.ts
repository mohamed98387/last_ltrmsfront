export interface Table {
  nom: string;
  adresse: string;
  nom_entreprise: string;
  Email: string;
  Numero_telephone: string;
  Matricule_fiscal: string;
  Horaire_travail: string;
  Site_Internet: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
