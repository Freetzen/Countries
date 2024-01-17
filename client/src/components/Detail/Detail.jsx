import './Detail.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { cleanDetail, countriesById, getActivity } from "../../redux/actions"
import CardActivity from "../CardActivity/CardActivity"


const Detail = () => {

  const { id } = useParams()
    const dispatch = useDispatch();

    const detail = useSelector(state => state.detail)
    const activities = useSelector(state => state.activities)

    useEffect(() => {
        dispatch(countriesById(id));
        dispatch(getActivity())
        return () => {
          dispatch(cleanDetail())
        }
    }, []);
    

    const actividad = activities.filter((activity) => {
        return activity.Countries.some(country => country.id === id);
    })

  return (
    <div className="detailCards">
      <section className="sectionDetail">
        <div className="detailDiv">
          <img src={detail.flags} alt={detail.id} className="imgRaM" />
          <h1><span>Country:</span> {detail.name}</h1>
          <h3><span>Continente:</span> {detail.continents}</h3>
          <h3><span>Capital:</span> {detail.capital}</h3>
          <h3><span>Subregión:</span> {detail.subregion}</h3>
          <h3><span>Área:</span> {detail.area}</h3>
          <h3><span>Población:</span> {detail.population}</h3>
          <h3><span>ID:</span> {detail.id}</h3>
        </div>
      </section>

      <section>
        {actividad.length ? (
          actividad.map((activity) => {
            return (
              <div>
                <CardActivity
                  id={activity.id}
                  key={activity.id}
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
                />
              </div>
            );
          })
        ) : (
          <div className='divNoActivity'><p>
          There are no activities created in a country that corresponds to this
           continent.
        </p></div>
          
        )}
      </section>
    </div>
  );
}

export default Detail