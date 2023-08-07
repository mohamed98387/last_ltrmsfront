// Table data
export interface Table {
  permissionName: string;
  description: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
