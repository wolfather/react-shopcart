import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as action from '../core/action/actions'

class Detail extends Component {
    state = {
        buttonisVisible: true
    }

    addProductToShopcart() {
        this.props.addToCart(this.props.match.params.id)

        this.setState({buttonisVisible: false})
    }

    hasProductInCart () {
        return this.props.shopcart.find(shopcartItem => {
            return shopcartItem.id === this.props.match.params.id
        })
    }
    getProduct() {
        return this.props.products.find(product => {
            return product.id === this.props.match.params.id
        })
    }

    renderProduct() {
        const detail = this.getProduct()

        return(<div className="product-detail">
            <h1 className="product-detail-title">{detail.name}</h1>
            <section className="product-detail-description">
                {detail.shortDescription}
            </section>
            <div className="product-detail-price">{detail.price}</div>
        </div>)
    }

    renderAddToCartButton() {
        return(<div>
            <a onClick={() => this.addProductToShopcart()}>Add to cart</a>
        </div>)
    }

    render() {
        return (
            <div>
                {this.renderProduct()}
                
                <div>
                    {
                        !this.hasProductInCart() &&
                        this.state.buttonisVisible ? 
                        this.renderAddToCartButton() : 
                        <div>produto adicionado</div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        shopcart: state.shopcart
    }
},
mapDispatchToProps = dispatch => {
    return bindActionCreators({addToCart: action.addProductToCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)