import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*class Square extends React.Component {
  //this constructor initializes the state, meaning that the board remembers a click filling it with an x. If we want the program to remember clicks and actions, we use this.state in constructors 
  //all React component classes that have a constructor should start with a super(props) call 
  
   //the props value being returned here is from the Rendersquare method in the class board. "Passing a prop (properties)" from the parent componenet Board, 
    //we can tell this is the parent because the Class Board uses renderSquare, calling the class Square. this how information flows in react, hierachial.
    //adding logging to the console to see what is being returned from the onClick. instead of using Function we use => which stops the fire every time the component re renders 
    /*{console.log.apply('clickedHere');}}>*/
  /*render() 
  //changed from this.props value, to this.states value to display the current state of the square, which is an X.\
  //calling setState in a component automatically updates child components in React
  {   
    return (
      <button 
        className="square" 
          onClick={() => this.props.onClick()}
          > 
        {this.props.value}
      </button>
    );
  }
}*/

class Square extends React.Component {
  render() {
    return (
      <button 
        className="square" 
      onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
    xIsNext: !this.state.xIsNext,
    });
  }


  renderSquare(i) {
    return ( 
    <Square 
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
    />
    );
  }
  
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
    }
    return null;
  }


  