import React from 'react'
import { Productos } from '../components/Productos'

export const Home = ({lista}) => {
  return (
    <Productos listado={lista}/>
  )
}
