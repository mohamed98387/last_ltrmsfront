export interface Table {
  refChemin: string;
  refSap: string;
  nbKilometre: number;
  contributionEmploye: string;
  coutKm: number;
  pointArrive: string;
  agence: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
