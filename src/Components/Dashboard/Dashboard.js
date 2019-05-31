import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
   render() {

      const {inventory} = this.props;

      return (
         <div>
            <div>Dashboard</div>

               {inventory
                  ? inventory.map((product, index) => {
                     return (
                        <Product name={product.name} price={product.price} image={product.img} key={index} />
                     )
                  })
                  : null
               }

         </div>
      );
   }
}

export default Dashboard;