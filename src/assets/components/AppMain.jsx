import { useEffect, useState } from "react";

export default function AppMain() {
  const url_actresses_api = "https://lanciweb.github.io/demo/api/actresses/";
  const url_actors_api = "https://lanciweb.github.io/demo/api/actors/";

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  const actressesAndActors = [...actresses, ...actors]
  

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
            Actors & Actresses
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {actressesAndActors.map((actressAndActor, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={actressAndActor.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title m-0">{actressAndActor.name}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {actressAndActor.birth_year}, {actressAndActor.nationality}
                      </small>
                    </p>
                    <p className="card-text fst-italic">{actressAndActor.biography}</p>
                    <p className="card-text"><span className="fw-medium">Rewards:</span> <br />{actressAndActor.awards}</p>
                    <p className="card-text">
                      <span className="fw-medium">Known for:</span> <br />
                      {(actressAndActor.most_famous_movies || actressAndActor.known_for).join(', ')}
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
