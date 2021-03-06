import React, {Component} from 'react';

class Product extends Component {
   render() {

      const {name, price, image} = this.props;

      return (
         <>
            <div>Product</div>

            <div className="product_container">
               <img src={image} alt={`${name} shoes`} />
               <div className="product_details">
                  <p>{name}</p>
                  <p>${price}</p>
                  <span>
                     <button name={name} onClick={e => this.props.deleteItem(e)}>Delete</button>
                  </span>
               </div>
            </div>
         </>
      );
   }
}

export default Product;