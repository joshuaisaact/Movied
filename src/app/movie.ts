export interface Movie {
  original_title: string;
  poster_path: string;
  id: number;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface MovieDetails {
  original_title: string;
  overview: string;
  production_companies: ProductionCompany[];
  genres: Array<{ id: number; name: string }>;
  poster_path: string;
  popularity: number;
  tagline: string;
}
