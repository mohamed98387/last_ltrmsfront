export interface Table {
  matricule: Number;
  nom: string;
  prenom: string;
  contreMetre: string;
  nomGroupe: string;
  ps: string;
  telephone: string;
  centreCout: string;
  station: string;
  segment: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
