import React from 'react';
import PropTypes from 'prop-types';

// const Login = (props) => (
//   <nav className="login">
//     <h2>Inventory Log-in</h2>
//     <p>Sign in to manage your store's inventory</p>
//     <button className="github" onClick={() => props.authenticate()}>Log-in with Github</button>
//     <button className="facebook" onClick={() => props.authenticate()>Log-in with Facebook</button>    
//   </nav>
// );

class Login extends React.Component {

  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  } 

  render() {
    return (
      <nav className="login">
        <h2>Inventory Log-in</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button className="github" onClick={() => this.props.authenticate('Github')}>Log-in with Github</button>
        <button className="facebook" onClick={() => this.props.authenticate('Facebook')}>Log-in with Facebook</button>        
      </nav>
    );
  }
}

export default Login;
