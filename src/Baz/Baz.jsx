import React from 'react'

const Baz = (props) => {
    return (
        <div>
            The baz page
            
            <article>
            <h5>{props.content.title}</h5>
            <address>Author: {props.content.author}</address>
            <p>{props.content.text}</p>
            </article>
        </div>
    )
}

export default Baz
