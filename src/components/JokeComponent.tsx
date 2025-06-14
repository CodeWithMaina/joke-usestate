import type { JokeComponentProps } from "../types/types";
import "./JokeComponent.css"

const JokeComponent = ({ joke, onDelete, onEdit, onRatingChange }: JokeComponentProps) => {
  const handleRatingIncrease = () => {
    if (joke.rating < 5) {
      onRatingChange(joke.id, joke.rating + 1);
    }
  };

  const handleRatingDecrease = () => {
    if (joke.rating > 1) {
      onRatingChange(joke.id, joke.rating - 1);
    }
  };

  return (
    <div className="joke-card">
      <p>{joke.joke}</p> 
      <div className="rating-container">
        <button 
          className="rating-btn" 
          onClick={handleRatingDecrease}
          disabled={joke.rating <= 1}
        >
          -
        </button>
        <span className="rating-display">
          {"⭐".repeat(joke.rating)} ({joke.rating}/5)
        </span>
        <button 
          className="rating-btn" 
          onClick={handleRatingIncrease}
          disabled={joke.rating >= 5}
        >
          +
        </button>
      </div>
      <div className="joke-buttons">
        <button className="edit" onClick={() => onEdit(joke)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(joke.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default JokeComponent;