import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loading } from '../Loading';
import axios from '../../Axios';
import { Table } from './Table';

export const Cars = () => {
  const [cars, setCars] = useState();
  const [status, setStatus] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  
  useEffect(() => {
    try {
      const getCars = async () => {
        const response = await axios.post('', {
          query: `
            query {
              cars {
                id
                brand
                model
                color
                year
                transmission
                category
              }
            }
          `
        });
        setStatus(response.status);
        setCars(response.data.data.cars)
      }
      getCars();
    } catch (error) {
      alert(`Error: ${error}`);
    }
  }, []);

  return (
    <>
      {status === 200 ? (
        <Table cars={cars}/>
      ) : (
        <Loading />
      )}
      </>
  )
}
