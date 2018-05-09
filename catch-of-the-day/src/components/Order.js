import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {

  static propTypes = {
    removeItemFromOrders: PropTypes.func,
    orders: PropTypes.object,
    fishes: PropTypes.object,
  }

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.orders[key];
    const isAvailable = fish && fish.status === 'available';

    //for CSSTransition tag
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter:500, exit:500 } 
    }

    //make sure that the fish is loaded before we continue
    if(!fish) return null;

    if(!isAvailable) {
      return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          Sorry, {fish ? fish.name : "the fish"} is no longer available.
        </li>
      </CSSTransition>
      )
    }

    return (
      <CSSTransition {...transitionOptions}>
      
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={count} timeout={{ enter:500, exit:500 }}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup> 
                
                lbs {fish.name}

                {formatPrice(count * fish.price)}

                <button onClick={() => this.props.removeItemFromOrders(key)}>&times;</button>  
          </span>
        </li>
    
      </CSSTransition>
    )
  }

  render() {

    const orderIds = Object.keys(this.props.orders);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.orders[key];
      const isAvailable = fish && fish.status === 'available';

      if(isAvailable) {
        return prevTotal + count * fish.price;
      }

      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Orders</h2>

        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>

        <div className="total">
          Total: {formatPrice(total)}
        </div>
      </div>
    )
  }
}

export default Order;