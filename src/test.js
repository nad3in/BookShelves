import React from 'react';
import {Overlay,Button} from 'react-bootstrap';
export default class Example extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.attachRef = target => this.setState({ target });
      this.state = {
        show: false,
      };
    }
  
    render() {
      const { show, target } = this.state;
      return (
        <>
          <Button
            variant="danger"
            ref={this.attachRef}
            onClick={() => this.setState({ show: !show })}
          >
            Click me to see
          </Button>
          <Overlay target={target} show={show} placement="top">
            {({ placement, scheduleUpdate, arrowProps,outOfBoundaries, ...props }) => (
              <div
                {...props}
                style={{
                //   backgroundColor: 'rgba(255, 100, 100, 0.85)',
                //   padding: '2px 10px',
                  color: 'white',
                //   borderRadius: 3,
                  width:'10rem',
                  ...props.style,
                }}
              >
                <Button style={{width:"10rem", margin:'0rem'}}>want to read </Button>
                <Button style={{width:"10rem",margin:'0rem'}}>Currently reading</Button>
                <Button style={{width:"10rem",margin:'0rem'}}>Read </Button>
              </div>
            )}
          </Overlay>
        </>
      );
    }
  }