import React, {Component} from 'react';

class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         price: 0,
         img: ''
      }
      this.updateName = this.updateName.bind(this);
      this.updatePrice = this.updatePrice.bind(this);
      this.updateImg = this.updateImg.bind(this);
      this.clearInputs = this.clearInputs.bind(this);
   }
   updateName(e) {
      let userInput = e.target.value;
      this.setState({
         name: userInput
      })
   }
   updatePrice(e) {
      let userInput = e.target.value;
      this.setState({
         price: userInput
      })
   }
   updateImg(e) {
      let userInput = e.target.value;
      this.setState({
         img: userInput
      })
   }
   clearInputs(e) {
      e.preventDefault();
      document.getElementById('product_form').reset();
      this.setState({
         name: '',
         price: 0,
         img: ''
      });
   }
   render() {
      return (
         <div id='form'>
            <form id='product_form'>
               <label htmlFor='input_img'>Image URL:</label>
               <input 
                  name='input_img' 
                  id='input_img' 
                  type='text' 
                  onChange={e => this.updateImg(e)}
               />
               <label htmlFor='input_name'>Product Name:</label>
               <input 
                  name='input_name' 
                  id='input_name' 
                  type='text' 
                  onChange={e => this.updateName(e)}
               />
               <label htmlFor='input_price'>Price:</label>
               <input 
                  name='input_price' 
                  id='input_price' 
                  type='text' 
                  onChange={e => this.updatePrice(e)}
               />
               <div id='input_buttons'>
                  <button onClick={e => this.clearInputs(e)}>Cancel</button>
                  <button>Add to Inventory</button>
               </div>
            </form>
         </div>
      );
   }
}

export default Form;