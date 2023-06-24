import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/characterCard";
import { Context } from "../store/appContext";
// import { RegionsCard } from "../component/regionsCard";


export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <CharacterCard />
      {/* <RegionsCard /> */}
    </div>
  );
};
