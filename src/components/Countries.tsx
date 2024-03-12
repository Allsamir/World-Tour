import React from 'react'
import { useState, useEffect } from 'react'
import Country from './Country'

interface Countries {
          name: {
                    common: string
          }

          cca3: string

          flags: {
                    png: string
                    alt: string
          }

          population: number
          continents: string
}

export const Countries: React.FC = () => {
          const [countries, setCountries] = useState<Countries[]>([]);
          const [spinner, setSpinner] = useState(true);
          const [visitedCountries, setVisitedCountries] = useState(Array<string>);
          const [visitedCountriesFlags, setvisitedCountriesFlags] = useState(Array<string>);

          const handleVisitedCountries = (country: string) => {
            setVisitedCountries(
              [...visitedCountries, country]
            )
          }

          const handlevisitedCountriesFlags = (imgURL: string) => {
            setvisitedCountriesFlags(
              [...visitedCountriesFlags, imgURL]
            )
          }

          useEffect(() => {
                    const fetchData = async () => {
                              const response = await fetch('https://restcountries.com/v3.1/all');
                              const data = await response.json();
                              setCountries(data)
                              setSpinner(false)
                    }

                    fetchData()
          }, [])

  return (
    <>
    <div className="text-center mb-8 flex flex-col md:flex-row">

      <div className="nameOfVisitedCountries flex-1 text-center">
        <h2 className="text-lg font-bold">{`Visited ${visitedCountries.length} ${visitedCountries.length > 1 ? 'Countries': 'Country'}`}</h2>
        <ul>
          {visitedCountries.map((countryName, index)=> <li className="text-green-500 font-semibold p-2" key={index}>{countryName}</li>)}
        </ul>
      </div>

      <div className="flagsOfVisitedCountries flex-1">
        <h2 className="text-lg font-bold">{`Visited ${visitedCountries.length} ${visitedCountries.length > 1 ? 'Countries': 'Country'}`}</h2>
        {visitedCountriesFlags.map((flag, index) => <img className="w-40 block mx-auto p-4" key={index} src={flag} />)}
      </div>

    </div>

    <div className="text-center"><span className={`loading loading-bars loading-lg ${spinner || 'hidden'}`}></span></div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {countries.map(country => <Country 
          key={country.cca3} 
          flags={country.flags.png} 
          name={country.name.common} 
          alt={country.flags.alt} 
          population={country.population} 
          continents={country.continents} 
          countryCode={country.cca3} 
          handleVisitedCountries={handleVisitedCountries}
          handlevisitedCountriesFlags={handlevisitedCountriesFlags}
          />)}
    </div>
    </>
  )
}
