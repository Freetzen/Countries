import './Form.css'
import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from '../../redux/actions'
import {useNavigate} from 'react-router-dom'
import validate from "./validation";


const Form = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.allCountries)

  const [errors, setErrors] = useState({})
  const [showAlert, setShowAlert] = useState(false)
  const [inputData, setInputData] = useState({
    name:'',
    difficulty:'',
    duration: '',
    season: '',
    countries: []
  })
 

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
    setErrors(validate(inputData))
  }

  const handleSelect = (event) => {
    const selectedCountryId = event.target.value;

    const countrySelected = inputData.countries.includes(selectedCountryId);

    if (countrySelected) {
      alert("Este país ya fue seleccionado");
      return;
    } else if (selectedCountryId === "name") {
      return;
    } else if (inputData.countries.length >= 5) {
      alert("Solo puedes seleccionar 5 países");
      return;
    }

    const selectedCountry = allCountries.find(
      (country) => country.id === selectedCountryId
    );

    // Verificar si el país ya está en la lista de países seleccionados.
    const isCountrySelected = inputData.countries.some(
      (country) => country.id === selectedCountryId
    );

    if (!isCountrySelected) {
      setInputData((input) => ({
        ...input,
        countries: [...inputData.countries, selectedCountry.id],
      }));
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postActivity(inputData))
    setShowAlert(true)
  }
  
  const handleRemoveCountry = (countryId) => {
    const updatedCountries = inputData.countries.filter((selectedCountry) => selectedCountry !== countryId);
    setInputData((input) => ({
        ...input,
        countries: updatedCountries,
    }));

    setShowAlert(false);
};

  useEffect(() => {
    if (showAlert) {
      alert('Actividad creada correctamente');
        navigate('/home');
    }
}, [showAlert, navigate]);
  
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  
  return (
    <div className="form">
      <div className="formContainer">
        <h1>Crear Actividad!!</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <section className="sectionName">
            {errors.name && <p className="errors">{errors.name}</p>}
            <label>Name</label>
            <input
              type="text"
              key="name"
              name="name"
              value={inputData.name}
              onChange={handleChange}
              placeholder="Name of Activity..."
              className="inputActivity"
            />
          </section>

          <section className="sectionDifficulty">
            {errors.difficulty && <p className="errors">{errors.difficulty}</p>}
            <label>Difficulty:</label>
            <section name="" id="" className="difficultySection">
              <div className="difficultyRadio">
                <label>1</label>
                <input
                  type="radio"
                  id="1"
                  name="difficulty"
                  value="1"
                  onChange={handleChange}
                  checked={inputData.difficulty === "1"}
                  className="radioInput"
                />
              </div>
              <div className="difficultyRadio">
                <label>2</label>
                <input
                  type="radio"
                  id="2"
                  name="difficulty"
                  value="2"
                  onChange={handleChange}
                  checked={inputData.difficulty === "2"}
                  className="radioInput"
                />
              </div>
              <div className="difficultyRadio">
                <label>3</label>
                <input
                  type="radio"
                  id="3"
                  name="difficulty"
                  value="3"
                  onChange={handleChange}
                  checked={inputData.difficulty === "3"}
                  className="radioInput"
                />
              </div>
              <div className="difficultyRadio">
                <label>4</label>
                <input
                  type="radio"
                  id="4"
                  name="difficulty"
                  value="4"
                  onChange={handleChange}
                  checked={inputData.difficulty === "4"}
                  className="radioInput"
                />
              </div>
              <div className="difficultyRadio">
                <label>5</label>
                <input
                  type="radio"
                  id="5"
                  name="difficulty"
                  value="5"
                  onChange={handleChange}
                  checked={inputData.difficulty === "5"}
                  className="radioInput"
                />
              </div>
            </section>
          </section>

          <section className="sectionDuration">
            {errors.duration && <p className="errors">{errors.duration}</p>}
            <label>Duration:</label>
            <input
              type="time"
              name="duration"
              value={inputData.duration}
              onChange={handleChange}
            />
          </section>

          <section className="sectionSeason">
            {errors.season && <p className="errors">{errors.season}</p>}
            <label>Season:</label>
            <section
              name="seasonInputs"
              id="seasonInputs"
              className="containerSeason"
            >
              <div className="seasonDiv">
                <label>Summer</label>
                <input
                  type="radio"
                  id="Summer"
                  name="season"
                  value="Summer"
                  onChange={handleChange}
                  checked={inputData.season === "Summer"}
                  className="radioInput"
                />
              </div>
              <div className="seasonDiv">
                <label>Autumn</label>
                <input
                  type="radio"
                  id="Autumn"
                  name="season"
                  value="Autumn"
                  onChange={handleChange}
                  checked={inputData.season === "Autumn"}
                  className="radioInput"
                />
              </div>
              <div className="seasonDiv">
                <label>Winter</label>
                <input
                  type="radio"
                  id="Winter"
                  name="season"
                  value="Winter"
                  onChange={handleChange}
                  checked={inputData.season === "Winter"}
                  className="radioInput"
                />
              </div>
              <div className="seasonDiv">
                <label>Spring</label>
                <input
                  type="radio"
                  id="Spring"
                  name="season"
                  value="Spring"
                  onChange={handleChange}
                  checked={inputData.season === "Spring"}
                  className="radioInput"
                />
              </div>
            </section>
          </section>

          <section className="sectionCountries">
            {errors.country && <p className="errors">{errors.country}</p>}
            <label>Countries:</label>
            <select onChange={(event) => handleSelect(event)}>
              <option value="name">Choose a Country:</option>
              {allCountries.map((country) => {
                return (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                );
              })}
            </select>
            <section>
              <label>Selected Countries:</label>
              <div>
                {inputData.countries.map((selectedCountry) => (
                  <div key={selectedCountry} className="selectedCountries">
                    <button
                      onClick={() => handleRemoveCountry(selectedCountry)}
                    >
                      x
                    </button>
                    {
                      allCountries.find(
                        (country) => country.id === selectedCountry
                      ).name
                    }
                  </div>
                ))}
              </div>
            </section>
          </section>

            <section className='sectionButton'>
            <button
          className='buttonForm'
            disabled={
              inputData.name === "" ||
              inputData.difficulty === "" ||
              inputData.duration === "" ||
              inputData.season === "" ||
              inputData.countries === ""
            }
            type="submit"
          >
            Create Activity
          </button>
            </section>
          
        </form>
      </div>
    </div>
  );
}

export default Form