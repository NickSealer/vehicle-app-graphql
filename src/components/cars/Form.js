import React from 'react'

export const Form = ({car = null, handleAction, refs}) => {
  const carPresented = car ? true : false;
  const transmissionMap = {
    'AT': 0,
    'MT': 1
  }
  const categoryMap = {
    'Convertible': 0,
    'Coupe': 1,
    'Electric Car': 2,
    'Hatchback': 3,
    'Hybrid': 4,
    'Luxury Car': 5,
    'Luxury SUV': 6,
    'Sedan': 7,
    'Sport Car': 8,
    'SUV': 9,
    'Truck': 10,
    'Van': 11
  }

  return (
    <form onSubmit={e => handleAction(car, e)} id='car-form'>
      <div className='row'>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[brand]' className='form-label'>Brand</label>
            <input type='text' className='form-control' id='car[brand]' ref={refs && refs.carBrand} name='car[brand]' defaultValue={carPresented ? car.brand : ''} placeholder='Example brand'/>
            <div className='form-text'>Brand or manufacturer of the car.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[model]' className='form-label'>Model</label>
            <input type='text' className='form-control' id='car[model]' ref={refs && refs.carModel} name='car[model]' defaultValue={carPresented ? car.model : ''} placeholder='Example model'/>
            <div className='form-text'>Only the model name.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[color]' className='form-label'>Color</label>
            <input type='text' className='form-control' id='car[color]' ref={refs && refs.carColor} name='car[color]' defaultValue={carPresented ? car.color : ''} placeholder='Color'/>
            <div className='form-text'>May be multiple.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[year]' className='form-label'>Year</label>
            <input type='text' className='form-control' id='car[year]' ref={refs && refs.carYear} name='car[year]' defaultValue={carPresented ? car.year : ''} placeholder='2000'/>
            <div className='form-text'>Model year.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-5'>
            <label htmlFor='car[transmission]' className='form-label'>Transmission</label>
            <select className='form-select' id='car[transmission]' ref={refs && refs.carTransmission} name='car[transmission]' defaultValue={carPresented ? transmissionMap[car.transmission] : ''}>
              <option value='1'>Manual Transmission</option>
              <option value='0'>Automatic Transmission</option>
            </select>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-5'>
            <label htmlFor='car[category]' className='form-label'>Category</label>
            <select className='form-select' id='car[category]' ref={refs && refs.carCategory} name='car[category]' defaultValue={carPresented ? categoryMap[car.category] : ''}>
              <option value='0'>Convertible</option>
              <option value='1'>Coupe</option>
              <option value='2'>Electric Car</option>
              <option value='3'>Hatchback</option>
              <option value='4'>Hybrid</option>
              <option value='5'>Luxury Car</option>
              <option value='6'>Luxury SUV</option>
              <option value='7'>Sedan</option>
              <option value='8'>Sport Car</option>
              <option value='9'>SUV</option>
              <option value='10'>Truck</option>
              <option value='11'>Van</option>
            </select>
          </div>
        </div>
      </div>
      <div className='form-actions'>
        <button type='submit' className='btn btn-outline-success'>Save</button>
        <button type='button' className='btn btn-outline-secondary' data-bs-dismiss='modal'>Close</button>
      </div>
    </form>
  )
}
