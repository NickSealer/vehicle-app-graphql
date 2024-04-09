import React, { useRef, useState } from 'react'
import { Modal } from './Modal'
import Validations from './Validations'
import axios from '../../Axios'

export const Update = ({ car }) => {
  const carBrand = useRef('carBrand')
  const carModel = useRef('carModel')
  const carColor = useRef('carColor')
  const carYear = useRef('carYear')
  const carTransmission = useRef('carTransmission')
  const carCategory = useRef('carCategory')

  const refs = {
    carBrand: carBrand,
    carModel: carModel,
    carColor: carColor,
    carYear: carYear,
    carTransmission: carTransmission,
    carCategory: carCategory
  }

  const handleErrorColor = (isValid, ref) => {
    return isValid ? ref.current.style.borderColor = '#dee2e6' : ref.current.style.borderColor = 'red'
  }

  const validateFields = () => {
    const validBrand = Validations.validateString(carBrand.current.value)
    const validModel = Validations.validateString(carModel.current.value)
    const validColor = Validations.validateString(carColor.current.value)
    const validYear = Validations.validateYear(carYear.current.value)
    const validTransmission = Validations.validateTransmission(carTransmission.current.value)
    const validCategory = Validations.validateCategory(carCategory.current.value)

    handleErrorColor(validBrand, carBrand)
    handleErrorColor(validModel, carModel)
    handleErrorColor(validColor, carColor)
    handleErrorColor(validYear, carYear)
    handleErrorColor(validTransmission, carTransmission)
    handleErrorColor(validCategory, carCategory)

    if (validBrand && validModel && validColor && validYear && validTransmission && validCategory) {
      return true;
    } else {
      return false;
    }
  }

  const updateCar = async (car, e) => {
    e.preventDefault();
    if (validateFields()) {
      try {
        const response = await axios.post('', {
          query: `
            mutation {
              updateCar(input: {
                id: "${car.id}",
                params: {
                  brand: "${carBrand.current.value}",
                  model: "${carModel.current.value}",
                  color: "${carColor.current.value}",
                  year: ${carYear.current.value},
                  category: ${carCategory.current.value},
                  transmission: ${carTransmission.current.value}
                }
              }){
                car {
                  id
                  slug
                  brand
                  model
                  color
                  year
                  transmission
                  category
                }
              }
            }
          `
        })
        if (response.status === 200 && (typeof (response.data.errors) === 'undefined')) {
          alert('Car updated.')
        } else {
          alert(response.data.errors[0].message)
        }
      } catch (error) {
        alert(`Error: ${error}`)
      }
    } else {
      alert('Complete all fields without errors.')
    }
  }

  return (
    <>
      <Modal car={car} action='put' handleAction={updateCar} refs={refs} />
    </>
  )
}
