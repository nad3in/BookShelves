import React, { Component } from 'react'
import Book from './Book';
import { connect } from "react-redux";
import {addBookToCurrentlyReading,addBookToWantToRead,addBookToRead} from "../Actions/BookActions";

class BookContainer extends Component {
    constructor(...args) {
        super(...args);
    
        this.attachRef = target => this.setState({ target });
        this.state = {
         show: false,
         showbook:""
        };
        this.AddtoCurrentlyReading=this.AddtoCurrentlyReading.bind(this);
        this.AddtoWantToRead=this.AddtoWantToRead.bind(this);
        this.AddtoRead=this.AddtoRead.bind(this);
        this.toggleShow=this.toggleShow.bind(this);
      }
      toggleShow(){
        this.setState(PrevState=> PrevState.show= !PrevState.show);        
    }
    AddtoCurrentlyReading(book){
        this.props.AddBookToCurrentlyReading(book);
        if(this.props.sender==="search")
        this.setState({showBook:"none"});
        this.toggleShow();
    }
    AddtoWantToRead(book){
        this.props.AddBookToWantToRead(book);
        if(this.props.sender==="search")
        this.setState({showBook:"none"});
        this.toggleShow();
    }
    AddtoRead(book){
        this.props.AddBookToRead(book);   
        if(this.props.sender==="search")
        this.setState({showBook:"none"}); 
        this.toggleShow();          
    }

    render () {
        const { show, target } = this.state;                
        return (
            <React.Fragment>
                <Book showBook={this.state.showBook} show={show} AddtoRead={this.AddtoRead} AddtoWantToRead={this.AddtoWantToRead} AddCurrentlyReading={this.AddtoCurrentlyReading} target={target} attachRef={this.attachRef} toggleShow={this.toggleShow} book={this.props.book}/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
  return { state: state };
}

const mapDispatchToProps = {
    AddBookToCurrentlyReading: book =>addBookToCurrentlyReading(book),
    AddBookToWantToRead: book =>addBookToWantToRead(book),
    AddBookToRead: book =>addBookToRead(book)
  };
  
  const BookContainerConnected = connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookContainer);
  export default BookContainerConnected;
