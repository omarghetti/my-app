import React from "react";

interface cardProps {
    monster: any
}

export const Card = (props: cardProps|any) => {
    console.log(props)
    return(
        <div key={props.key} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.monster.name}</div>
                <div className="font-bold text-l mb-2">{props.monster.email}</div>
            </div>
        </div>
    )
}