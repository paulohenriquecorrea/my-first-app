import React, { Fragment, useState, useEffect } from "react";
import { Planet } from "./planet";
import Form from "./form";

// const clickOnPlanet = (name) => {
//     alert(`Cliquei no planeta: ${name}`);
// }

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();

    return data;

}


const Planets = () => {

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
            getPlanets().then((data) => {
                setPlanets(data['planets'])
            })
        }, []); // Uso o [] para indicar que ele não deve atualizar em nenhum estado. Deve atualizar apenas quando o componente é montado.

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1];
        setPlanets([...planets, last_planet]);
    }

    const removeLast = () => {
        let new_planets = [ ...planets];
        new_planets.pop();
        setPlanets(new_planets);
    }

    
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={removeLast}>Remove Last</button>
                <button onClick={duplicateLastPlanet}>Duplicate Last Planet</button>
                <hr></hr>
                {
                    planets.map((planet, index) => {
                        return (
                            <Planet 
                                id={planet.id}
                                name={planet.name}
                                description={planet.description}
                                img_url={planet.img_url}
                                link={planet.link}
                                key={index}
                            />
                        )
                      
                    })
                }
            </Fragment>
        )
}
// const Planets = () => {
   
// }

export {Planets};