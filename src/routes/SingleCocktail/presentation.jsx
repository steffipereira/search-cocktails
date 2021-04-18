import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cocktail from '../../components/Cocktail'

const SingleCocktail = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState([])
  const FETCH_DATA = async() => {
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const response = await data.json()
    setDrink(response.drinks)
  }

  useEffect(() => {
    FETCH_DATA()
  },[])
  return (
    <>
      <section className="cocktail-section section">
        <Link to="/" className="btn btn-primary">Back Home</Link>
      </section>
      <h2 className="section-title">title</h2>
      <Cocktail drink={drink}/>
    </>
  );
}

export default SingleCocktail;
