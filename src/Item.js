import React, { Component } from 'react'

const Item = (props) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{props.product}</div>
        <div className="col-md-2">{props.price}</div>
        <div className="col-md-2">{props.quantity}</div>
      </div>
    </div>
  )
}

export default Item
