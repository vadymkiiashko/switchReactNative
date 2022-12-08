import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store.js'
import  getPattern  from '../../utils/data'


// Define a type for the slice state
interface GameState {
  clicks: number,
  isActive : boolean,
  isWon: boolean,
  cells : Array<string>
}


// Define the initial state using that type
const initialState: GameState = {
  clicks: 0,
  isActive : false,
  isWon : false,
  cells : getPattern()
}

const toggle = (cells : Array<string> , x :number, y : number) => {
    if (x < cells[0].length && x >= 0 && y < cells.length && y >= 0) {
        cells[x] = cells[x].substring(0,y) + `${cells[x][y] === 'x' ? '-' : 'x' }` + cells[x].substring(y+1,cells[x].length) 
    }
} 


export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.clicks += 1
    },
    resetClicks : state => {
        state.clicks = 0
    },

    startGame : (state) => {
        state.isActive = true
        state.clicks = 0
        state.isWon = false
        
    },

    toggleCell : (state, action: PayloadAction<{indexRow : number , index : number}>)=> {
        const {indexRow , index } = action.payload 
        console.log(`toggle ${indexRow} ${index}`)
        const newCells = state.cells
            toggle (newCells , indexRow , index)    
            toggle (newCells , indexRow , index-1)
            toggle (newCells , indexRow , index+1)
            toggle (newCells , indexRow -1 , index)
            toggle (newCells , indexRow +1, index)
        state.cells = newCells;
        if(!state.isWon) {
            state.clicks += 1;
        }
       //checkForVictory() 
       let game = state.cells.filter(row => 
        row.indexOf('-') != -1)
        console.log(`comsole is won ${game}`)
        if (game.length === 0) {
            state.isWon = true
        }

    } ,

    abortGame : (state) =>{
        state.cells = getPattern()
        state.isActive = false
        state.clicks = 0
        state.isWon = false
    },
    reloadGame : state =>{
        state.clicks =  0,
        state.isWon = false,
        state.cells = getPattern()
    }

  },
})

export const { increment, startGame , toggleCell , abortGame, reloadGame} = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game.clicks

export default gameSlice.reducer

