import React from 'react'
import { Card , Button } from 'react-bootstrap'
import ReactStars from 'react-stars'
const CardProduct = (player) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{player.identity}</Card.Title>
        <Card.Text>{player.age}</Card.Text>
        <Card.Text>{player.rate}</Card.Text>
        <ReactStars count={6} size={24} color2={'#ffd700'} value={player.rate} />,
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default CardProduct
