import { BasicMovie } from "./basicMovie.interface";
export interface MovieProps {
    movie: Movie
}
export interface Movie  extends BasicMovie{
    belongs_to_collection: null;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    imdb_id:               string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}
