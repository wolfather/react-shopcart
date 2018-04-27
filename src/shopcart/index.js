import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Shopcart extends Component {
    renderProductsInCart() {
        if(this.props.shopcart.length) {
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
        return(<div className="shopcart-empty">Carrinho vazio</div>)
    }

    render() {
        console.log(this.props.shopcart)
        return(<div className="shopcart">
            <h2>SHOPCART</h2>
            {this.renderProductsInCart()}
        </div>)
    }
}

const mapStateToProps = (state, props) => {
    console.log('SHOPCART', state)
    return {
        shopcart: state.shopcart
    }
}

export default connect(mapStateToProps)(Shopcart)