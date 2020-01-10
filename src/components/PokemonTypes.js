import React from 'react'

export default function PokemonTypes({ types }) {
    return (
        <div className="pokemon-type">{
            types.map(p => (
                <div key={p.type.name}>
                    {p.type.name}
                </div>
            ))
        }</div >
    )
}
