import './Cards.css'
import Card from "../Card/Card"
import Pagination from "../Pagination/Pagination";



const Cards = ({ allCountries, page, setPage }) => {
  const countriesPerPage = 10;

  const indexOfLastCountry = page * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="cards">
      {allCountries.length ? (
        <div className='pagination'>
          <Pagination
            page={page}
            totalPages={Math.ceil(allCountries.length / countriesPerPage)}
            onPageChange={paginate}
          />
        </div>
      ) : (
        <div className='noMatches'>
          <p> There are no matches. </p>
        </div>
      )}

      <div className='cardsCountries'>
        {currentCountries.map((country, index) => {
          return (
            <Card
              key={index}
              id={country.id}
              name={country.name}
              capital={country.capital}
              area={country.area}
              continents={country.continents}
              flags={country.flags}
              population={country.flags}
              subregion={country.subregion}
              Activities={country.Activities}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;