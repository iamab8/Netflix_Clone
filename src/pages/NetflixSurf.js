import React from "react";
import Row from "../components/Row/Row";
import api from "../api/api";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";

const NetflixSurf = () => {
  return (
    <div>
      <Nav />

      <Banner />

      <Row title="Trending Now" fetchUrl={api.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={api.fetchDocumentaries} />
    </div>
  );
};

export default NetflixSurf;
