import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { getProducts } from '../core/action/actions'
import { bindActionCreators } from 'redux';


class Home extends Component {
    componentDidMount() {
        this.props.getProducts()
    }

    renderProducts() {
        console.log(this.props)
        return(this.props.products.map(product => (
            <div className="product" 
                key={product.id}>
                <img src={product.images.medium} alt=""/>
                <Link to={`/detail/${product.id}`}>{product.name}</Link>
                <p>{product.price}</p>
            </div>
        )))
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