import React from 'react';

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
                width: '32px',
                height: '32px'
            }}
            />
        )
    }
}

export default Cat;
