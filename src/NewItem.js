/*eslint-disable*/
import React, { Component } from 'react';
import {Input, InputNumber, Button} from 'antd';
class NewItem extends Component {


 handleSubmit(event){
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.description.value);
    console.log(event.target.image.value);
    console.log(event.target.price.value);
    console.log(event.target.discount.value);
 }


 render() {
    return (
    <div> 
    <h3>Add an Item to be Sold</h3>
    <hr/><br/>
      <form onSubmit={this.handleSubmit}>
        <Input placeholder="Item Title" name='title' required/>

        <Input placeholder="Image" name='image'required />
        <Input type="textarea" rows={4}
            placeholder="Description" name='description' required/>
        
        <span>Title: </span><InputNumber placeholder="Price" name='price' defaultValue={100}/>    
        <span>Discount: </span><InputNumber placeholder="Discount" name='discount' defaultValue={0}/>  
        <br/><br/>
        <Button type="primary" htmlType='submit' >Add Item</Button>
      </form>
      
    </div>
    );
     
 }

}

export default NewItem;