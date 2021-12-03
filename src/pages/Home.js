import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movies from "../components/Movie";

const Home = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Movies />
            <Footer />
        </>
    );
}
export default Home;