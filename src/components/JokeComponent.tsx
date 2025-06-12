import type { JokeComponentProps } from "../types/types";
import "./JokeComponent.css"

const JokeComponent = ({ joke, onDelete, onEdit }: JokeComponentProps) => {
  return (
    <div className="joke-card">
      <p>{joke.joke}</p> 
      <p>Rating: {"⭐".repeat(joke.rating)}</p>
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