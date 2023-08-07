export interface Table {
  Reference_chemin: string;
  Reference_SAP: string;
  Nb_km: string;
  Contribution_employe: string;
  Cout_Km: string;
  Point_arrivee: string;
  agence: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
