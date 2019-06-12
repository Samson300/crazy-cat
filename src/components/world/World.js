import React from 'react';
import Cat from '../cat/Cat';
import Map from '../map/Map';



class World extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(props) {
        this.props.addTiles()
    }
    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    width: '1000px',
                    height: '500px',
                    margin: '20px auto'
                }}
            >
                <Map />
                <Cat />
            </div>
        )
    }
}

export default World;