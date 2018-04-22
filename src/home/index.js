import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom';

class HomeComponent extends Component {
    renderProducts() {
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
    return {products: state.products}
}

export default connect(mapStateToProps, null)(HomeComponent)