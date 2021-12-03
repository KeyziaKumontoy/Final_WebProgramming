import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MovieDetails from "../components/MovieDetails";

const Details = () => {

    // const { anime_name, fact_id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {

        fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/ + { anime_name } / { fact_id }')
            .then(response => response.json())
            .then(data => setMovie(data));
    })

    return (
        <>
            <Navigation />
            <MovieDetails movie={movie} />
            <Footer />
        </>
    );
}
export default Details;