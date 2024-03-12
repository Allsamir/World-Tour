import React, { useState } from 'react'

interface ChildProps {
         name: string
         flags: string
         alt: string
         population: number
         continents: string
         countryCode: string
         handleVisitedCountries: (country: string) => void
         handlevisitedCountriesFlags: (imgURL: string) => void
}


const Country: React.FC<ChildProps> = ({name, flags, alt, population, continents, countryCode, handleVisitedCountries, handlevisitedCountriesFlags}) => {

          const [visited, setVisited] = useState(false)

  return (
    <div className="border border-solid border-black p-8 text-center">
          <h3>{visited && 'I have visited this country'}</h3>
          <h1 className={`text-2xl font-bold ${visited && 'text-green-500'}`}>{name}</h1>
          <img src={flags} alt={alt} className="mx-auto p-8 w-56"/>
          <h2 className="text-base">Population: <span className="font-bold">{population}</span></h2>
          <h2 className="text-base">Continent: <span className="font-bold">{continents}</span></h2>
          <h2 className="text-base">Country-Code: <span className="font-bold">{countryCode}</span></h2>
          <button onClick={() => {setVisited(!visited); handleVisitedCountries(name); handlevisitedCountriesFlags(flags)}} className={`btn btn-outline mt-8 text-base`} disabled={visited}>Visited</button>
    </div>
  )
}

export default Country