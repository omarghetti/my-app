import React from "react";
import { Card } from "../Card/Card";

interface cardListProps {
    monsters: any[]
}

export const CardList = (props: cardListProps|any) =>{
    console.log(props)
    return(
        <div className="grid grid-cols-4 gap-4 place-content-center">
            {props.monsters.map((monster: any) => (
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    )
}