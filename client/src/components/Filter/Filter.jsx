import './Filter.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterActivity, getActivity, ordenPopulation, orderContinents, orderCountries } from '../../redux/actions'
import { useEffect } from 'react'

const Filter = ({setPage}) => {

    const dispatch = useDispatch()
    const countries = useSelector((state)=>state.allCountries)
    const activities = useSelector((state)=>state.activities)

    useEffect(() => { //Para traer todas las actividades al componente
        dispatch(getActivity());
      }, [dispatch]);

    const handleOrder = (e) => {
        dispatch(orderCountries(e.target.value))
        setPage(1)
    }

    const handlePopulation = (e) => {
        dispatch(ordenPopulation(e.target.value))
        setPage(1)
    }

    const handleContinents = (e) => {
        dispatch(orderContinents(e.target.value))
        setPage(1)
    }
    const handleActivities = (e) => {
        dispatch(filterActivity(e.target.value))
        setPage(1)
    }
    

  return (
    <div>
        <div>

            <select name='order' onChange={handleOrder} className='selectFilter'>
               <option value='alphabetically'>Clean Alphabetically</option>
               <option value='Ascendente'>Ascending</option>
               <option value='Descendente'>Descending</option>
            </select>

            <select name='population' onChange={handlePopulation} className='selectFilter'> 
               <option value='Population'>Clean Population</option>
               <option value='Ascendente'>Ascending</option>
               <option value='Descendente'>Descending</option>
            </select>

            <select name='continents' onChange={handleContinents} className='selectFilter'> 
               <option value='All'>Clean Continents</option>
               <option value='Africa'>Africa</option>
               <option value='Antarctica'>Antarctica</option>
               <option value='Asia'>Asia</option>
               <option value='Europe'>Europe</option>
               <option value='North America'>North America</option>
               <option value='Oceania'>Oceania</option>
               <option value='South America'>South America</option>
            </select>
            
            <select onChange={handleActivities} name="selectedActivity" className='selectFilter'>
          <option value="actividad">Clean Activities</option>
          {activities.map((activity) => (
          
            <option value={activity.name} key={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>

         </div>
    </div>
  )
}

export default Filter