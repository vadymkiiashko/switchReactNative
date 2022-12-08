import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { toggleCell } from '../features/game/gameSlice'


type Props = {index : number , indexRow : number  , element : string}


const  Cell: React.FC<Props> = ({index , indexRow , element }) => { 

    const { isActive , isWon } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()
    const style :Array<{}> = [ styles.cell]
    if(index ===4) style.push(styles.cellLast)
    if(indexRow ===4 ) style.push(styles.cellBottom)
    if (isWon) {
        style.push(styles.cellVictory)
    } else { 
        if ( !isActive) {
            style.push(styles.cellInitial)
        } else { 
            if(element === 'x'){
                style.push(styles.cellActive)
            }
        }
    }
    return(
        
        <TouchableOpacity  
            style = {style}
            disabled ={isActive ? false : true}
            onPress ={()=>dispatch(toggleCell({indexRow , index}))}
        >
        </TouchableOpacity>
    )
 }

export default Cell

const styles = StyleSheet.create({
    cell : {
        backgroundColor : 'transparent',
        borderColor :'#E7E7EA',
        borderRightWidth : 0,
        borderBottomWidth :0,
        borderLeftWidth :2,
        borderTopWidth : 2,
        flexGrow :2,
      },
      cellLast :{
        borderColor :'#E7E7EA',
        borderRightWidth : 2,
        
      } ,
      cellBottom : {
        borderBottomWidth :2,
  
      } ,
      cellInitial : {
        backgroundColor : 'transparent'
      } , 
      cellVictory : {
        backgroundColor : '#73DCE6'
      },
      cellActive :  {
        backgroundColor : '#8A85BD'
      }
})
