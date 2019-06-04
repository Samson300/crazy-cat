import React from 'react';
import Cat from '../cat/Cat';
import Map from '../map/Map';
import { relative } from 'path';

function World(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: 1000,
                height: 500,
                margin: '20px auto'
            }}
        >
            <Map />
            <Cat />
        </div>
    )
}

export default World;