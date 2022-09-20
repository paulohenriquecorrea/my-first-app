import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const NotFoundScreen = () => {
   
   const [contador, setContador] = useState(0);


    let navigate = useNavigate();
    const home = () => {
        setTimeout(() => {
            navigate('/');
        }, 5000)
    }   
    
    home();
    
    return (
        
        <div> 
            <h3>Página não encontrada!</h3>
            <Link to='/'>Voltar à página inicial</Link>
        </div>

  
    )
}

export default NotFoundScreen;