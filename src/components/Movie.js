import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItems";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        console.log(movies);
        fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/')
            .then(response => response.json())
            .then(data => setMovies(data.data));
    })

    const filteredAnime = movies.filter(movie => {
        return movie.anime_name.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2> Search </h2>
                <form className="container px-4 px-lg-5 my-5">
                    <input type="text" className="form-control" onChange={e => setSearch(e.target.value)} />
                </form>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {filteredAnime.map(movie => <MovieItem key={movie.anime_id} movie={movie} />)}
                </div>
            </div>
        </section>
    );
}

export default Movies;