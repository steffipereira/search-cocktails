import { Link } from 'react-router-dom'

const CocktailList = ({ drinks, loading }) => {
  if(loading) {
    return <h1>Loading ...</h1>
  }
  if(!drinks.length) {
    return <h1 className="section section-title">No drinks match the search </h1>
  }
  return (
    <>
    <section className="section">
      <h2 className="section-title">Cocktail</h2>
      <div className="cocktails-center">
        {drinks && drinks.map(drink => (
          <div key={drink.id}>
            <div className="cocktail" >
              <div className="imag-container">
                <img src={drink.src} alt={drink.type} />
              </div>
              <div className="cocktail-footer">
                <h3>{drink.title}</h3>
                <h4>{drink.category}</h4>
                <p>{drink.type}</p>
                <Link to={`/cocktail/${drink.id}`} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        ))

        }
      </div>
    </section>
    </>
   );
}

export default CocktailList;
