import { useEffect, useState } from "react";

export default function AppMain() {
  const url_api = "https://lanciweb.github.io/demo/api/actresses/";

  const [actresses, setActresses] = useState([]);

  function getActresses() {
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        setActresses(data);
      });
  }

  useEffect(getActresses, []);

  return (
    <main>
      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
            {actresses.map((actress) => (
              <div className="col" key={actress.id}>
                <div className="card">
                  <img src={actress.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{actress.name}</h5>
                    <p className="card-text"><small className="text-body-secondary">{actress.birth_year} {actress.nationality}</small></p>
                    <p className="card-text">
                      {actress.biography}
                    </p>
                    <p className="card-text">Best Movies: <br/> {actress.most_famous_movies}</p>
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
