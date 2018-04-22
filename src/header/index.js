import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Shopcart from '../shopcart'


export default class Header extends Component {
    render() {
        return(<header className="header">
            <Link to={`/`}>Logo</Link>

            <Shopcart />
        </header>)
    }
}