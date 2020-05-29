import React, { Component } from 'react'
import "./App"
import { Link, Route } from 'react-router-dom'
import BirdInfo from './BirdInfo'


class Birds extends Component {
    render() {
        return (
            <>
                <Link to="/birdinfo">
                    <div className="birddiv">
                        <img src={this.props.pic} alt='bird pic' />
                    </div>
                </Link>
                
            </>
        )
    }
}

export default Birds