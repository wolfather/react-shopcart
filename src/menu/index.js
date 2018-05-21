import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategoriesActives } from '../core/action/actions'
import { Link } from 'react-router-dom'

class Menu extends Component {
    componentDidMount() {
        this.props.getCategoriesActives()
    }

    renderItems() {
        return(this.props.menu.map(category => (
            <div key={category.id}>
                <Link to={`/category/${category.id}`}>{category.alias}</Link>
            </div>
        )))
    }
    render() {
        return(<menu>
            {this.renderItems()}
        </menu>)
    }
}

const mapStateToProps = state => {
    return { menu: state.category.categories }
},
mapsDispatchToProps = dispatch => {
    return bindActionCreators({getCategoriesActives}, dispatch)
}

export default connect(mapStateToProps, mapsDispatchToProps)(Menu)