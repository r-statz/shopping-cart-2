import React, { Component } from 'react'

class AddItem extends Component {
  constructor(props) {
    super(props)
  }

  onChange = (e) => {
    this.setState({[e.target.className]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addToCart(this.state)
  }



  // log = (props) => {
  // console.log(props.addToCart)
  // }

  render() {

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={this.onSubmit}>
          <p>
            <label>
              Total Price: $ { this.props.total() }
            </label>
          </p>
          <p>
            <label>
              Quantity:
                <input type="number" id="quantity" className="quantity" onChange={this.onChange}
                />
            </label>
          </p>
          <p>
            <label>
              Products:
                <select className="products" onChange={this.onChange}
                >
                { this.props.products.map(item =>
                  <option key={ item.id } value={ this.props.name } > { item.name }
                  </option>
                )}
              </select>
            </label>
          </p>

          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
}


export default AddItem
