import React, {Fragment, useState} from "react";

const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState);
    const handleFieldsChange = (event) => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value 
    });
    const handleSubmit = event => {
        props.addPlanet (fields);
        event.preventDefault();
        setFields(initialState);
    }
    return (
        <Fragment>
            <h2>Cadastro de Planetas</h2>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="textarea" name="description" value={fields.description} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="link">Link:</label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange} />
                </div>
                <br/>
                <div>
                    <label htmlFor="img_url">Link da Imagem:</label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange} />
                </div>
                <br/>
                <input type="submit" value="Enviar" />
            </form>
        </Fragment>
    )
}

export default Form;