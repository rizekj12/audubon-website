import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class Head extends Component {
    render() {
        return (
            <div className="heading">
                <main>
                <header>
                  <Link to="/"> <h1>Audubon Society</h1> </Link>
                </header>
                </main>
            </div>
        )
    }
}
