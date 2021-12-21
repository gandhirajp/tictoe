import React from 'react'
import "./Box.css"
import { useState } from 'react'

function Game() {

    const [box, setBox] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState("X")

    let change = (pro) => {

        if(box[pro] !=="")return;

        setBox((box) => {
           return box.map((final, i) => {
                if (i === pro)
                    return player;
                else {
                    return final;
                }

            })
        })
        setPlayer(player === "X" ? "O":"X")
    }

    return (
        <>
        <div className='head' >
        <h1 class="text-center" >Tik-Tac-Toe</h1>
        </div>
       
        <div className='bord'>
            {
                box.map((send, i) => {
                    return <div className='boxsize' onClick={() => change(i)} >{send} </div>
                })
            }

        </div>
        </>
     
    )
}

export default Game
