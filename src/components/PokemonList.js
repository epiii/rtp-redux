import React from 'react'
import { Link } from 'react-router-dom'
import { Skeleton, Card } from 'antd';

const { Meta } = Card;

export default function PokemonList({ pokemons, loading }) {
    // console.log(pokemon)
    let imgPath = 'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/'

    return (
        // <div>{
        pokemons.map(p => {
            let urlx = p.url.split('/')

            if (loading) {
                return (
                    <Skeleton loading={loading} avatar={'circle'} paragraph={true} />
                )
            } else {
                return (
                    <Link key={p.name} to={`/rtp-redux/wild-pokemon-detail/${urlx[6]}`}>

                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={imgPath + urlx[6] + '.png'} />}
                        >
                            <Meta title={p.name} description={''} />
                        </Card>
                    </Link>
                )
            }
        })
   
    )
}
