const Cocktail = ({ drink }) => {
  const { strDrinkThumb, strGlass, strCategory, strIngredient1, strAlcoholic, strInstructions, strDrink } = drink
  
  return (
    <>
      {drink.map(info => (
        <div className="drink">
          <img src={info.strDrinkThumb} alt={info.strDrink} />
          <div className="drink-info">
            <p><span className="drink-data">Name</span>{info.strDrink}</p>
            <p><span className="drink-data">Category</span>{info.strCategory}</p>
            <p><span className="drink-data">Info</span>{info.strAlcoholic}</p>
            <p><span className="drink-data">Glass</span>{info.strGlass}</p>
            <p><span className="drink-data">Instruction</span>{info.strInstructions}</p>
            <p><span className="drink-data">Ingredients</span>{info.strIngredient1} </p>
        </div>
      </div>
      ))}
    </>
   );
}

export default Cocktail;
