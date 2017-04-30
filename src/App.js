/*eslint-disable*/
import React, { Component } from 'react';

import './App.css';

import MyCard from "./MyCard";

import { Row, Col, Card } from 'antd';

import * as firebase from 'firebase';




class App extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          allItems : []
      }
  }
    
  componentDidMount() {
      console.log("in Componenet Mount at " + Date());
      this.databaseRef = firebase.database().ref('items');
      this.databaseRef.on('value', (dataSnap) => {
          console.log(dataSnap.val());
          console.log(Date());
          this.setState({allItems:dataSnap.val() });
      })
  }  
  
  componentWillUnmount() {
      this.databaseRef.off();
  }
    
  
    
  render() {
    console.log("in render " + Date());
    let allItemsDisplayed = [];
    
    if(this.state.allItems.length == 0) {
       allItemsDisplayed = 
       <Col xs={24} sm={12} md={8} lg={8} xl={8}>
       <Card loading title="Loading" >
        Whatever content
        </Card></Col> ;
    } else {
    allItemsDisplayed = Object.keys(this.state.allItems).map((key) => {
            return <Col key={key} xs={24} sm={12} md={8} lg={8} xl={8}>
                <MyCard itemId={key} passedItem={this.state.allItems[key]} 
                    showModalLoginWindow={this.props.showModalLoginWindow}
                    loggedInUser={this.props.loggedInUser}
                    routeProps = {this.props.routeProps}
                    loggedInProp= {this.props.loggedInProp}/>
            </Col>;
    });
    }

                   
    return (
    <div>
            <Row>
             {allItemsDisplayed}
            </Row>
     </div>
    );
  }
}

export default App;