import React, { Component } from 'react';
import Game from './Game';
import './App.css';
 
class Form extends Component { 
constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input commands:
          <input type="text" value={this.state.value} onChange={this.handleChange} required/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {commands: '' };

    this.AddCommands = this.AddCommands.bind(this);
  }

  AddCommands(commandsList) {
        this.setState({
      commands: commandsList
    });

    console.log(commandsList);
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.AddCommands} />
        <Game commands={this.state.commands}/>
      </div>
    );
  }
}


export default App;


////////////////////////////////////////


class GameJavaScript {

  initRoom(numberOfRows, numberOfColumns) {
    this._room = new Room(numberOfRows, numberOfColumns);
  }

  initRobot() {
    this._robot = new Robot(this._room.getStartPosition());
  }

  startPosition(x,y) {
    this._room.startPosition(new Point(x,y));
  }

  interpretCommands(commands) {
    const command = commands.split('');

    for(let i = 0; i < command.length; i++)
    {
      switch (command[i]) {
        case 'V':
        case 'L':
          this._robot.changeDirection(-1);
        break;
        case 'H':
        case 'R':
          this._robot.changeDirection(1);
        break;
        case 'G':
        case 'F':
          this._robot.moveRobot();
        break;
        default:
      }
    }

    const robotPos = this._robot.position;
    this._room.room[robotPos._posY][robotPos._posX] = this._robot.direction;
    this._room.print();
    this._robot.print();
  }
}


class Point {
  constructor(x, y) {
    this._posX = x;
    this._posY = y;
  }
}

const direction = {
  N: 0,
  E: 1,
  S: 2,
  W: 3
}

class Robot {
  constructor(point) {
    this._direction = direction.N;
    this._point = new Point(point._posX + offset, point._posY + offset);
  }

  print() {
    console.log((this._point._posX-offset)  + " " + (this._point._posY-offset) + " "
                + this.direction);
  }

  get direction() {
    return Object.keys(direction)[this._direction];
  }

  get position() {
      return this._point;
  }

  changeDirection(turn) {
    this._direction += turn;

    if(this._direction === 4)
      this._direction = 0;
    else if(this._direction === -1)
      this._direction = 3;
  }

  moveRobot() {
    switch (Object.keys(direction)[this._direction]) {
      case 'N':
        this._point._posY--;
      break;
      case 'E':
        this._point._posX++;
      break;
      case 'S':
        this._point._posY++;
      break;
      case 'W':
        this._point._posX--;
      break;
      default:
    }
  }
}


class Room { //extends RoomInterface {
  constructor(numberOfRows, numberOfColumns) {
//    super(offset);
    this._room = Room.generateRoom(numberOfRows, numberOfColumns);
  }

  startPosition(point) {
    this._startPosition = new Point(point._posX, point._posY);
  }

  getStartPosition() {
    return this._startPosition;
  }

  get room() {
    return this._room;
  }

  print() {
    console.log(this._room.map(row => row.join(' | ')).join('\n'));
  }

  static generateRoom(numberOfRows, numberOfColumns) {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        if(offset === rowIndex && offset === columnIndex)
          row.push('O');
        else
          row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

}

const gameRect = new GameJavaScript();
let offset = 0;
gameRect.initRoom(5,5);
gameRect.startPosition(1,2);
gameRect.initRobot();

/*const offset = 10;
game.initRoom(10*2+1,10*2+1);
game.startPosition(0,0);
game.initRobot();
*/
let commands = 'HGHGGHGHG';
gameRect.interpretCommands(commands);

const gameCircle = new GameJavaScript();
offset = 10;
gameCircle.initRoom(10*2+1,10*2+1);
gameCircle.startPosition(0,0);
gameCircle.initRobot();

commands = 'RRFLFFLRF';
gameCircle.interpretCommands(commands);

