import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import  { getProductsByCategory } from '../core/action/actions'

class Category extends Component {
    componentDidMount() {
        this.props.getProductsByCategory(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            nextProps.getProductsByCategory(nextProps.match.params.id)
        }
    }

    render() {
        return (
            <div>
                <h1>CATEGORY</h1>
                {this.props.products.map(product => (
                    <div key={product.id}>
                        {product.name}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { products : state.category.categoryProducts }
},
mapDispatchToProps = dispatch => {
    return bindActionCreators({getProductsByCategory}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
