import store from '../../config/store';
import { SPRITE_SIZE } from '../../config/constants';

export default function CatMovement(cat) {

    function getNewPosition(direction) {
        const oldPos = store.getState().cat.position
        switch(direction) {
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]

            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]

            case 'NORTH':
                return [  oldPos[0], oldPos[1]-SPRITE_SIZE ]

            case 'SOUTH':
                return [  oldPos[0], oldPos[1]+SPRITE_SIZE ]
        }
    }

    function dispatchMove(direction) {
        store.dispatch({
            type: 'MOVE_CAT',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
                return dispatchMove('WEST')
            case 38:
                return dispatchMove('NORTH')
            case 39:
                return dispatchMove('EAST')
            case 40:
                return dispatchMove('SOUTH')
            default:
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return cat
}