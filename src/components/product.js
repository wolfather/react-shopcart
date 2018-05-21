import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, images, name, price} = props
        return(<div className="product" 
            key={id}>
            <img src={images.medium} alt={name} />
            <Link to={`/detail/${id}`}>{name}</Link>
            <p>{price}</p>
        </div>)
    }
}