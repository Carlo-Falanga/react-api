import { useEffect, useState } from "react";

export default function AppMain() {
  const url_actresses_api = "https://lanciweb.github.io/demo/api/actresses/";
  const url_actors_api = "https://lanciweb.github.io/demo/api/actors/";

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  function getActresses() {
    fetch(url_actresses_api)
      .then((res) => res.json())
      .then((data) => {
        setActresses(data);
      });
  }

  function getActors() {
    fetch(url_actors_api)
      .then((res) => res.json())
      .then((data) => {
        setActors(data);
      });
  }

  useEffect(getActresses, []);
  useEffect(getActors, []);

  return (
    <main>
      <section className="actresses_cards my-5 py-5">
        <div className="container">
          <h2 className="text-bg-dark d-inline-block mb-3 px-4 py-2 rounded-2">
            Actresses
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {actresses.map((actress) => (
              <div className="col" key={actress.id}>
                <div className="card h-100">
                  <img src={actress.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{actress.name}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {actress.birth_year}, {actress.nationality}
                      </small>
                    </p>
                    <p className="card-text fst-italic">{actress.biography}</p>
                    <p className="card-text text-start-bottom">
                      <span className="fw-medium">Best Movies:</span> <br />{" "}
                      {actress.most_famous_movies}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="actors_cards">
        <div className="container">
          <h2 className="text-bg-dark d-inline-block mb-3 px-4 py-2 rounded-2">
            Actors
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {actors.map((actor) => (
              <div className="col" key={actor.id}>
                <div className="card h-100">
                  <img src={actor.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{actor.name}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {actor.birth_year}, {actor.nationality}
                      </small>
                    </p>
                    <p className="card-text fst-italic">{actor.biography}</p>
                    <p className="card-text text-start-bottom">
                      <span className="fw-medium">Best Movies:</span> <br />{" "}
                      {actor.known_for}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
