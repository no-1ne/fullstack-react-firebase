/*eslint-disable*/
import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Layout, Menu, Icon, Modal, InputNumber,
    Button, notification, Badge, Row, Col} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import App from './App.js';
import NewItem from './NewItem.js';

import * as firebase from 'firebase';

class MyRoutes extends Component {

constructor(props) {
    super(props);
    this.state = {
        visible : false,
        loggedIn: false,
        currentUser: null,
        cartItemCount: 0,
        cartVisible: false,
        cartItems: []
        
    };
    this.handleSiderMenuClick = this.handleSiderMenuClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAuthChange = this.handleAuthChange.bind(this);
    this.renderNewItem = this.renderNewItem.bind(this);
    this.showModalLoginWindowDisplay = this.showModalLoginWindowDisplay.bind(this);
    this.renderApp = this.renderApp.bind(this);
    this.handleHeaderMenuClick = this.handleHeaderMenuClick.bind(this);
    this.getCartContent = this.getCartContent.bind(this);
    this.handleCartDelete = this.handleCartDelete.bind(this);
    this.handleCartQuantityChange = this.handleCartQuantityChange.bind(this);
}

handleGoogleLogin(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  
}

handleFacebookLogin() {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
      
}

authRedirectSuccess(result) {
    console.log(result);
    if(result.user != null ) {
        notification.success({
        message: 'Welcome'+result.user.displayName,
        description: 'Have a great Shopping experince'
      });
  }

}

authRedirectFail(reason) {
    console.log(reason);
}

handleAuthChange(user) {
    if(user !==null) {
       this.databaseRef = firebase.database().ref('cart/'+user.uid);
        this.databaseRef.on('value', (dataSnap) => {
          console.log(Object.keys(dataSnap.val()).length);
          this.setState({
              cartItemCount: Object.keys(dataSnap.val()).length,
              cartItems: dataSnap.val()
          });
      }) 
        
        this.setState({
            loggedIn: true,
            currentUser: user
        });
    } else {
        this.databaseRef.off();
        this.setState({
            loggedIn: false,
            currentUser: null,
            cartItemCount: 0
        });
    }
}

componentDidMount (){
    firebase.auth().getRedirectResult().then(this.authRedirectSuccess).catch(this.authRedirectFail);
    firebase.auth().onAuthStateChanged(this.handleAuthChange);
}

handleHeaderMenuClick(propsPassed) {
    
    if(propsPassed.key == 1){
    this.setState({
        cartVisible: true
    });
    }

}

handleSiderMenuClick(propsPassed) {
    console.log(propsPassed);
    if(propsPassed.key == 3){
        
        if(this.state.loggedIn != true) {
        this.setState({
            visible: true
        });
        } else {
            firebase.auth().signOut();
            
        }

    }
}


handleCancel() {
  this.setState({
    visible: false,
    cartVisible: false
  });  
}

showModalLoginWindowDisplay() {
 this.setState({
    visible: true
  });   
}

renderNewItem(props) {
    return (
        <NewItem loggedInProp={this.state.loggedIn} routeProps={props} 
            showModalLoginWindow={this.showModalLoginWindowDisplay}
                loggedInUser={this.state.currentUser}/>
    );
}

renderApp(props) {
  return (
        <App loggedInProp={this.state.loggedIn} routeProps={props} 
            showModalLoginWindow={this.showModalLoginWindowDisplay}
                loggedInUser={this.state.currentUser}/>
    );  
}

handleCartDelete(cartItemKey) {
    this.databaseRef.child(cartItemKey).remove();
}

handleCartQuantityChange(cartItemKey, newVal){
  console.log(newVal);
  console.log(cartItemKey);
  this.databaseRef.child(cartItemKey).update({
      quantity: newVal
  });
}

getCartContent(){
    if(this.state.cartItemCount == 0) {
        return(<div>No items in the cart</div>);
    } else {
        console.log(this.state.cartItems);
        
        
        return Object.keys(this.state.cartItems).map((cartItemKey) => {
           let price = this.state.cartItems[cartItemKey].price;
           let discount =this.state.cartItems[cartItemKey].discount;
           let finalPrice = price - price*discount/100;
           return(
           <Row>
           <Col xs={12} sm={6} md={6} lg={6} xl={6}>
           {this.state.cartItems[cartItemKey].title}
           </Col>
           <Col xs={12} sm={6} md={6} lg={6} xl={6}>
           Quantity: <InputNumber onChange={(newVal)=>this.handleCartQuantityChange(cartItemKey, newVal)}
                defaultValue={this.state.cartItems[cartItemKey].quantity}/>
           </Col>
           <Col xs={12} sm={6} md={6} lg={6} xl={6}>
           Price: {finalPrice*this.state.cartItems[cartItemKey].quantity}
           </Col>
           <Col xs={12} sm={6} md={6} lg={6} xl={6}>
           <Button type='danger' onClick={()=>{this.handleCartDelete(cartItemKey)}} >Delete</Button>
           </Col>
            <br/><br/><hr/><br/>
           </Row>
           
           );
        });
    }
}

 render() {
    let signInText = 'SignIn/Register'; 
    if(this.state.loggedIn == true) {
        signInText = 'Logout'
    }
    
    let cartContent = this.getCartContent();
    return (<BrowserRouter>
        <div>
        
            <Layout >
      <Sider breakpoint="md" collapsedWidth="0" style={{ background: '#fff' }}>
      
    <Menu theme="light" mode="inline" onClick={this.handleSiderMenuClick}
        defaultSelectedKeys={['1']} style={{marginTop: '64px'}}>
      <Menu.Item key="1" disabled>
        <Icon type="user" />
        <span className="nav-text">My Account</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="to-top" />
        <span className="nav-text">
         <Link to='/new-item'>   Upload Item </Link>
            
         </span>
      </Menu.Item>
    <Menu.Item key="3">
        <Icon type="key" />
        <span className="nav-text">
         {signInText}
            
         </span>
      </Menu.Item>
    </Menu>
      
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', lineHeight: '64px' }}>
        
        
    <Menu theme="light" mode="horizontal" 
        onClick={this.handleHeaderMenuClick}
        defaultSelectedKeys={['1']} style={{float: 'right'}}>
      <Menu.Item key="1">
        <Icon type="shopping-cart" />
        <Badge count={this.state.cartItemCount}/>
        <span className="nav-text">Cart</span>

      </Menu.Item>
    </Menu>
        </Header>
        <Content style={{margin: '26px'}}>
        
        
            <Route exact path='/new-item' render={this.renderNewItem}/>
            <Route exact path='/' render={this.renderApp}/>
           </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    <Modal title="Login" visible={this.state.visible}
           onCancel={this.handleCancel}
          footer={null} width='300px'
        >
         
         <Button type="primary" onClick={this.handleGoogleLogin}
            style={{width: '100%', background: 'red'}}>
            Login with Google</Button>
         <br/><br/>
         <Button type="primary" onClick={this.handleFacebookLogin}
            style={{width: '100%', background: 'blue'}}>
            Login with Facebook</Button>
        </Modal>   
        
      <Modal title="Cart" visible={this.state.cartVisible}
           onCancel={this.handleCancel}
          footer={null} width='100%'
        >
        {cartContent}
        </Modal>    
        
        </div>
        
        
        
     </BrowserRouter>
     );
     
 }

}


export default MyRoutes;