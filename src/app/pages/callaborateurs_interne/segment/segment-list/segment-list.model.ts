export interface Table {
  nomSegment: string;
  centerCoutSegment: string;
  nomSapRef: string;
  ps: string;
  rhSegment: string;
  chefSegment: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
