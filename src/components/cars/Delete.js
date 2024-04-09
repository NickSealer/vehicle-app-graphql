import axios from '../../Axios'
import React from 'react'

export const Delete = ({ car, rowId }) => {

  const deleteCar = async () => {
    try {
      const response = await axios.post('', {
        query: `
          mutation {
            deleteCar(input: {id: "${car.id}"}){
              car {
                id
              }
            }
          }
        `
      })
      if (response.status === 200 && (typeof (response.data.errors) === 'undefined')) {
        document.getElementById(rowId).remove();
        alert('Car deleted.')
      } else {
        alert(response.data.errors[0].message)
      }
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  const handleDelete = (car) => {
    let result = window.confirm(`Are you sure you want to delete car ${car.brand} ${car.model}?`)

    if (result) {
      deleteCar();
    }
  }

  return (
    <>
      <button className='btn btn-outline-danger' onClick={e => handleDelete(car)}>Delete</button>
    </>
  )
}
