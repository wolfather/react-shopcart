import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as action from '../core/action/actions'

class Detail extends Component {
    state = {
        buttonisVisible: true
    }

    addProductToShopcart(product) {
        this.props.action(product.id)

        this.setState({buttonisVisible: false})
    }

    render() {
        const detail = this.props.detail,
        productAlreadyAddInShopcart = this.props.shopcart.filter(shopcartItem => {
            return shopcartItem.id === detail.id
        })
        
        return (
            <div>
                <h1>{detail.name}</h1>
                <div>{detail.price}</div>
                
                <div>
                    {
                        !productAlreadyAddInShopcart.length &&
                        this.state.buttonisVisible ? 
                        <div>
                            <a onClick={() => this.addProductToShopcart(detail)}>Add to cart</a>
                        </div> : 
                        <div>produto adicionado</div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const detail = state.products.find(product => product.id === props.match.params.id)
    return {
        detail,
        shopcart: state.shopcart
    }
},
mapDispatchToProps = dispatch => {
    return bindActionCreators({action: action.addProductToCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)