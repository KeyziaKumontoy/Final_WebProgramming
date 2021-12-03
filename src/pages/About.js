import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
    return (

        <>
            <Navigation />
            <div className="container my-5">
                <h1>About this Application</h1>
                <p className="fs-5">Ini adalah aplikasi berisi fakta tentang film-film Anime atau film animasi Jepang </p>
                <p className="fs-5 "> <i>Developer </i>: Keyzia Eunike Sophia Kumontoy </p>
                <p className="fs-5">Jurusan: Sistem Informasi</p>
                <p className="fs-5 "> NIM : 105011910070</p>

            </div>


            <Footer />
        </>
    )
}

export default About;