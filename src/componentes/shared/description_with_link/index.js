import { Fragment } from "react"

const DescriptionWithLink = (props) => {
    if (props.link) {
        return (
            <Fragment>
                {props.texto}
                <p><a href={props.link}>{props.link}</a></p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p>{props.texto}</p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;