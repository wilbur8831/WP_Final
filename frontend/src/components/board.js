// import { useState } from 'react'
import './../style.css'
import Grid1x1 from './Grid1x1'

function Board(props){
    const grids=new Array(8)
    for(var i=0;i<8;i++)
    {
      grids[i]=[]
      for(var j=0;j<8;j++){
        grids[i].push(
          <Grid1x1  
            row_index={i} 
            col_index={j}
            handle_1x1_click={props.handle_1x1_click}
            value={props.board[i][j]}
          />
        )
      }
    }
    return (
        <div className="board">
          {grids.map((row)=>{
            return<div className="row">{row}</div>
          })}
        </div>
    )
}

export default Board