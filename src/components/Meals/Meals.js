import React from 'react'

import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals =() => {
  return (
    <>
    <MealsSummary/>
    <AvailableMeals/>
    </>
  )
}

Meals.propTypes = {}

export default Meals