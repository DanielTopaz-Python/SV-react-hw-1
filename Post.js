import React from 'react'

export default function Post(props) {
    return (
        <div style={{backgroundColor:props.bg}}>
        <h1>{props.title}</h1>
        <p>{props.details}</p>
        <img src={props.img} height="100px" />
        <br/>
        <textarea/>
    </div>
    )
}
