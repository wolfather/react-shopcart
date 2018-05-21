import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { getProducts } from '../core/action/actions'
import { bindActionCreators } from 'redux'


class Home extends Component {
    componentDidMount() {
        this.props.getProducts()
    }

    renderProducts() {
        return this.props.products.map(product => {
            const {id, images, name, price} = product
            return(<div className="product" 
                key={id}>
                <img src={images.medium} alt={name} />
                <Link to={`/detail/${id}`}>{name}</Link>
                <p>{price}</p>
            </div>)
        })
    }
    render() {
        return (<div>
            <div className="products">
                {this.renderProducts()}
            </div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {products: state.products.productsState}
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({getProducts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)