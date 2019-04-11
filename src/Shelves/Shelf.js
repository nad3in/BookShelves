import React, { Component } from 'react'
import BookContainerConnected from '../Book/BookContainer';
import './shelf.css'
class Shelf extends Component {
    render () {
        return (
            <div className="shelf">
                <h2 className="shelfName">{this.props.shelfName}</h2>
                {this.props.books.length===0?`It seams like you don't have any books in your ${this.props.shelfName}`: <div className="books">
                    {this.props.books.map((book,i)=> <BookContainerConnected book={book} key={i}/>)}
                </div>}
            </div>
        )
    }
}

export default Shelf