import React, {Fragment, useState} from "react";

const initialState = {
    name: ''
}
const Form = (props) => {
    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = (e) => {
        props.addSatellite(fields)
        e.preventDefault();
        setFields(initialState);
    }
    return (
        <Fragment>
            <h2>Cadastro de Satélites</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <input type="submit" value="Adicionar"></input>
                </div>
            </form>
        </Fragment>
    )
}

export default Form;