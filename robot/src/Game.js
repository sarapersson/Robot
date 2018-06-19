import React, { Component } from 'react';
import Robot from './Robot';

class Game extends Component {
constructor(props) {
    super(props);

    this.state = { 
      xPos: 1, 
      yPos: 2, 
      direction: 'N', 
     };
  }

  interpretCommands(commands) {
      const command = commands.split('');

    for(let i = 0; i < command.length; i++)
    {
      switch (command[i]) {
        case 'V':
        case 'L':
          console.log(command[i]);
//          this._robot.changeDirection(-1);
        break;
        case 'H':
        case 'R':
          console.log(command[i]);
  //        this._robot.changeDirection(1);
        break;
        case 'G':
        case 'F':
          console.log(command[i]);
    //      this._robot.moveRobot();
        break;
        default:
      }
    } 

  }

  render() {
    const commands = this.props.commands;

    return (
      <div>
        <div>
          {this.interpretCommands(commands)}
         </div>
        <div>
          {commands}
         </div>
         <Robot xPos={this.state.xPos} yPos={this.state.yPos} direction={this.state.direction} />
      </div>
    );
  }
}

export default Game;
