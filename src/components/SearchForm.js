import { useEffect, useRef } from 'react'
const SearchForm = ({ setSearchTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleSearch = () => {
    setSearchTerm(searchTerm.current.value)
  }
  useEffect(() => {
   searchTerm.current.focus()
  },[])
  const searchTerm = useRef('')
  return (
    <>
      <section className="cocktail-section">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="drink">Search Your Favorite Cocktail</label>
            <input
              type="text"
              name="name"
              id="name"
              value={searchTerm.current.value}
              ref={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </form>
      </section>
    </>
   );
}

export default SearchForm;
