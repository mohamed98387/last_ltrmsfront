export interface Table {
  nom: string;
  center_cout: string;
  nom_SAPRef: string;
  PS: string;
  RH_Segment: string;
  Chef_Segment: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
