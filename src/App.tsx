import { useState } from "react";
import JokeComponent from "./components/JokeComponent";
import "./App.css";
import initialData from "./data/data.json";
import type { Joke } from "./types/types";

function App() {
  const [jokes, setJokes] = useState<Joke[]>(initialData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [editRating, setEditRating] = useState(1);

  const handleDelete = (id: number) => {
    setJokes(jokes.filter(joke => joke.id !== id));
  };

  const startEditing = (joke: Joke) => {
    setEditingId(joke.id);
    setEditText(joke.joke);
    setEditRating(joke.rating);
  };

  const handleEdit = () => {
    if (editingId === null) return;
    
    setJokes(jokes.map(joke => 
      joke.id === editingId 
        ? { ...joke, joke: editText, rating: editRating } 
        : joke
    ));
    setEditingId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...jokes.map(j => j.id), 0) + 1;
    const newJoke: Joke = {
      id: newId,
      joke: "New joke",
      rating: 3
    };
    setJokes([...jokes, newJoke]);
    startEditing(newJoke);
  };

  const handleRatingChange = (id: number, newRating: number) => {
    // Ensure rating stays within bounds (1-5)
    const clampedRating = Math.max(1, Math.min(5, newRating));
    
    setJokes(jokes.map(joke => 
      joke.id === id 
        ? { ...joke, rating: clampedRating } 
        : joke
    ));
  };

  return (
    <div className="app">
      <button onClick={handleAdd} className="add-button">Add New Joke</button>
      
      {editingId !== null && (
        <div className="edit-form">
          <textarea 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
          />
          <input 
            type="number" 
            min="1" 
            max="5" 
            value={editRating} 
            onChange={(e) => setEditRating(parseInt(e.target.value))} 
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setEditingId(null)}>Cancel</button>
        </div>
      )}

      <div className="jokes-container">
        {jokes.map((joke) => (
          <JokeComponent 
            key={joke.id} 
            joke={joke} 
            onDelete={handleDelete}
            onEdit={startEditing}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;