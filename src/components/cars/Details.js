import React from 'react'

export const Details = ({ car }) => {
  return (
    <div>
      <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target={`#${car.id}`}>
        Open
      </button>

      <div className="modal fade" id={car.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content text-center">
            <div className="modal-header ">
              <h1 className="modal-title fs-5">{car.brand} - {car.model}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Explore the exciting world of automobiles with the {car.brand} {car.model}. This stunning
                vehicle, with its striking {car.color} color, not only dazzles on the road but also offers
                exceptional performance and an unparalleled driving experience. Equipped with advanced
                technology, a smooth transmission, and a powerful engine, the {car.brand} {car.model} ensures
                thrilling and effortless driving on every journey.
              </p>
              <p>
                With a luxurious and spacious interior, this car provides comfort and convenience for
                both driver and passengers alike. Whether you're navigating through the city streets
                or venturing into new horizons, the {car.brand} {car.model}, with its {car.category}
                category, {car.transmission} transmission, and {car.year} year, invites you to enjoy
                the freedom and pleasure of driving to the fullest.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
