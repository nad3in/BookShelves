import React, { Component } from 'react'
import Shelf from './Shelf';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {getStateFromLocalStorage} from '../Actions/BookActions'

class Shelves extends Component {
    componentDidMount(){
        var state=JSON.parse(localStorage.getItem('state'))
        if(state!==null){
       this.props.GetStateFromLocalStorage(state)
       console.log(state);
       
        }
    }
    render () {        
        return (
            <div>
                {this.props.currentlyReading.length===0&&this.props.read.length===0&&this.props.wantToRead.length===0?<p className="noBooksInStore">It seams like you don't have any books in your shelves would you like to search for some books 
                 <Link to="/search" className="searchButtonNoBooks"><img className="searchImage"  src={require('../images/search.png')} alt=""></img></Link>
</p>
                :<React.Fragment>
                <Shelf shelfName={"Currently Reading"} books={this.props.currentlyReading}/>
                <Shelf shelfName={"Want to Read"} books={this.props.wantToRead}/>
                <Shelf shelfName={"Read"} books={this.props.read}/>
                <Link to="/search" className="searchButton"><img className="searchImage"  src={require('../images/search.png')} alt=""></img></Link>
                </React.Fragment>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { currentlyReading: state.currentlyReading,wantToRead:state.wantToRead,read:state.read };
  }
  
  const mapDispatchToProps = {
        GetStateFromLocalStorage: state =>getStateFromLocalStorage(state)
    };
    
    const ShelvesConnected = connect(
      mapStateToProps,
      mapDispatchToProps
    )(Shelves);
    export default ShelvesConnected;