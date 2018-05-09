import React from 'react';
import PropTypes from 'prop-types';

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>Catch 
//           <span className="ofThe">
//             <span className="of">of</span>
//             <span className="the">the</span>
//           </span>
//           Day
//         </h1>

//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }


//Stateless Functional Components -- components that use plain JS, only has render function

const Header = (props) => (
  <header className="top">
    <h1>Catch 
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
    Day
    </h1>

    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
</header>
);

//PropTypes: If stateless function, declare it after the functions this way:
Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Header;