import React from "react";


const MovieRecommended = (props) => {
    return (
        <div class="container px-4 px-lg-5 mt-5">
            <h2 class="fw-bolder mb-4">Rekomendasi Komik untuk Kamu</h2>
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                    <div class="card h-100">

                        <img className="card-img-top" src={props.movie.anime_img} alt={props.movie.anime_name} />

                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 className="fw-bolder">{props.movie.anime_name}</h5>
                                {props.movie.anime_id}


                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default MovieRecommended;