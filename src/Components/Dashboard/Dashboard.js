import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }
   render() {
      return (
         <div>

            <div>Dashboard</div>

            <Product />

         </div>
      );
   }
}

export default Dashboard;