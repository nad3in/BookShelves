import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Book.css'
import {Overlay,Button} from 'react-bootstrap';

class Book extends Component {
    
    render () {
        return (
            <div className="book" style={{display:this.props.showBook}}>
                <div className="card bg-dark text-white imageDiv" >
                  <img className=" image card-img " src={this.props.book.imageUrl} alt="book"/>
                    <div className="card-img-overlay">
                    <Overlay target={this.props.target} show={this.props.show} placement="top">
            {({ placement, scheduleUpdate, arrowProps,outOfBoundaries, ...props }) => (
              <div
                {...props}
                style={{
                  color: 'white',
                  borderRadius:'1rem',
                  width:'10rem',
                  ...props.style,
                }}
              >
                <Button  className='bookActions' variant="dark" onClick={()=>this.props.AddtoWantToRead(this.props.book)}>Want to read </Button>
                <Button  className='bookActions' variant="dark" onClick={()=>this.props.AddCurrentlyReading(this.props.book)}>Currently reading</Button>
                <Button className='bookActions' variant="dark"onClick={()=>this.props.AddtoRead(this.props.book)}>Read </Button>
              </div>
            )}
          </Overlay>
                        <button className='addButton' ref={this.props.attachRef} onClick={this.props.toggleShow}></button>
                    </div>
                    <div className="bookDetalis">
                    <h6 className="title">{this.props.book.title}</h6>
                    <p className="author">{this.props.book.author}</p>
                    </div>
                </div>
        
            </div>
        )
    }
}

export default Book