import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
export const RegionsCard = (props) => {
  const { actions, store } = useContext(Context);
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const repsonce = await fetch(
        process.env.BACKEND_URL + "/Westeros(Regions)"
      );
      const data = await res.json();
      setRegions(data);
      actions.setItem(data);
    }
    fetchData();
  }, []);
  // useeffect above is used to fetch data from db.json file that i made
  useEffect(() => {
    if (
      store.favorites.find((x) => {
        for (let i in x) {
          if (regions[i] && regions[i].name === x[i].name) {
            return true;
          }
        }
      })
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [store.favorites]);
  // this useeffect is used to save favorites
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.name}</p>
          <p>{props.ruled_by}</p>
          <p>{props.climate}</p>
          <p>{props.size}</p>
          <p>{props.population}</p>
        </div>
        <div className="cardBottom">
          <Link
            to={`/regions_description/` + regions.id}
            className="btn btn-light text-dark"
          >
            Learn More!
          </Link>
          <button
            onClick={() => {
              actions.addFavorite(regions);
            }}
            className="favorites-button"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            ❤️️
          </button>
        </div>
      </div>
    </div>
  );
};
