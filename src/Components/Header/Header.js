import React from 'react';
import routes from '../../routes';
import {Link} from 'react-router-dom';

function Header(props) {
      return (
         <header>
            <h1>SHELFIE</h1>
            <h2>Reload the page twice to view database!</h2>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/form'>Add Product</Link>
            {routes}
         </header>
      );
}

export default Header;