import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import {
    getProductById,
    addProductToCart
} from '../core/action/actions'

class Detail extends Component {
    state = {
        buttonisVisible: true
    }

    componentDidMount(props) {
        this.props.getProductById(this.props.match.params.id)
    }

    addProductToShopcart() {
        this.props.addProductToCart(this.props.match.params.id)

        this.setState({buttonisVisible: false})
    }

    renderProduct() {
        const detail = this.props.detail
        
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
        if(!this.props.detail) {
            return(<div>Nada aqui</div>)
        }
        return (
            <div>
                {this.renderProduct()}
                <div>
                    {
                        this.props.detail &&
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
        detail: state.detail.detailState,
        shopcart: state.shopcart
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
                getProductById,
                addProductToCart
            }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)