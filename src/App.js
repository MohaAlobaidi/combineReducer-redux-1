import React,{Component} from 'react';
import './App.css';
 import {connect} from 'react-redux'
 import {BuyCake,BuyIceCream} from './redusers/FunreternAction'
class App extends Component {

 
 render(){
console.log(this.props)
  return (
    <div className="App">
      <div className='cakeContainer'>
          <p>Buy Cake</p>
            <p>{this.props.numOfcake}</p>
          <button onClick= {this.props.BuyCake}> click to Buy</button>
      </div>
     <hr></hr>
      <div>
        <p> Buy Ice cream</p>
           <p>{this.props.numOfIceCream}</p>
           <button onClick={this.props.BuyIce}>click to Buy Ice Cream</button>


      </div>

    </div>
  )
 }

}

function mapStateToProps(state){
  return{
    numOfcake :state.cake.numOfcake,
   numOfIceCream :state.ice.numOfIceCream
  }
}

function mapDispatchToProps(dispatch){
  return{
     BuyCake:()=>(dispatch(BuyCake())),
    BuyIce:()=>(dispatch(BuyIceCream()))
  }
}

export default connect(mapStateToProps,mapDispatchToProps ) (App);
