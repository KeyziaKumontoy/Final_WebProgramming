import React from "react";


const MovieDetails = (props) => {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div classNameName="row gx-4 gx-lg-5 align-items-center">
                    <div classNameName="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={props.movie.anime_img} alt={props.movie.anime_name} /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">{props.movie.anime_name}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">{props.movie.anime_name}</span>
                            <span>{props.movie.anime_name}</span>
                        </div>
                        <p className="lead">{props.movie.fact}</p>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}

export default MovieDetails;