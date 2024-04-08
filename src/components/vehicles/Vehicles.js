import React, { useRef, useState } from 'react'
import { ResultsTable } from './ResultsTable';
import axios from '../../Axios';
import { FormSearch } from './FormSearch';
import { Filters } from './Filters';

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState();
  const [status, setStatus] = useState(0);
  let [query, setQuery] = useState('');
  let [vehicleType, setVehicleType] = useState('all');
  let [page, setPage] = useState(1);
  const queryInput = useRef('queryInput')

  const getVehicles = async (query, vehicleType, page) => {
    try {
      const response = await axios.post('', {
        query: `
          query {
            search(query: "${query}", vehicleType: "${vehicleType}", page: ${page}, limit: 20){
              uuid
              searchableType
              content
            }
          }
        `
      })
      setStatus(response.status)
      setVehicles(response.data)
      setQuery(query)
      setVehicleType(vehicleType)
      setPage(page)
    } catch (error) {
      alert(`Error: ${error}`);
    }
  }

  const sendQuery = async (e) => {
    e.preventDefault();

    query = queryInput.current.value;

    if (query.length < 1) {
      return e.preventDefault();
    }

    await getVehicles(query, vehicleType, page)
  }

  const handleNextPage = () => {
    if (vehicles.data.search.length === 20) {
      page += 1;
      getVehicles(query, vehicleType, page)
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      page -= 1;
      getVehicles(query, vehicleType, page)
    }
  }

  const handleFilter = (filter) => {
    getVehicles(query, filter, 1)
  }

  return (
    <>
      <FormSearch clickFunction={sendQuery} queryInput={queryInput} />
      {status === 200 ? (
        <div className='mt-3'>
          <Filters onClickAction={handleFilter} />
          <ResultsTable vehicles={vehicles.data.search} previous={handlePreviousPage} next={handleNextPage} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}
