import React, { useRef } from 'react'
import Validations from './Validations'
import axios from '../../Axios'
import { Modal } from './Modal'

export const Create = () => {
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
    const validCategory = Validations.validateCategory(carCategory.current.value)
    const validTransmission = Validations.validateTransmission(carTransmission.current.value)

    handleErrorColor(validBrand, carBrand)
    handleErrorColor(validModel, carModel)
    handleErrorColor(validColor, carColor)
    handleErrorColor(validYear, carYear)
    handleErrorColor(validCategory, carCategory)
    handleErrorColor(validTransmission, carTransmission)

    if (validBrand && validModel && validColor && validYear && validCategory && validTransmission) {
      return true;
    } else {
      return false;
    }
  }

  const createCar = async (_car, e) => {
    e.preventDefault();
    if (validateFields()) {
      try {
        const response = await axios.post('', {
          query: `
            mutation {
              createCar(input: {
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
                }
              }
            }
          `
        })
        if (response.status === 200 && (typeof (response.data.errors) === 'undefined')) {
          alert('Car created')
          document.getElementById('car-form').reset()
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
      <Modal handleAction={createCar} refs={refs}/>
    </>
  )
}
