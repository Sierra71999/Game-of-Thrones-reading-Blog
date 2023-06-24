import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from '../store/appContext.js';
import { Link } from "react-router-dom";
export const CharacterCard = (props) => {
    const { actions, store } = useContext(Context);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
       async function fetchData() {
        const repsonce = await fetch(process.env.BACKEND_URL + "/characters");
        const data = await res.json();
            setCharacters(data);
            actions.setItem(data)
       }
       fetchData();
    },[]);
    // useeffect above is used to fetch data from db.json file that i made 
    useEffect(() => {
        if (
            store.favorites.find((x) => {
                for (let i in x) {
                    if (characters[i] && characters[i].name === x[i].name) {
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
                <p>{props.gender}</p>
                <p>{props.family}</p>
                <p>{props.spouse}</p>
                <p>{props.children}</p>
                <p>{props.origin}</p>
                <p>{props.culture}</p>
                <p>{props.siblings}</p>
                <p>{props.religion}</p>
                <p>{props.title}</p>
            </div>

        </div>
       </div>
    )
}