export interface Table {
  refRegion: string;
  refSap: string;
  longitude: number;
  latitude: number;
  rayon: number;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
