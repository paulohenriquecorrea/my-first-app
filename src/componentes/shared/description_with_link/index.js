import { Fragment } from "react"

const DescriptionWithLink = (props) => {
    if (props.link) {
        return (
            <Fragment>
                <h6>{props.texto}</h6>
                <p><a href={props.link}>{props.link}</a></p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.texto}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;