import './Home.css'
import SearchBar from "../SearchBar/SearchBar"
import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import {useDispatch, useSelector } from "react-redux";
import { getCountries } from '../../redux/actions';
import Filter from '../Filter/Filter';

export default function Home({page, setPage, onSearch}) {

  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);


  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])



  return (
    <div className='home'>
      <SearchBar onSearch={onSearch} />
      <Filter setPage={setPage}/>
       <Cards allCountries={allCountries} page={page} setPage={setPage}/>
    </div>
  )
}
