import React from 'react'
import CardProduct from './CardProduct'
import {data} from '../data'
const List = () => {
  return (
   <div>
     { data.map = (  (e) => <CardProduct player = {e} /> )}
     </div>
  )
}

export default List
