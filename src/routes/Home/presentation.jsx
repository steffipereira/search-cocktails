import React, { useState, useEffect } from 'react'
import CocktailList from '../../components/CocktailList.js'
import SearchForm from '../../components/SearchForm'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
const Home = () => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [drinks, setDrinks] = useState([])
  // const FETCH_DATA = async() => {
  //   const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
  //   const response = await data.json()
  //   setDrinks(response)
  //   setLoading(false)
  // }
  useEffect(() => {
    setLoading(true)
    const FETCH_DATA = async() => {
     try {
      const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      const response = await data.json()
      const { drinks } = response
      if(drinks) {
        const drinksList = drinks.map(drink => {
          const {
            idDrink,
            strDrinkThumb,
            strGlass,
            strAlcoholic,
            strDrink
          } = drink
          return {
            id: idDrink,
            src: strDrinkThumb,
            category: strGlass,
            title: strDrink,
            type: strAlcoholic,
          }
        })
        setDrinks(drinksList)
      } else {
        setDrinks([])
        }
      }
      catch (error) {
        throw new Error(error)
      }
    }
    FETCH_DATA()
    setLoading(false)
  }, [searchTerm])
  console.log(drinks)

  return (
    <>
      {loading ? <h1>Loading..</h1> : (
        <main class="section">
          <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          <CocktailList drinks={drinks} loading={loading} />
        </main>
      )}
    </>
  );
}

export default Home;
