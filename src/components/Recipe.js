import React, { Component } from 'react'
import { connect } from 'react-redux'

import {cleanItems} from './actions/CartActions'

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        cleanItems: ()=>{dispatch(cleanItems())}
    }
}

class Recipe extends Component{

    handleClean = () =>{
        this.props.cleanItems();
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                        <li className="collection-item"><b>Total: {this.props.total.toFixed(2)} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn"
                            onClick={()=>{this.handleClean()}}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
