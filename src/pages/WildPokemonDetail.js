import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd'
import axios from 'axios'

import PokemonMoves from '../components/PokemonMoves';
import PokemonTypes from '../components/PokemonTypes';

import { detailPokemon } from '../actions/WildPokemonDetailAction'

function WildPokemonDetail({ match }) {
  const [pokemon, setPokemon] = useState([])
  const [pokemonDex, setPokemonDex] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [loading, setLoading] = useState(true)
  const [modalText, setModalText] = useState('Content of the modal')
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const dispatch = useDispatch();
  const WildPokemonDetailData = useSelector((state) => state.WildPokemonDetailData);

  useEffect(() => {
    fetchItem()
    // dispatch(listPokemons())
  }, [])
  // }, [currentPageUrl])

  const fetchItem = () => {
    setLoading(true)
    let cancel
    axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        if (res.status == 200) {
          console.log(res)
          setLoading(false)
          setPokemon(res.data)
          setPokemonMoves(res.data.moves)
          setPokemonTypes(res.data.types)

          dispatch(detailPokemon(res.data))
        } else {
          alert('error', res.status)
        }
      })
    return () => cancel()
  }

  if (loading) return 'loading...'

  let imgPath = 'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/'

  const catchPokemon = (pokemon) => {
    let prob = Math.random()
    // console.log(prob)

    if (prob < 0.5) {
      setPokemonDex(state => {
        // console.log('before', state)
        const monExists = (state.filter(p => pokemon.id == p.id).length > 0)

        if (!monExists) {
          state = [...state, pokemon]
          state.sort(function (a, b) {
            return a.id - b.id
          })
        }
        // console.log('after', state)
        return state
      })
      setPokemonName()
    } else {
      alert("failed :( , try again ");
    }
  }

  const setPokemonName = () => {
    let name = prompt('you got it ^_^, \ngive your pokemon a name ', '')
    // console.log(name)
  }

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)

    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000);
  };

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setVisible(false)
  };

  return (
    <div className="app-wrapper" >
      <header>
        <h1 className="title">Wild Pokemon Detail</h1>
      </header>

      <section className="wild-pokemon">
        <img src={imgPath + match.params.id + '.png'} className="sprite"></img>
        <Button type="primary" onClick={() => catchPokemon(pokemon)}>
          catch
        </Button>
        <h3>{pokemon.name}</h3>
        {/* <button onClick={() => catchPokemon(pokemon)} className="catch-btn">catch</button> */}
      </section>

      <section>
        <div>
          {/* <Button type="primary" onClick={()=>setVisible(true)}> */}
          <Button type="primary" onClick={() => showModal()}>
            modal
          </Button>
          <Modal
            title="Title"
            visible={visible}
            onOk={() => handleOk()}
            confirmLoading={confirmLoading}
            onCancel={() => handleCancel()}
          >
            <p>{modalText}</p>
          </Modal>
        </div>
      </section>

      <section className="detail-info">
        <h3>Types</h3>
        <PokemonTypes types={pokemonTypes} />

        <h3>Moves</h3>
        <PokemonMoves moves={pokemonMoves} />
      </section>

    </div>
  );
}

export default WildPokemonDetail;
