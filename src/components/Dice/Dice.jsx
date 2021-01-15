import React from 'react'
import Dice1 from './dice-1.png';
import Dice2 from './dice-2.png';
import Dice3 from './dice-3.png';
import Dice4 from './dice-4.png';
import Dice5 from './dice-5.png';
import Dice6 from './dice-6.png';


import './Dice.css'
const Dice = ({value}) => {
    console.log(value)
    let Dice;
    switch(value){
        case 1:
            Dice = Dice1;
            break;
        case 2:
            Dice = Dice2;
            break;
        case 3:
            Dice = Dice3;
            break;
        case 4:
            Dice = Dice4;
            break;
        case 5:
            Dice = Dice5;
            break;
        case 6:
            Dice = Dice6;
            break;
        default:
            Dice = null;
    }
 
    return (
        <div className="dice">
            <img src={Dice} alt="Dice"/>
        </div>
    )
}

export default Dice
