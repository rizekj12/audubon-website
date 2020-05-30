import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class BirdInfo extends Component {
    render() {
        console.log("hello")
        const birdName = this.props.match.params.birdName
        const selectedBird = this.props.allInfo.find(aBird => {
        return birdName === aBird.name
        })
        console.log(selectedBird)
        return (
            <div>
            <h2>{selectedBird.name}</h2>  
            <img src={selectedBird.image} alt={selectedBird.name}/>  
            <p>{selectedBird.conservationStatus}</p>
            </div>
        )
    }
}


export default withRouter(BirdInfo)