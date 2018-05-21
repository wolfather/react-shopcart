import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    sumProductToCart,
    subProductToCart,
} from '../core/action/actions'

class Shopcart extends Component {
    renderProductsInCart() {
        if(this.props.shopcart.length) {
            return(<div className="shopcart-item">
                {this.props.shopcart.map(item => (
                    <div key={item.id}>
                        <img src={item.images.thumb}/>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <div className="controls">
                            <span className="control control-minus" 
                                onClick={() => this.props.subProductToCart(item.id)}>&#8722;</span>
                            <span className="control control-plus" 
                                onClick={() => this.props.sumProductToCart(item.id)}>&#43;</span>
                        </div>
                    </div>)
                )}
            </div>)
        }
        return(<div className="shopcart-empty">Carrinho vazio</div>)
    }

    render() {
        return(<div className="shopcart">
            <h2>SHOPCART</h2>
            {this.renderProductsInCart()}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return { shopcart: state.shopcart }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        sumProductToCart, 
        subProductToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart)