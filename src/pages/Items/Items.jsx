import React from 'react'

const Items = ({ title, quantity }) => {
  return (
    <div>
        <h4>{title}</h4>
        <p>{quantity}</p>
    </div>
  )
}

export default Items