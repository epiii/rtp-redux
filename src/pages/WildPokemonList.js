import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BackTop, Skeleton, Switch, List, Avatar, Icon, Row, Col, Slider } from 'antd'
import axios from 'axios'

import PokemonList from '../components/PokemonList'
import Pagination from '../components/Pagination'

import { listPokemons, listPokemonsNext, listPokemonsPrev } from '../actions/WildPokemonListAction'


const WildPokemonList = () => {
  const urlx = 'https://pokeapi.co/api/v2/pokemon'

  // const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(urlx)
  // const [nextPageUrl, setNextPageUrl] = useState()
  // const [prevPageUrl, setPrevPageUrl] = useState()
  // const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  // const pokemon = useSelector((state) => state.results);
  const { pokemons, nextPageUrl, prevPageUrl, loading } = useSelector(
    (state) => ({
      loading: state.WildPokemonList.loading,
      pokemons: state.WildPokemonList.data.results ? state.WildPokemonList.data.results : [],
      nextPageUrl: state.WildPokemonList.data.next,
      prevPageUrl: state.WildPokemonList.data.previous,
      currentPageUrl: state.WildPokemonList.data.previous,
    })
  );
  console.log(pokemons)
  // const pokemon = useSelector(state => state);
  // console.log('pok', pokemons)
  // const pokemon = useSelector((state) => state.WildPokemonListData.results);
  // console.log(currentPageUrl)
  useEffect(() => {
    dispatch(listPokemons())
  }, [currentPageUrl])

  const goToNextPage = () => {
    dispatch(listPokemonsNext(nextPageUrl))
    console.log('next',nextPageUrl)
  }
  const goToPrevPage = () => {
    dispatch(listPokemonsPrev(prevPageUrl))
  }

  // function goToNextPage() {
  //   setCurrentPageUrl(nextPageUrl)
  // }
  // function goToPrevPage() {
  //   setCurrentPageUrl(prevPageUrl)
  // }

  // if (loading) return 'loading...'
  // console.log(pokemon)
  // console.log(pokemon[1].name)
  return (
    <div className="app-wrapper" >
      <header>
        <h1 className="title">Pokemon List</h1>
      </header>

      <Row type="flex" justify="space-around" align="middle">
        <Pagination
          // goToNextPage={goToNextPage}
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />
      </Row><br />
      {
        // loading ? (
        //   <Skeleton loading={loading} avatar={'circle'} paragraph={false} />
        // ) : (
        <Row type="flex" justify="space-around" align="middle">
          {
            <PokemonList
              loading={loading}
              pokemons={pokemons}
            />
          }
        </Row>
        // )
      }
      <br />
      {/* <Row type="flex" justify="space-around" align="middle">
        <Pagination
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />
      </Row> */}

      <div>
        <BackTop />
      </div>

    </div>
  );
}

export default WildPokemonList;
