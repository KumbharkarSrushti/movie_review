import DeleteButton from "./Delete.js"
import VoteUpButton from "./LikeButton.js"
import VoteDownButton from "./DislikeButton.js"
const MovieCard =({movie, onVoteUp, onVoteDown,onDelete }) =>{
  
  return (
    <div className="Movie_Row_Movie">
       <div className="Image_Col">
            <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} height="360px" width="300px"/>       
       </div>
      
      <div className="Movie_data">
          <h1 className="white">{movie.title}</h1>
          <p className="white">{movie.release_date}<span> | {movie.genre}</span></p>
          <p className="white">{movie.overview}</p>
      </div>
      <div className="handlevote">
            <DeleteButton onClick={() => onVoteUp(movie.id)} />
            <span className="dot">{movie.votes || 0}</span>
            <VoteDownButton onClick={() => onVoteDown(movie.id)} />
            <VoteUpButton onClick={() => onDelete(movie.id)} />
      </div>
      
    </div>
  );
};

export default MovieCard;
