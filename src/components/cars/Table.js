import React from 'react'
import { Details } from './Details'
import { Delete } from './Delete'
import { Update } from './Update'

export const Table = ({cars}) => {
  return (
    <>
      <div className='table-responsive'>
        <h4 className='text-center'>Cars</h4>
        <table className='table table-hover'>
          <thead className='table-success'>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Color</th>
              <th>Year</th>
              <th>Transmission</th>
              <th>Category</th>
              <th style={{width: '0%'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              cars.map((car) => {
                return (
                  <tr key={car.id} id={`delete_${car.id}`}>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                    <td>{car.year}</td>
                    <td>{car.transmission}</td>
                    <td>{car.category}</td>
                    <td className='actions'>
                      <Details car={car} />
                      <Update car={car}/>
                      <Delete car={car} rowId={`delete_${car.id}`}/>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
