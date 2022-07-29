import './App.css';
import React, {useState} from 'react'
import xIcon from './icons/x.png'
import oIcon from './icons/o.png'

function App() {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [count, setCount] = useState(0)

  const winnerCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function isWinner() {
    // let sign = (count % 2 === 0) ? <img src={xIcon}/> : <img src={oIcon}/>
    let sign = (count % 2 === 0) ? 'X' : 'O'
    for (let i = 0; i < winnerCombination.length; i++) {
      let combinationLine = winnerCombination[i]
      setTimeout(() => {
        if (cells[combinationLine[0]] === sign && cells[combinationLine[1]] === sign && cells[combinationLine[2]] === sign) {
          alert(sign + ' won !')
          setTimeout(() => {
            setCells(Array(9).fill(null))
            setCount(0)
          }, 1000)
        }
      }, 100)
    }
  }
  // 

  function cellPointer(event) {
    let dataOfCell = event.target.getAttribute('data')
    let allCells = cells
    if (allCells[dataOfCell] === null) {
      // allCells[dataOfCell] = (count % 2 === 0) ? <img src={xIcon}/> : <img src={oIcon}/>
      allCells[dataOfCell] = (count % 2 === 0) ? 'X' : 'O'
      setCount(count + 1)
      setCells(allCells)
    } else {
      alert('This cell was booking !')
    }
    isWinner()
  }

  return (
    <div className="App">
      <h1 className='caption'>Tic-Tac Toe</h1>
      <div className="game-wrapper">
        <div className="cell" onClick={cellPointer} data='0'>{cells[0]}</div>
        <div className="cell" onClick={cellPointer} data='1'>{cells[1]}</div>
        <div className="cell" onClick={cellPointer} data='2'>{cells[2]}</div>
        <div className="cell" onClick={cellPointer} data='3'>{cells[3]}</div>
        <div className="cell" onClick={cellPointer} data='4'>{cells[4]}</div>
        <div className="cell" onClick={cellPointer} data='5'>{cells[5]}</div>
        <div className="cell" onClick={cellPointer} data='6'>{cells[6]}</div>
        <div className="cell" onClick={cellPointer} data='7'>{cells[7]}</div>
        <div className="cell" onClick={cellPointer} data='8'>{cells[8]}</div>
      </div>
    </div>
  );
}

export default App;
