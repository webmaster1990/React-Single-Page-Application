/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import '../../../internals/css/bootstrap.min.css';
import '../../../internals/css/bootstrap-extend.min.css';
import '../../../internals/css/site.min.css';

function App(props) {
  return (
     <div className="main-container">
       {React.Children.toArray(props.children)}
     </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;