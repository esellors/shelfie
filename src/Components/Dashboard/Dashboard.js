import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
   deleteItem(e) {
      e.preventDefault(e);
      axios.delete(`/api/inventory/${e.target.name}`)
         .then(() => {
            this.props.getInventory();
         })
         .catch(err => console.log(err));
   }
   render() {

      const {inventory} = this.props;

      return (
         <div>
            <div>Dashboard</div>

               {inventory
                  ? inventory.map((product, index) => {
                     return (
                        <Product name={product.name} price={product.price} prod_id={product.id} image={product.img} key={index} deleteItem={this.deleteItem} />
                     )
                  })
                  : null
               }

         </div>
      );
   }
}

export default Dashboard;