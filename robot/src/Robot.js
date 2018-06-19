import React, { Component } from 'react';
 

class Robot extends Component {
constructor(props) {
    super(props);

    this.state = {
      xPos: props.xPos,
      yPos: props.yPos,
      direction: props.direction,
    };

}  

  render() {

    return (
      <div>
      <p>{`${this.props.xPos} ${this.props.yPos} ${this.props.direction}`}</p>
      </div>
    );
  }
}

Robot.defaultProps = {
  x: 0,
  y: 0,
  direction: 'N'
};

export default Robot;
