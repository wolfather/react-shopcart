import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  * as action from '../core/action/actions'

class Category extends Component {
    componentWillMount() {
        this.props.action(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h1>CATEGORY</h1>
                {this.props.category.map(product => (
                    <div key={product.id}>
                        {product.name}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { category : state.category }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({action}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
