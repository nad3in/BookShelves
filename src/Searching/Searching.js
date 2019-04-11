import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Search.css'
import BookContainerConnected from '../Book/BookContainer';
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

class Searching extends Component {
    onChange=(e)=>{
            this.props.Searching(e.target.value.trim());
            if(this.props.searching===false){
                this.props.startedSeraching();
            }
            if(e.target.value.trim()===""){
                this.props.resetSearch();
            }
    }
    render () {
        return (

            <div className="searchingDiv">
                <Link to="/" className="backButton"><img className="backImage"  src={require('../images/back.png')} alt=""></img></Link>
                <input type="text" className=" search form-control" id="searchQuery" placeholder="search for a book, author or a book's ISBN" onChange={this.onChange}/>
              {this.props.searching? <React.Fragment>{this.props.isLoading?<Spinner animation="border" variant="dark" />:
                <React.Fragment>{this.props.books.length>0?<div className="books">{this.props.books.map((b,i)=><BookContainerConnected sender="search" book={b} key={i}/>)}</div>
                :<React.Fragment>No results were found!</React.Fragment>}</React.Fragment>}</React.Fragment>:""}

            </div>
            
        )
    }
}

export default Searching