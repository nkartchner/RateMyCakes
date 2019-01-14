export interface RatingModel {
    rating: number;
    comment: string;
}

export interface CakeModel {
    baker: string;
    image: string;
    ratings: [RatingModel];
}