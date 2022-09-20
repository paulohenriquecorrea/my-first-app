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
    
        const addPlanet = (new_planet) => {
            setPlanets([...planets, new_planet])
        }

        return (
            <Fragment>
                <h3>Planet List</h3>
                <hr></hr>
                <Form addPlanet={addPlanet} />
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

export {Planets}
