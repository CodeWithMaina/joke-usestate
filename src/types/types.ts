export interface Joke {
    id: number;
    joke: string;
    rating: number;
}

export interface JokeComponentProps {
    joke: Joke
    onDelete: (id: number) => void;
    onEdit: (joke: Joke) => void;
    onRatingChange: (id: number, newRating: number) => void;
}