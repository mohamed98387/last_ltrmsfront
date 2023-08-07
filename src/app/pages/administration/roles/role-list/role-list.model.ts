// Table data
export interface Table {
  roleName: string;
  description: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
