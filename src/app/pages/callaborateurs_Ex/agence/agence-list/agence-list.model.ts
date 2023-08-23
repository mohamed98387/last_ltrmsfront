export interface Table {
  nom: string;
  adresse: string;
  nomEntreprise: string;
  email: string;
  numeroTelephone: number;
  matriculeFiscal: string;
  horaireTravail: string;
  siteInternet: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
