import React from 'react';
import { connect } from 'react-redux';
import walkSprite from '../../images/cats.png';
import CatMovement from '../cat/CatMovement'

//This controlls how the cat is styled on the screen
class Cat extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div
            style={{
                position: 'absolute',
                top: this.props.position[1],
                left: this.props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: this.props.spriteLocation, // This is what displays the characters; currently, displaying incorrectly initally
                width: '50px',
                height: '50px'
            }}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.cat
    }
}

export default connect(mapStateToProps)(CatMovement(Cat));
