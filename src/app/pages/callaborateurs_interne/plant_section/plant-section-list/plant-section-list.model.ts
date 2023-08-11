export interface Table {
  nomPs: string;
  descriptionPS: string;
  emplacementPS: string;
  psManager: string;
  responsableRH: string;
  organisation: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
