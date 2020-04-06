import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };

    this.handleName = this.handleName.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleCreditCard(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleAddress(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.onSubmit(obj);
  }

  render() {
    const array = this.props.cartItem;
    let num = 0;
    for (let i = 0; i < array.length; i++) {
      num += array[i].price;
    }
    const total = (num / Math.pow(10, 2)).toFixed(2);

    return (
      <div className="container">
        <div className="col">
          <h1>My Cart</h1>
          <h3>Order Total: ${total}</h3>
          <form onSubmit={this.handleSubmit}> {/* ----------form-------------- */}
            {/* ------------name-------------- */}
            <div className="form-group">
              <label className="my-2">
                <p>Name</p>
                <input type="text" className="form-control" value={this.state.name} onChange={this.handleName} />
              </label>
            </div>
            {/* ------------cc-------------- */}
            <div className="form-group">
              <label className="my-2">
                <p>Credit Card</p>
                <input type="text" className="form-control" value={this.state.creditCard} onChange={this.handleCreditCard} />
              </label>
            </div>
            {/* ------------addy-------------- */}
            <div className="form-group">
              <label className="my-2">
                <p>Shipping Address</p></label>
              <textarea className="form-control" id="shippingAddress" cols="30" rows="10" value={this.state.shippingAddress} onChange={this.handleAddress}></textarea>

            </div>

            {/* ------------button-------------- */}
            <div className="col my-4"><button type="submit" className="btn btn-primary"
              onClick={() => this.props.setView('checkout', {})}
            >Place Order</button></div>
            {/* ------------button-------------- */}

          </form> {/* ----------form-------------- */}
        </div>

        <div onClick={() => this.props.setView('catalog', {})}>
          &lt; Back to Catalog
        </div>
      </div>
    );
  }
  // --------------------
}