import React from 'react';
import Puce from './Puce.jpg';
import Master from './Master.jpg';


const Card = props => {
    return (
        <div className="aa">
            <div className="App" >
                <p className="company">Company name</p>
                <div>
                    <img className="puce" src={Puce} />
    <p className="nemr">{props.infos.number === "" ? "**** **** **** ****" : props.infos.number.padEnd(16,"*").replace(/(.{4})/g,"$1 ") }</p>
                </div>
                <div className="dm">
                    <p className="foulan">{props.infos.cardholder}</p>
    <p className="dt">{props.infos.valid.toUpperCase() .replace(/(.{2})/,"$1/")}</p>
                    <img className="master" src={Master} />


                </div>
            </div>
        </div>
    )
}

export default Card;