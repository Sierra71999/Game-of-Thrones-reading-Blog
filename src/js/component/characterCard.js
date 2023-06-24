import React, {useContext, useState, useEffect} from 'react'
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";


export default function CharacterCard() {
    const { actions, store } = useContext(Context);
    const [info, setInfo] = useState([]);
    const [characterList, setCharacterList] = useState([]);


    const fetchData = async () => {
        try {
          const response = await fetch("https://8000-sierra71999-gameofthron-fvn9wi9ku3o.ws-us100.gitpod.io/got");
          const json = await response.json();
          setInfo(json);
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        fetchData();
        
      }, []);

    console.log(info.characters, "HERE")
            
            // actions.setItem(data)
    // useeffect above is used to fetch data from db.json file that i made 
    // useEffect(() => {
    //     if (
    //         store.favorites.find((x) => {
    //             for (let i in x) {
    //                 if (characters[i] && characters[i].name === x[i].name) {
    //                     return true;
    //                 }
    //             }
    //         })
    //     ) {
    //         setLiked(true);
    //     } else {
    //         setLiked(false);
    //     }
    // }, [store.favorites]);
    // this useeffect is used to save favorites
    return (
       <div className="col">
      {  info?.characters?.map((character, index) => (
            <div className="card" key={index}>
                {console.log(character, "here")}
            <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <p>{character.gender}</p>
                <p>{character.family}</p>
                <p>{character.spouse}</p>
                <p>{character.children}</p>
                <p>{character.origin}</p>
                <p>{character.culture}</p>
                <p>{character.siblings}</p>
                <p>{character.religion}</p>
                <p>{character.title}</p>
                <p>{character.affiliation}</p>
            </div>
            <div className="cardBottom">
                            <Link
                                to={`/character_description/` + character.id}
                                className="btn btn-light text-dark"
                            >
                                Learn More!
                            </Link>
                            <button
                                onClick={() => {
                                    actions.addFavorite(character);
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
        ))} 
       </div>
    )
}
