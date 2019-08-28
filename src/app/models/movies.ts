import { Link } from "./link";
import { MultimediaInterface } from "./multimedia";

export interface ReviewsInterface {
    titulo?: string,
    critic?: string,
    summary_short?: string,
    publication_date?: string,
    link: Link,
    multimedia: MultimediaInterface
}