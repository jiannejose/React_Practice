import React from 'react';
import OrderList from './OrderList';

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <h3>Orders</h3>
        <OrderList />
      </div>
    )
  }
}

export default Order;