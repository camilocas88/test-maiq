import { Link } from './link';
import { Multimedia } from './multimedia';

export interface MoviesInterface {
    byline?: string
    critics_pick?: number
    date_updated?: string
    display_title?: string
    headline?: string
    link?: Link
    multimedia?: Multimedia
    opening_date?: string
    publication_date?: string
    summary_short?: string
}