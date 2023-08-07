export interface Table {
  Reference_Region: string;
  Ref_SAP: string;
  Longitude: string;
  Latitude: string;
  Rayon: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
