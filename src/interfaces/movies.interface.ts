import { BasicMovie } from "./basicMovie.interface";

export interface Movies {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result extends BasicMovie{
    genre_ids:         number[];

}
