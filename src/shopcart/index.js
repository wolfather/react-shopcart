import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Shopcart extends Component {
    renderProductsInCart() {
        return(<div className="shopcart-item">
            {this.props.shopcart.map(item => (
                <div key={item.id}>
                    <img src={item.images.thumb} alt=""/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>)
            )}
        </div>)
    }

    renderEmptyCart() {
        return(<div className="shopcart-empty">Carrinho vazio</div>)
    }

    render() {
        //console.log(this.props)
        return(<div className="shopcart">
            <h2>SHOPCART</h2>
            {!!this.props.shopcart ? 
                this.renderProductsInCart() : 
                this.renderEmptyCart()
            }
        </div>)
    }
}

const mapStateToProps = (state, props) => {
    return {
        shopcart: state.shopcart.shopcartState
    }
}

export default connect(mapStateToProps)(Shopcart)